import { evaluatePoseForm } from './XGBoost_Engine.js';

const video = document.getElementById('webcam');
const status = document.getElementById('status');

// Initialize MediaPipe Pose
const pose = new Pose({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
});

pose.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});

pose.onResults(onResults);

// Setup Camera
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    status.innerText = "❌ Camera access not supported. Ensure you are using localhost or HTTPS.";
    status.style.color = "red";
} else {
    navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
    })
    .then(stream => {
        video.srcObject = stream;
        
        video.onloadedmetadata = () => {
            video.play()
                .then(() => {
                    status.innerText = "AI Engine Loaded. Starting posture tracking...";
                    status.style.color = "#333";
                    
                    const process = async () => {
                        if (video.paused || video.ended) {
                            requestAnimationFrame(process);
                            return;
                        }
                        if (video.readyState >= 3) { // HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA
                            try {
                                await pose.send({ image: video });
                            } catch (err) {
                                console.error("MediaPipe Pose processing error:", err);
                            }
                        }
                        requestAnimationFrame(process);
                    };
                    process();
                })
                .catch(err => {
                    console.error("Error playing video:", err);
                    status.innerText = "❌ Video playback blocked. Please click on the page to start.";
                    status.style.color = "red";
                });
        };
    })
    .catch(error => {
        console.error("Error accessing webcam:", error);
        status.innerText = `❌ Camera Error: ${error.message}. Please check permissions.`;
        status.style.color = "red";
    });
}

function onResults(results) {
    if (!results.poseLandmarks) return;

    // Map MediaPipe Landmarks to your model's 18 inputs
    // L_Sh(11), L_El(13), L_Wr(15), R_Sh(12), R_El(14), R_Wr(16)
    const joints = [11, 13, 15, 12, 14, 16];
    const features = [];

    joints.forEach(i => {
        features.push(results.poseLandmarks[i].x);
        features.push(results.poseLandmarks[i].y);
        features.push(results.poseLandmarks[i].z);
    });

    // Run inference
    const prediction = evaluatePoseForm(features);
    status.innerText = (prediction === 1) ? "✅ Correct Form" : "❌ Incorrect - Fix your posture";
    status.style.color = (prediction === 1) ? "green" : "red";
}