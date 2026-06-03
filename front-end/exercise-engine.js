import { EXERCISES } from './exercises.js';
import { evaluateGesture } from './models/all_models.js';

export class ExerciseEngine {
    constructor(feedbackManager) {
        this.feedback = feedbackManager;
        
        // State
        this.currentExerciseId = null;
        this.difficulty = 'medium';
        this.exercise = null;
        
        // Tracking
        this.repState = 'IDLE'; // IDLE -> MOVING -> PEAK_HOLD -> RETURNING -> COMPLETE
        this.repCount = 0;
        this.currentScore = 0;
        
        // Stabilization (EMA filter)
        this.smoothedLandmarks = null;
        this.emaAlpha = 0.6; // 0.6 means 60% new frame, 40% history
        
        // Gamification / Gameloop
        this.angleHistory = [];
        this.historySize = 5;
        this.framesSinceLastFeedback = 0;
        
        // 3-second hold validation
        this.holdStartTime = 0;
        this.targetHoldMs = 3000;
        
        // Callbacks
        this.onRepCompleted = null;
        this.onHoldTimerUpdate = null;
    }

    setExercise(exerciseId, difficulty = 'medium') {
        this.currentExerciseId = exerciseId;
        this.exercise = EXERCISES[exerciseId];
        this.difficulty = difficulty;
        this.resetSession();
    }

    resetSession() {
        this.repState = 'IDLE';
        this.repCount = 0;
        this.currentScore = 0;
        this.angleHistory = [];
        this.smoothedLandmarks = null;
        this.framesSinceLastFeedback = 0;
        this.holdStartTime = 0;
    }

    // Apply Exponential Moving Average (EMA) to stabilize jittery landmarks
    smoothLandmarks(newLandmarks) {
        if (!this.smoothedLandmarks) {
            this.smoothedLandmarks = JSON.parse(JSON.stringify(newLandmarks));
            return this.smoothedLandmarks;
        }
        
        for (let i = 0; i < newLandmarks.length; i++) {
            if (newLandmarks[i].visibility > 0.3) {
                this.smoothedLandmarks[i].x = (this.emaAlpha * newLandmarks[i].x) + ((1 - this.emaAlpha) * this.smoothedLandmarks[i].x);
                this.smoothedLandmarks[i].y = (this.emaAlpha * newLandmarks[i].y) + ((1 - this.emaAlpha) * this.smoothedLandmarks[i].y);
                this.smoothedLandmarks[i].z = (this.emaAlpha * newLandmarks[i].z) + ((1 - this.emaAlpha) * this.smoothedLandmarks[i].z);
                this.smoothedLandmarks[i].visibility = newLandmarks[i].visibility;
            }
        }
        return this.smoothedLandmarks;
    }

