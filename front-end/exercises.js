export const EXERCISES = {
    0: {
        id: 0,
        name: "Elbow Flexion (Left)",
        description: "Bend your left elbow, bringing your hand toward your shoulder.",
        icon: "💪",
        side: "Left",
        targetJoints: [11, 13, 15], // L_Shoulder, L_Elbow, L_Wrist
        calculationType: "angle_2d",
        repType: "flexion", // open to closed and back
        angleThresholds: {
            // angle at elbow
            start: 160, // arm straight
            peak: 50,   // arm fully bent
            tolerance: { easy: 30, medium: 20, hard: 10 }
        }
    },
    1: {
        id: 1,
        name: "Elbow Flexion (Right)",
        description: "Bend your right elbow, bringing your hand toward your shoulder.",
        icon: "💪",
        side: "Right",
        targetJoints: [12, 14, 16], // R_Shoulder, R_Elbow, R_Wrist
        calculationType: "angle_2d",
        repType: "flexion",
        angleThresholds: {
            start: 160,
            peak: 50,
            tolerance: { easy: 30, medium: 20, hard: 10 }
        }
    },
    2: {
        id: 2,
        name: "Shoulder Flexion (Left)",
        description: "Raise your left arm straight forward and up.",
        icon: "↗️",
        side: "Left",
        targetJoints: [23, 11, 13], // L_Hip, L_Shoulder, L_Elbow
        calculationType: "angle_2d",
        repType: "extension", // closed to open
        angleThresholds: {
            // angle at shoulder
            start: 20,  // arm down
            peak: 150,  // arm raised
            tolerance: { easy: 30, medium: 20, hard: 15 }
        }
    },
    3: {
        id: 3,
        name: "Shoulder Flexion (Right)",
        description: "Raise your right arm straight forward and up.",
        icon: "↗️",
        side: "Right",
        targetJoints: [24, 12, 14], // R_Hip, R_Shoulder, R_Elbow
        calculationType: "angle_2d",
        repType: "extension",
        angleThresholds: {
            start: 20,
            peak: 150,
            tolerance: { easy: 30, medium: 20, hard: 15 }
        }
    },
    4: {
        id: 4,
        name: "Shoulder Abduction (Left)",
        description: "Raise your left arm outward to the side.",
        icon: "↔️",
        side: "Left",
        targetJoints: [23, 11, 13],
        calculationType: "angle_abduction",
        repType: "extension",
        angleThresholds: {
            start: 20,
            peak: 90,
            tolerance: { easy: 30, medium: 20, hard: 10 }
        }
    },
    5: {
        id: 5,
        name: "Shoulder Abduction (Right)",
        description: "Raise your right arm outward to the side.",
        icon: "↔️",
        side: "Right",
        targetJoints: [24, 12, 14],
        calculationType: "angle_abduction",
        repType: "extension",
        angleThresholds: {
            start: 20,
            peak: 90,
            tolerance: { easy: 30, medium: 20, hard: 10 }
        }
    },
    6: {
        id: 6,
        name: "Forward Elevation (Both)",
        description: "Clasp hands and raise both arms straight up overhead.",
        icon: "🙌",
        side: "Both",
        targetJoints: [23, 11, 13, 24, 12, 14],
        calculationType: "angle_2d_both",
        repType: "extension",
        angleThresholds: {
            start: 20,
            peak: 150,
            tolerance: { easy: 35, medium: 25, hard: 15 }
        }
    },
    7: {
        id: 7,
        name: "Side Tap (Left Leg)",
        description: "Step your left foot out to the side and tap the floor.",
        icon: "🦵",
        side: "Left",
        targetJoints: [23, 25, 27], // Hip, Knee, Ankle
        calculationType: "distance_horizontal",
        repType: "extension",
        angleThresholds: {
            // Using distance normalized to shoulder width for legs
            start: 0.2, // feet close
            peak: 0.8,  // leg out
            tolerance: { easy: 0.3, medium: 0.2, hard: 0.1 }
        }
    },
    8: {
        id: 8,
        name: "Side Tap (Right Leg)",
        description: "Step your right foot out to the side and tap the floor.",
        icon: "🦵",
        side: "Right",
        targetJoints: [24, 26, 28], // Hip, Knee, Ankle
        calculationType: "distance_horizontal",
        repType: "extension",
        angleThresholds: {
            start: 0.2,
            peak: 0.8,
            tolerance: { easy: 0.3, medium: 0.2, hard: 0.1 }
        }
    }
};

export const DIFFICULTY_LEVELS = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard"
};
