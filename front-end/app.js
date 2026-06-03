import { EXERCISES } from './exercises.js';
import { CameraManager } from './camera.js';
import { SkeletonRenderer } from './skeleton-renderer.js';
import { ExerciseEngine } from './exercise-engine.js';
import { GameManager } from './game-manager.js';
import { FeedbackManager } from './feedback.js';
import { AudioManager } from './audio.js';
import { DashboardManager } from './dashboard.js';
import { GhostAnimator } from './ghost-animator.js';

class AppController {
    constructor() {
        console.log("[App] Initializing RehabAI...");
        
        this.currentScreen = 'welcome';
        this.selectedExerciseId = null;
        this.selectedDifficulty = 'medium';
        this._landmarkCount = 0;
        
        // Initialize Core Systems
        this.audio = new AudioManager();
        this.feedback = new FeedbackManager(this.audio);
        this.engine = new ExerciseEngine(this.feedback);
        this.game = new GameManager(this.engine, this.feedback, this.audio);
        this.camera = new CameraManager('webcam');
        this.dashboard = new DashboardManager();
        this.renderer = new SkeletonRenderer('skeleton-canvas');
        this.ghost = new GhostAnimator();
        
        // Connect Camera -> Renderer -> Engine
        this.camera.setPoseCallback((landmarks) => {
            this._landmarkCount++;
            
            // Debug: log first detection and every 60th frame
            if (this._landmarkCount === 1) {
                console.log("[App] ✅ FIRST LANDMARKS RECEIVED! Skeleton should now be visible.");
            }
            if (this._landmarkCount % 60 === 0) {
                console.log(`[App] Landmark frame #${this._landmarkCount} | Screen: ${this.currentScreen}`);
            }
            
            if (this.currentScreen !== 'game') return;
            if (!landmarks || !landmarks.length) return;
            
            try {
                // Process through exercise engine
                const results = this.engine.processFrame(landmarks);
                
                // Draw user skeleton (use smoothed landmarks from engine if available)
                const renderLandmarks = (results && results.landmarks) ? results.landmarks : landmarks;
                this.renderer.draw(renderLandmarks);
                
                if (results) {
                    this.renderer.setJointStatus(results.jointStatus);
                    
                    // Update progress ring UI
                    const ring = document.getElementById('progress-ring');
                    if (ring) {
                        const offset = 283 - (results.progress * 283);
                        ring.style.strokeDashoffset = offset;
                        ring.style.stroke = results.progress > 0.9 ? "var(--accent-green)" : "var(--accent-teal)";
                    }
                }
                
                // Draw Ghost skeleton
                const ghostPose = this.ghost.update();
                if (ghostPose) {
                    this.renderer.drawGhost(ghostPose);
                }
            } catch (err) {
                console.error("[App] Error processing frame:", err);
            }
        });

        // Connect Engine -> Timer UI
        this.engine.onHoldTimerUpdate = (remainingSeconds) => {
            const timerEl = document.getElementById('hold-timer');
            if (remainingSeconds < 0) {
                timerEl.classList.add('hidden');
            } else {
                timerEl.classList.remove('hidden');
                timerEl.innerText = remainingSeconds;
                if (remainingSeconds > 0 && remainingSeconds <= 3) {
                    this.audio.speak(remainingSeconds.toString(), true);
                }
            }
        };

        this.initUI();
        this.bindEvents();
        this.populateWelcomeStats();
        this.renderExerciseList();
        
        console.log("[App] RehabAI initialized successfully.");
    }

    initUI() {
        this.screens = {
            welcome: document.getElementById('screen-welcome'),
            select: document.getElementById('screen-select'),
            tutorial: document.getElementById('screen-tutorial'),
            game: document.getElementById('screen-game'),
            results: document.getElementById('screen-results'),
            dashboard: document.getElementById('screen-dashboard')
        };
        
        this.game.setUIElements({
            repsEl: document.getElementById('hud-reps'),
            scoreEl: document.getElementById('hud-score'),
            comboEl: document.getElementById('combo-badge'),
            accuracyEl: document.getElementById('hud-accuracy'),
            progressFillEl: document.getElementById('progress-fill'),
            onSessionComplete: (results) => this.showResults(results)
        });
    }

