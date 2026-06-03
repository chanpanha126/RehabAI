const fs = require('fs');
let content = fs.readFileSync('camera.js', 'utf8');
content = content.replace('await this.pose.initialize();', 'console.log("Initializing MediaPipe..."); await this.pose.initialize(); console.log("MediaPipe initialized!");');
content = content.replace('await this.pose.send({ image: this.videoEl });', 'console.log("Sending frame to MediaPipe... width: " + this.videoEl.width); await this.pose.send({ image: this.videoEl });');
content = content.replace('this.onPoseCallback(results.poseLandmarks);', 'console.log("Got landmarks: " + (results.poseLandmarks ? "YES" : "NO")); this.onPoseCallback(results.poseLandmarks);');
content = content.replace('this.videoEl.onloadedmetadata = async () => {', 'this.videoEl.onloadedmetadata = async () => { console.log("Video metadata loaded.");');
fs.writeFileSync('camera.js', content);
