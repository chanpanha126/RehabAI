export class FeedbackManager {
    constructor(audioManager) {
        this.audio = audioManager;
        
        // DOM Elements
        this.feedbackEl = document.getElementById('feedback-text');
        this.repPopupEl = document.getElementById('rep-popup-text');
        this.scoreFillEl = document.getElementById('form-quality-fill');
        
        this.lastFeedbackMsg = "";
        this.feedbackTimer = null;
    }

    showFeedback(message, type = 'warn', speak = true) {
        if (this.lastFeedbackMsg === message) return; // Prevent spamming same message
        this.lastFeedbackMsg = message;

        // Clear existing timer
        if (this.feedbackTimer) clearTimeout(this.feedbackTimer);

        // Update DOM
        this.feedbackEl.innerText = message;
        this.feedbackEl.className = `feedback-text visible ${type}`;

        // Voice feedback
        if (speak && type !== 'perfect') {
            this.audio.speak(message);
        }

        // Hide after 2 seconds
        this.feedbackTimer = setTimeout(() => {
            this.feedbackEl.classList.remove('visible');
            this.lastFeedbackMsg = "";
        }, 2000);
    }

    showRepScore(score, isCombo = false) {
        this.repPopupEl.innerText = `+${Math.round(score)}`;
        this.repPopupEl.style.color = isCombo ? "var(--accent-yellow)" : "var(--accent-teal)";
        
        // Retrigger animation
        this.repPopupEl.classList.remove('show');
        void this.repPopupEl.offsetWidth; // Trigger reflow
        this.repPopupEl.classList.add('show');
    }

    updateFormQualityBar(qualityPercent) {
        // qualityPercent 0-100
        const h = Math.max(0, Math.min(100, qualityPercent));
        this.scoreFillEl.style.height = `${h}%`;
        
        // Color based on quality
        if (h > 85) {
            this.scoreFillEl.style.background = "var(--accent-green)";
        } else if (h > 50) {
            this.scoreFillEl.style.background = "var(--accent-yellow)";
        } else {
            this.scoreFillEl.style.background = "var(--accent-red)";
        }
    }
}