    processFrame(rawLandmarks) {
        if (!this.exercise || !rawLandmarks) return null;

        const landmarks = this.smoothLandmarks(rawLandmarks);

        // 1. Calculate main metric (angle or distance)
        let metric = this.calculateMetric(landmarks, this.exercise);
        
        // Smooth metric historically
        this.angleHistory.push(metric);
        if (this.angleHistory.length > this.historySize) this.angleHistory.shift();
        const smoothedMetric = this.angleHistory.reduce((a, b) => a + b, 0) / this.angleHistory.length;
        
        // Velocity check
        let velocity = 0;
        if (this.angleHistory.length > 2) {
            velocity = Math.abs(this.angleHistory[this.angleHistory.length - 1] - this.angleHistory[this.angleHistory.length - 2]);
        }

        // 2. Evaluate XGBoost model if available (for ML-based confidence)
        const mlFeatures = this.extractFeatures(landmarks);
        const mlResult = evaluateGesture(this.currentExerciseId, mlFeatures);
        
        // 3. Process Rep State Machine & Form Scoring
        const thresholds = this.exercise.angleThresholds;
        const tolerance = thresholds.tolerance[this.difficulty];
        
        const isFlexion = this.exercise.repType === "flexion";
        let formScore = 100;
        let jointStatusMap = {};

        // Calculate progress towards peak (0.0 to 1.0)
        let progress = 0;
        if (isFlexion) {
            progress = (thresholds.start - smoothedMetric) / (thresholds.start - thresholds.peak);
        } else {
            progress = (smoothedMetric - thresholds.start) / (thresholds.peak - thresholds.start);
        }
        progress = Math.max(0, Math.min(1, progress));

        // Form Validation
        let isFormGood = true;
        let isTooFast = false;
        
        // If they are moving extremely fast, penalize
        if (velocity > 15) {
            isFormGood = false;
            isTooFast = true;
            formScore = 40; 
        } else if (mlResult && progress > 0.3) {
            if (mlResult.prediction === 0 && mlResult.confidence > 0.8) {
                isFormGood = false;
                formScore = (1 - mlResult.probIncorrect) * 100;
            } else {
                formScore = mlResult.probCorrect * 100;
            }
        } else {
            // Geometric validation
            const targetNow = thresholds.start + progress * (thresholds.peak - thresholds.start);
            const deviation = Math.abs(smoothedMetric - targetNow);
            
            if (deviation > tolerance) {
                isFormGood = false;
                formScore = Math.max(0, 100 - ((deviation - tolerance) * 2));
            }
        }

        const status = isFormGood ? 'good' : (formScore > 50 ? 'warn' : 'bad');
        this.exercise.targetJoints.forEach(j => jointStatusMap[j] = status);

        // Feedback
        this.feedback.updateFormQualityBar(formScore);
        this.provideCorrectiveFeedback(progress, isFormGood, isTooFast, smoothedMetric, thresholds);

        // State Machine
        this.updateRepState(progress, formScore);

        return {
            metric: smoothedMetric,
            progress: progress,
            score: formScore,
            state: this.repState,
            jointStatus: jointStatusMap,
            targetJoints: this.exercise.targetJoints,
            landmarks: landmarks // Return smoothed landmarks
        };
    }

    updateRepState(progress, formScore) {
        switch (this.repState) {
            case 'IDLE':
                if (progress > 0.2) {
                    this.repState = 'MOVING';
                    this.currentScore = formScore;
                }
                break;
            case 'MOVING':
                this.currentScore = Math.min(this.currentScore, formScore);
                
                if (progress > 0.90) { // reached the peak
                    this.repState = 'PEAK_HOLD';
                    this.holdStartTime = Date.now();
                    this.feedback.showFeedback("Hold it...", "perfect", false);
                } else if (progress < 0.1) {
                    this.repState = 'IDLE'; 
                }
                break;
            case 'PEAK_HOLD':
                this.currentScore = Math.min(this.currentScore, formScore);
                
                if (progress < 0.8) {
                    // Dropped out of hold early
                    this.repState = 'RETURNING';
                    this.feedback.showFeedback("You dropped too early!", "warn", true);
                    if (this.onHoldTimerUpdate) this.onHoldTimerUpdate(-1); // Hide timer
                } else {
                    const elapsed = Date.now() - this.holdStartTime;
                    const remaining = Math.max(0, Math.ceil((this.targetHoldMs - elapsed) / 1000));
                    
                    if (this.onHoldTimerUpdate) this.onHoldTimerUpdate(remaining);
                    
                    if (elapsed >= this.targetHoldMs) {
                        this.feedback.showFeedback("Perfect hold! Now return.", "perfect", true);
                        if (this.onHoldTimerUpdate) this.onHoldTimerUpdate(-1); // Hide
                        this.repState = 'RETURNING';
                    }
                }
                break;
            case 'RETURNING':
                if (progress < 0.15) {
                    this.repState = 'COMPLETE';
                    
                    // Only count if they actually held it
                    const heldFullTime = (Date.now() - this.holdStartTime) >= this.targetHoldMs;
                    if (heldFullTime) {
                        this.repCount++;
                        if (this.onRepCompleted) this.onRepCompleted(this.currentScore);
                    }
                    
                    setTimeout(() => {
                        if (this.repState === 'COMPLETE') this.repState = 'IDLE';
                    }, 500);
                } else if (progress > 0.85) {
                    // Went back into hold
                    this.repState = 'PEAK_HOLD';
                    this.holdStartTime = Date.now(); // reset hold
                }
                break;
        }
    }

