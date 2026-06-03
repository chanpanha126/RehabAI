import { EXERCISES } from './exercises.js';

export class GameManager {
    constructor(engine, feedback, audio) {
        this.engine = engine;
        this.feedback = feedback;
        this.audio = audio;
        
        // Session state
        this.exerciseId = null;
        this.targetReps = 10;
        this.completedReps = 0;
        this.totalScore = 0;
        this.comboMultiplier = 1;
        this.consecutiveGoodReps = 0;
        this.accuracyHistory = [];
        this.startTime = null;
        
        // DOM bindings will be injected via setUIElements
        this.ui = {};
        
        // Bind engine callback
        this.engine.onRepCompleted = (score) => this.handleRepComplete(score);
    }

    setUIElements(uiConfig) {
        this.ui = uiConfig;
    }

    startSession(exerciseId, difficulty) {
        this.exerciseId = exerciseId;
        this.targetReps = difficulty === 'easy' ? 8 : (difficulty === 'medium' ? 10 : 15);
        this.completedReps = 0;
        this.totalScore = 0;
        this.comboMultiplier = 1;
        this.consecutiveGoodReps = 0;
        this.accuracyHistory = [];
        this.startTime = Date.now();
        
        this.engine.setExercise(exerciseId, difficulty);
        this.updateHUD();
    }

    handleRepComplete(formScore) {
        this.completedReps++;
        
        // Score logic
        let baseScore = Math.max(10, formScore);
        
        // Combo logic
        if (formScore > 80) {
            this.consecutiveGoodReps++;
            if (this.consecutiveGoodReps >= 5) this.comboMultiplier = 3;
            else if (this.consecutiveGoodReps >= 3) this.comboMultiplier = 2;
            else if (this.consecutiveGoodReps >= 2) this.comboMultiplier = 1.5;
        } else if (formScore < 50) {
            this.consecutiveGoodReps = 0;
            this.comboMultiplier = 1;
        }

        const repScore = baseScore * this.comboMultiplier;
        this.totalScore += repScore;
        this.accuracyHistory.push(formScore);

        // Feedback & UI
        this.feedback.showRepScore(repScore, this.comboMultiplier > 1);
        
        if (this.comboMultiplier > 1 && this.consecutiveGoodReps === 2) {
            this.audio.playComboStart();
            this.feedback.showFeedback(`Combo x${this.comboMultiplier}!`, "perfect");
        } else {
            this.audio.playRepComplete();
        }

        this.updateHUD();
        this.checkAdaptiveDifficulty();

        // End session check
        if (this.completedReps >= this.targetReps) {
            setTimeout(() => this.endSession(), 1000);
        }
    }

    updateHUD() {
        if (!this.ui.repsEl) return;

        this.ui.repsEl.innerText = `${this.completedReps} / ${this.targetReps}`;
        
        // Animate score counter (simple)
        this.ui.scoreEl.innerText = Math.round(this.totalScore);
        
        if (this.comboMultiplier > 1) {
            this.ui.comboEl.innerText = `×${this.comboMultiplier}`;
            this.ui.comboEl.classList.remove('hidden');
        } else {
            this.ui.comboEl.classList.add('hidden');
        }

        const avgAcc = this.getAverageAccuracy();
        this.ui.accuracyEl.innerText = `${Math.round(avgAcc)}%`;

        const progressPercent = (this.completedReps / this.targetReps) * 100;
        this.ui.progressFillEl.style.width = `${progressPercent}%`;
    }

    getAverageAccuracy() {
        if (this.accuracyHistory.length === 0) return 0;
        const sum = this.accuracyHistory.reduce((a, b) => a + b, 0);
        return sum / this.accuracyHistory.length;
    }

    checkAdaptiveDifficulty() {
        // Evaluate every 5 reps
        if (this.completedReps > 0 && this.completedReps % 5 === 0) {
            const recentAcc = this.accuracyHistory.slice(-5).reduce((a, b) => a + b, 0) / 5;
            
            if (recentAcc < 40 && this.engine.difficulty !== 'easy') {
                this.audio.speak("Let's make this a bit easier.");
                this.engine.difficulty = 'easy'; // fallback to easy
                this.feedback.showFeedback("Difficulty lowered", "warn");
            } else if (recentAcc > 90 && this.engine.difficulty === 'easy') {
                this.audio.speak("Great job, let's step it up!");
                this.engine.difficulty = 'medium';
                this.feedback.showFeedback("Difficulty raised", "good");
            }
        }
    }

    endSession() {
        this.audio.playSessionComplete();
        
        const durationSeconds = Math.floor((Date.now() - this.startTime) / 1000);
        const avgAcc = this.getAverageAccuracy();
        
        const results = {
            exerciseId: this.exerciseId,
            exerciseName: EXERCISES[this.exerciseId].name,
            reps: this.completedReps,
            targetReps: this.targetReps,
            score: Math.round(this.totalScore),
            accuracy: Math.round(avgAcc),
            duration: durationSeconds,
            difficulty: this.engine.difficulty,
            date: new Date().toISOString()
        };

        if (this.ui.onSessionComplete) {
            this.ui.onSessionComplete(results);
        }
    }
}