    bindEvents() {
        // Navigation
        document.getElementById('btn-start').addEventListener('click', () => this.switchScreen('select'));
        document.getElementById('btn-dashboard').addEventListener('click', () => this.showDashboard());
        document.getElementById('btn-back-welcome').addEventListener('click', () => this.switchScreen('welcome'));
        document.getElementById('btn-back-dash').addEventListener('click', () => this.switchScreen('welcome'));
        document.getElementById('btn-back-select').addEventListener('click', () => {
            this.audio.synth.cancel();
            this.switchScreen('select');
        });
        
        // Game Controls
        document.getElementById('btn-start-game').addEventListener('click', () => this.startGame());
        document.getElementById('btn-quit-game').addEventListener('click', () => this.quitGame());
        
        // Results Controls
        document.getElementById('btn-retry').addEventListener('click', () => this.startGame());
        document.getElementById('btn-new-exercise').addEventListener('click', () => this.switchScreen('select'));
        document.getElementById('btn-results-home').addEventListener('click', () => this.switchScreen('welcome'));
        
        // Dashboard Controls
        document.getElementById('btn-clear-data').addEventListener('click', () => {
            if (confirm("Are you sure you want to clear all your progress?")) {
                this.dashboard.clearData();
                this.showDashboard();
                this.populateWelcomeStats();
            }
        });

        // Audio Toggle
        const audioBtn = document.getElementById('btn-audio-toggle');
        audioBtn.addEventListener('click', () => {
            const isEnabled = this.audio.toggle();
            audioBtn.innerText = isEnabled ? '🔊' : '🔇';
            audioBtn.classList.toggle('muted', !isEnabled);
        });

        // Handle window resize for canvas
        window.addEventListener('resize', () => this._syncCanvasSize());
    }

    _syncCanvasSize() {
        if (this.currentScreen !== 'game') return;
        const dims = this.camera.getVideoDimensions();
        if (dims.width > 0 && dims.height > 0) {
            this.renderer.resize(dims.width, dims.height);
        }
    }

    switchScreen(screenId) {
        Object.values(this.screens).forEach(s => s.classList.remove('active'));
        this.screens[screenId].classList.add('active');
        this.currentScreen = screenId;
    }

    populateWelcomeStats() {
        const stats = this.dashboard.getStats();
        document.getElementById('stat-streak').innerText = stats.streak;
        document.getElementById('stat-total-reps').innerText = stats.totalReps;
        document.getElementById('stat-sessions').innerText = stats.sessions;
    }

