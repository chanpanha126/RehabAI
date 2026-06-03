export class CameraManager {
    constructor(videoElementId) {
        this.videoEl = document.getElementById(videoElementId);
        this.pose = null;
        this.stream = null;
        this.onPoseCallback = null;
        this.isRunning = false;
        this._busy = false; // Prevents overlapping pose.send() calls
    }

    async init() {
        if (this.pose) return;

        console.log("[CameraManager] Creating MediaPipe Pose instance...");
        
        this.pose = new window.Pose({
            locateFile: (file) => {
                const url = `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/${file}`;
                console.log(`[CameraManager] Loading: ${file}`);
                return url;
            }
        });

        this.pose.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            enableSegmentation: false,
            smoothSegmentation: false,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        this.pose.onResults((results) => {
            this._busy = false; // Allow next frame
            if (results.poseLandmarks && this.onPoseCallback) {
                this.onPoseCallback(results.poseLandmarks);
            }
        });

        console.log("[CameraManager] MediaPipe Pose configured, ready to use.");
    }

    setPoseCallback(callback) {
        this.onPoseCallback = callback;
    }

    async start() {
        await this.init();
        if (this.isRunning) return;

        console.log("[CameraManager] Requesting camera access...");
        
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" }
            });
            
            this.videoEl.srcObject = this.stream;
            
            await new Promise((resolve, reject) => {
                if (this.videoEl.readyState >= 2) {
                    resolve();
                } else {
                    this.videoEl.onloadeddata = () => resolve();
                    this.videoEl.onerror = (e) => reject(e);
                }
            });

            // Set explicit width/height attributes (required by MediaPipe)
            this.videoEl.width = this.videoEl.videoWidth;
            this.videoEl.height = this.videoEl.videoHeight;
            
            await this.videoEl.play();
            this.isRunning = true;
            
            console.log(`[CameraManager] Camera started: ${this.videoEl.videoWidth}x${this.videoEl.videoHeight}`);
            
            // Start the frame processing loop
            this._processLoop();
            
        } catch (error) {
            console.error("[CameraManager] Camera access failed:", error);
            throw error;
        }
    }

    stop() {
        console.log("[CameraManager] Stopping...");
        this.isRunning = false;
        
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
        if (this.videoEl) {
            this.videoEl.srcObject = null;
        }
    }

    _processLoop() {
        if (!this.isRunning) return;

        if (!this._busy && this.videoEl.readyState >= 2 && !this.videoEl.paused) {
            this._busy = true;
            this.pose.send({ image: this.videoEl }).catch((err) => {
                this._busy = false;
                console.error("[CameraManager] pose.send error:", err);
            });
        }
        
        requestAnimationFrame(() => this._processLoop());
    }

    getVideoDimensions() {
        return {
            width: this.videoEl.videoWidth || 640,
            height: this.videoEl.videoHeight || 480
        };
    }
}
