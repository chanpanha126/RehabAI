export class AudioManager {
    constructor() {
        this.enabled = true;
        this.audioCtx = null;
        
        // Initialize SpeechSynthesis
        this.synth = window.speechSynthesis;
        this.lastSpokenTime = 0;
        this.speechThrottleMs = 3000; // Don't speak more than once every 3 seconds
        
        this.setupAudioContext();
    }

    setupAudioContext() {
        // Create context only on user interaction to abide by browser policies
        const initAudio = () => {
            if (!this.audioCtx) {
                this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            document.removeEventListener('click', initAudio);
            document.removeEventListener('touchstart', initAudio);
        };
        document.addEventListener('click', initAudio);
        document.addEventListener('touchstart', initAudio);
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    speak(text, force = false) {
        if (!this.enabled || !this.synth) return;
        
        const now = Date.now();
        if (!force && (now - this.lastSpokenTime < this.speechThrottleMs)) {
            return; // Throttled
        }
        
        // Only speak if not currently speaking to avoid overlapping
        if (this.synth.speaking && !force) return;
        
        if (force) {
            this.synth.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        // Try to find an English voice, preferably female/calming
        const voices = this.synth.getVoices();
        const preferredVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Female') || v.name.includes('Samantha')));
        if (preferredVoice) utterance.voice = preferredVoice;

        this.synth.speak(utterance);
        this.lastSpokenTime = now;
    }

    playTone(frequency, type, duration, volume = 0.1) {
        if (!this.enabled || !this.audioCtx) return;

        const oscillator = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

        gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        oscillator.start();
        oscillator.stop(this.audioCtx.currentTime + duration);
    }

    playRepComplete() {
        if (!this.enabled) return;
        // Pleasant double chime
        this.playTone(659.25, 'sine', 0.1, 0.1); // E5
        setTimeout(() => this.playTone(880.00, 'sine', 0.3, 0.1), 100); // A5
    }

    playComboStart() {
        this.playTone(523.25, 'sine', 0.2, 0.1); // C5
        setTimeout(() => this.playTone(659.25, 'sine', 0.2, 0.1), 150); // E5
        setTimeout(() => this.playTone(783.99, 'sine', 0.4, 0.1), 300); // G5
    }

    playSessionComplete() {
        if (!this.enabled) return;
        this.playTone(523.25, 'triangle', 0.2, 0.15); // C5
        setTimeout(() => this.playTone(659.25, 'triangle', 0.2, 0.15), 200); // E5
        setTimeout(() => this.playTone(783.99, 'triangle', 0.2, 0.15), 400); // G5
        setTimeout(() => this.playTone(1046.50, 'triangle', 0.6, 0.15), 600); // C6
        this.speak("Session complete! Great job today.", true);
    }
}
