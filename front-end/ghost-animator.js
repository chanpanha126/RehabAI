import { EXERCISES } from './exercises.js';

export class GhostAnimator {
    constructor() {
        this.exercise = null;
        this.progress = 0; // 0 to 1
        this.direction = 1; // 1 for flexion/extension, -1 for returning
        this.speed = 0.015; // Animation speed per frame
        this.isRunning = false;

        // Base skeleton pose (neutral standing)
        this.basePose = Array(33).fill(null).map(() => ({ x: 0.5, y: 0.5, visibility: 1.0 }));
        this.setupBasePose();
    }

    setupBasePose() {
        // Approximate neutral T-pose / resting pose in normalized coordinates (0-1)
        const p = this.basePose;

        // Torso
        p[11] = { x: 0.4, y: 0.3, visibility: 1.0 }; // L Shoulder
        p[12] = { x: 0.6, y: 0.3, visibility: 1.0 }; // R Shoulder
        p[23] = { x: 0.45, y: 0.6, visibility: 1.0 }; // L Hip
        p[24] = { x: 0.55, y: 0.6, visibility: 1.0 }; // R Hip

        // Left Arm (down)
        p[13] = { x: 0.35, y: 0.45, visibility: 1.0 }; // L Elbow
        p[15] = { x: 0.35, y: 0.6, visibility: 1.0 }; // L Wrist

        // Right Arm (down)
        p[14] = { x: 0.65, y: 0.45, visibility: 1.0 }; // R Elbow
        p[16] = { x: 0.65, y: 0.6, visibility: 1.0 }; // R Wrist

        // Legs
        p[25] = { x: 0.45, y: 0.75, visibility: 1.0 }; // L Knee
        p[27] = { x: 0.45, y: 0.9, visibility: 1.0 }; // L Ankle
        p[26] = { x: 0.55, y: 0.75, visibility: 1.0 }; // R Knee
        p[28] = { x: 0.55, y: 0.9, visibility: 1.0 }; // R Ankle
    }

    setExercise(exerciseId) {
        this.exercise = EXERCISES[exerciseId];
        this.progress = 0;
        this.direction = 1;
        this.setupBasePose(); // Reset to neutral
    }

    start() {
        this.isRunning = true;
    }

    stop() {
        this.isRunning = false;
    }

    // Called per frame to get the current ghost landmarks
    update() {
        if (!this.exercise) return null;

        this.progress += this.speed * this.direction;

        if (this.progress >= 1) {
            this.progress = 1;
            this.direction = -1;
        } else if (this.progress <= 0) {
            this.progress = 0;
            this.direction = 1;
        }

        const framePose = JSON.parse(JSON.stringify(this.basePose));
        const easedProgress = (1 - Math.cos(this.progress * Math.PI)) / 2;

        this.applyExerciseTransformation(framePose, easedProgress);

        // --- ADD THIS MIRRORING LOGIC ---
        for (let i = 0; i < framePose.length; i++) {
            if (framePose[i]) {
                framePose[i].x = 1.0 - framePose[i].x;
            }
        }
        // --------------------------------

        return framePose;
    }
    applyExerciseTransformation(pose, t) {
        const exId = this.exercise.id;

        if (exId === 0) {
            // Elbow Flexion Left: Move L Wrist up to L Shoulder
            pose[15].y = 0.6 - (t * 0.3); // Wrist goes up
            pose[15].x = 0.35 + (t * 0.05); // Wrist comes in slightly
            // Adjust elbow slightly to make it look natural
            pose[13].x = 0.35 - (t * 0.05);
        }
        else if (exId === 1) {
            // Elbow Flexion Right
            pose[16].y = 0.6 - (t * 0.3);
            pose[16].x = 0.65 - (t * 0.05);
            pose[14].x = 0.65 + (t * 0.05);
        }
        else if (exId === 2) {
            // Shoulder Flexion Left (raise arm forward/up)
            pose[13].y = 0.45 - (t * 0.25);
            pose[15].y = 0.6 - (t * 0.5); // Wrist goes high
            // Move inwards slightly as if extending forward
            pose[13].x = 0.35 + (t * 0.05);
            pose[15].x = 0.35 + (t * 0.05);
        }
        else if (exId === 3) {
            // Shoulder Flexion Right
            pose[14].y = 0.45 - (t * 0.25);
            pose[16].y = 0.6 - (t * 0.5);
            pose[14].x = 0.65 - (t * 0.05);
            pose[16].x = 0.65 - (t * 0.05);
        }
        else if (exId === 4) {
            // Shoulder Abduction Left (raise arm sideways)
            pose[13].y = 0.45 - (t * 0.15); // Elbow goes up to shoulder height
            pose[15].y = 0.6 - (t * 0.3);   // Wrist goes up to shoulder height

            pose[13].x = 0.35 - (t * 0.15); // Elbow goes out left
            pose[15].x = 0.35 - (t * 0.25); // Wrist goes out left
        }
        else if (exId === 5) {
            // Shoulder Abduction Right
            pose[14].y = 0.45 - (t * 0.15);
            pose[16].y = 0.6 - (t * 0.3);

            pose[14].x = 0.65 + (t * 0.15);
            pose[16].x = 0.65 + (t * 0.25);
        }
        else if (exId === 6) {
            // Forward Elevation Both (arms up overhead, hands together)
            pose[13].y = 0.45 - (t * 0.25);
            pose[15].y = 0.6 - (t * 0.5);
            pose[13].x = 0.35 + (t * 0.1);
            pose[15].x = 0.35 + (t * 0.15); // Hand moves center

            pose[14].y = 0.45 - (t * 0.25);
            pose[16].y = 0.6 - (t * 0.5);
            pose[14].x = 0.65 - (t * 0.1);
            pose[16].x = 0.65 - (t * 0.15); // Hand moves center
        }
        else if (exId === 7) {
            // Side Tap Left
            pose[25].x = 0.45 - (t * 0.15); // Knee out
            pose[27].x = 0.45 - (t * 0.2);  // Ankle out
        }
        else if (exId === 8) {
            // Side Tap Right
            pose[26].x = 0.55 + (t * 0.15);
            pose[28].x = 0.55 + (t * 0.2);
        }
    }
}