    provideCorrectiveFeedback(progress, isFormGood, isTooFast, currentAngle, thresholds) {
        this.framesSinceLastFeedback++;
        if (this.framesSinceLastFeedback < 45) return; // Throttling

        if (this.repState === 'IDLE') return;

        if (isTooFast) {
            this.feedback.showFeedback("Move slower!", "warn");
            this.framesSinceLastFeedback = 0;
            return;
        }

        if (!isFormGood) {
            if (this.currentExerciseId === 0 || this.currentExerciseId === 1) {
                this.feedback.showFeedback("Keep your elbow steady", "warn");
            } else if (this.currentExerciseId === 2 || this.currentExerciseId === 3) {
                if (currentAngle < thresholds.peak - 30 && progress > 0.5) {
                    this.feedback.showFeedback("Raise your arm higher", "warn");
                } else {
                    this.feedback.showFeedback("Keep arm straight", "warn");
                }
            } else {
                this.feedback.showFeedback("Check your form", "warn");
            }
            this.framesSinceLastFeedback = 0;
        } else if (this.repState === 'MOVING' && progress > 0.5) {
            this.feedback.showFeedback("Looking good", "good", false);
            this.framesSinceLastFeedback = 0;
        }
    }

    calculateMetric(landmarks, exercise) {
        const type = exercise.calculationType;
        const joints = exercise.targetJoints;

        if (type === "angle_2d" && joints.length === 3) {
            return this.calculateAngle2D(landmarks[joints[0]], landmarks[joints[1]], landmarks[joints[2]]);
        }
        
        if (type === "angle_abduction" && joints.length === 3) {
            const p1 = landmarks[joints[0]]; 
            const p2 = landmarks[joints[1]]; 
            const p3 = landmarks[joints[2]]; 
            
            const v1 = { x: p1.x - p2.x, y: p1.y - p2.y };
            const v2 = { x: p3.x - p2.x, y: p3.y - p2.y };
            
            const dot = v1.x * v2.x + v1.y * v2.y;
            const mag1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
            const mag2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
            return Math.acos(dot / (mag1 * mag2)) * (180.0 / Math.PI);
        }

        if (type === "angle_2d_both" && joints.length === 6) {
            const a1 = this.calculateAngle2D(landmarks[joints[0]], landmarks[joints[1]], landmarks[joints[2]]);
            const a2 = this.calculateAngle2D(landmarks[joints[3]], landmarks[joints[4]], landmarks[joints[5]]);
            return (a1 + a2) / 2;
        }

        if (type === "distance_horizontal") {
            const ankle = landmarks[joints[2]];
            const otherAnkleId = joints[2] === 27 ? 28 : 27;
            const otherAnkle = landmarks[otherAnkleId];
            
            if (ankle && otherAnkle) {
                return Math.abs(ankle.x - otherAnkle.x);
            }
        }

        return 0;
    }

    calculateAngle2D(a, b, c) {
        if (!a || !b || !c) return 0;
        const radians = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
        let angle = Math.abs(radians * 180.0 / Math.PI);
        if (angle > 180.0) angle = 360 - angle;
        return angle;
    }

    extractFeatures(landmarks) {
        const joints = [11, 13, 15, 12, 14, 16];
        const features = [];
        joints.forEach(i => {
            if (landmarks[i]) {
                features.push(landmarks[i].x, landmarks[i].y, landmarks[i].z);
            } else {
                features.push(0, 0, 0);
            }
        });
        return features;
    }
}