    renderExerciseList() {
        const grid = document.getElementById('exercise-grid');
        grid.innerHTML = '';
        
        Object.values(EXERCISES).forEach(ex => {
            const card = document.createElement('div');
            card.className = 'exercise-card';
            
            const bestScore = this.dashboard.data.bestScores[ex.id] || 0;
            const bestScoreHtml = bestScore > 0 ? `<div class="exercise-card-best">★ Best: ${bestScore}</div>` : '';

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div class="exercise-card-icon">${ex.icon}</div>
                    <div class="exercise-card-side">${ex.side}</div>
                </div>
                <div class="exercise-card-title">${ex.name}</div>
                <div class="exercise-card-desc">${ex.description}</div>
                ${bestScoreHtml}
            `;
            
            card.addEventListener('click', () => this.showTutorial(ex.id, 'medium'));
            grid.appendChild(card);
        });
    }

    showTutorial(exerciseId, difficulty) {
        this.selectedExerciseId = exerciseId;
        this.selectedDifficulty = difficulty;
        const ex = EXERCISES[exerciseId];

        document.getElementById('tutorial-icon').innerText = ex.icon;
        document.getElementById('tutorial-title').innerText = ex.name;
        document.getElementById('tutorial-desc').innerText = ex.description;

        this.switchScreen('tutorial');

        const instructions = `${ex.name}. ${ex.description}. Match the blue ghost skeleton in the corner, and hold the position for 3 seconds when prompted. Let's begin.`;
        this.audio.speak(instructions, true);
    }

    async startGame() {
        this.audio.synth.cancel();
        this.switchScreen('game');
        this._landmarkCount = 0; // Reset for debug logging
        
        const exerciseId = this.selectedExerciseId;
        const difficulty = this.selectedDifficulty;
        const ex = EXERCISES[exerciseId];
        
        console.log(`[App] Starting game: ${ex.name} (${difficulty})`);
        
        document.getElementById('game-exercise-name').innerText = ex.name;
        
        const diffBadge = document.getElementById('game-difficulty');
        diffBadge.innerText = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
        diffBadge.className = `difficulty-badge ${difficulty}`;
        
        this.renderer.setTargetJoints(ex.targetJoints);
        this.ghost.setExercise(exerciseId);
        
        // Reset UI
        const ring = document.getElementById('progress-ring');
        if (ring) ring.style.strokeDashoffset = 283;
        document.getElementById('hold-timer').classList.add('hidden');
        
        // Show countdown overlay
        const countdownEl = document.getElementById('countdown-overlay');
        const numEl = document.getElementById('countdown-number');
        countdownEl.classList.add('active');
        
        try {
            await this.camera.start();
            console.log("[App] Camera started, syncing canvas size...");
            
            // Sync canvas size to video dimensions
            // Do it multiple times to handle delayed metadata
            this._syncCanvasSize();
            setTimeout(() => this._syncCanvasSize(), 200);
            setTimeout(() => this._syncCanvasSize(), 1000);

            // Countdown sequence: 3 -> 2 -> 1 -> GO! -> start
            let count = 3;
            numEl.innerText = count;
            this.audio.speak("3", true);
            
            const countInterval = setInterval(() => {
                count--;
                if (count > 0) {
                    numEl.innerText = count;
                    this.audio.speak(count.toString(), true);
                    numEl.style.animation = 'none';
                    numEl.offsetHeight;
                    numEl.style.animation = null;
                } else if (count === 0) {
                    numEl.innerText = "GO!";
                    this.audio.speak("Go!", true);
                } else {
                    clearInterval(countInterval);
                    countdownEl.classList.remove('active');
                    this.game.startSession(exerciseId, difficulty);
                    this.ghost.start();
                    console.log("[App] Game session started!");
                }
            }, 1000);

        } catch (err) {
            console.error("[App] Failed to start game:", err);
            alert("Could not start camera. Please check permissions.");
            this.switchScreen('select');
        }
    }

    quitGame() {
        this.camera.stop();
        this.ghost.stop();
        this.switchScreen('select');
    }

    showResults(results) {
        this.camera.stop();
        this.ghost.stop();
        this.dashboard.addSession(results);
        
        document.getElementById('results-score').innerText = results.score;
        document.getElementById('result-reps').innerText = results.reps;
        document.getElementById('result-accuracy').innerText = `${results.accuracy}%`;
        document.getElementById('result-best-combo').innerText = `×${this.game.comboMultiplier}`;
        document.getElementById('result-duration').innerText = `${results.duration}s`;
        
        let stars = 0;
        if (results.accuracy > 90) stars = 3;
        else if (results.accuracy > 70) stars = 2;
        else if (results.accuracy > 50) stars = 1;
        
        const starEls = document.getElementById('results-stars').children;
        for (let i = 0; i < 3; i++) {
            if (i < stars) starEls[i].classList.add('earned');
            else starEls[i].classList.remove('earned');
        }
        
        this.populateWelcomeStats();
        this.renderExerciseList();
        this.switchScreen('results');
    }

    showDashboard() {
        this.dashboard.renderDashboard({
            streakEl: document.getElementById('dash-streak'),
            totalRepsEl: document.getElementById('dash-total-reps'),
            bestScoreEl: document.getElementById('dash-best-score'),
            avgAccuracyEl: document.getElementById('dash-avg-accuracy'),
            sessionListEl: document.getElementById('session-list'),
            accuracyChartEl: document.getElementById('chart-accuracy'),
            exerciseChartEl: document.getElementById('chart-exercises')
        });
        this.switchScreen('dashboard');
    }
}

// Initialize app when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    console.log("[App] DOM loaded, creating AppController...");
    window.app = new AppController();
});
