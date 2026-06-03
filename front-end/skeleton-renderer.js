export class SkeletonRenderer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.targetJoints = [];
        this.jointStatus = {};
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    setTargetJoints(joints) {
        this.targetJoints = joints || [];
    }

    setJointStatus(statusMap) {
        this.jointStatus = statusMap || {};
    }

    draw(landmarks) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (!landmarks || !landmarks.length) return;
        this._drawUserSkeleton(landmarks);
    }

    drawGhost(ghostLandmarks) {
        if (!ghostLandmarks || !ghostLandmarks.length) return;
        this._drawGhostSkeleton(ghostLandmarks);
    }

    _drawUserSkeleton(landmarks) {
        const W = this.canvas.width;
        const H = this.canvas.height;
        const ctx = this.ctx;

        // Major body connections
        const connections = [
            [11, 12], [11, 23], [12, 24], [23, 24], // Torso
            [11, 13], [13, 15], [12, 14], [14, 16], // Arms
            [23, 25], [25, 27], [24, 26], [26, 28],  // Legs
            [15, 17], [15, 19], [16, 18], [16, 20]   // Hands
        ];

        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Draw bones with glow
        connections.forEach(([i, j]) => {
            const a = landmarks[i];
            const b = landmarks[j];
            if (!a || !b || a.visibility < 0.3 || b.visibility < 0.3) return;

            const ax = a.x * W, ay = a.y * H;
            const bx = b.x * W, by = b.y * H;

            // Check if these are target joints for colored bones
            const aIsTarget = this.targetJoints.includes(i);
            const bIsTarget = this.targetJoints.includes(j);
            
            if (aIsTarget || bIsTarget) {
                const status = this.jointStatus[i] || this.jointStatus[j] || 'default';
                let color;
                if (status === 'good') color = 'rgba(34, 197, 94, 0.9)';
                else if (status === 'warn') color = 'rgba(250, 204, 21, 0.9)';
                else if (status === 'bad') color = 'rgba(239, 68, 68, 0.9)';
                else color = 'rgba(0, 212, 170, 0.9)';

                // Glow layer
                ctx.shadowBlur = 12;
                ctx.shadowColor = color;
                ctx.strokeStyle = color;
                ctx.lineWidth = 6;
            } else {
                ctx.shadowBlur = 0;
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.lineWidth = 3;
            }

            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
        });

        ctx.shadowBlur = 0;

        // Draw joints
        const mainJoints = [11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28];
        mainJoints.forEach((i) => {
            const lm = landmarks[i];
            if (!lm || lm.visibility < 0.3) return;

            const x = lm.x * W;
            const y = lm.y * H;
            const isTarget = this.targetJoints.includes(i);

            let color = 'rgba(255, 255, 255, 0.9)';
            let radius = 5;

            if (isTarget) {
                radius = 9;
                const status = this.jointStatus[i] || 'default';
                if (status === 'good') color = '#22c55e';
                else if (status === 'warn') color = '#facc15';
                else if (status === 'bad') color = '#ef4444';
                else color = '#00d4aa';

                // Glow ring
                ctx.beginPath();
                ctx.arc(x, y, radius + 4, 0, Math.PI * 2);
                ctx.fillStyle = color.replace(')', ', 0.3)').replace('rgb', 'rgba');
                ctx.fill();
            }

            // Solid joint dot
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        ctx.restore();
    }

    _drawGhostSkeleton(landmarks) {
        const W = this.canvas.width;
        const H = this.canvas.height;
        const ctx = this.ctx;

        // Draw PIP (Picture-in-Picture) box
        const pipSize = Math.min(W, H) * 0.30;
        const pipX = W - pipSize - 16;
        const pipY = 16;

        ctx.save();

        // PIP background
        ctx.fillStyle = 'rgba(10, 15, 26, 0.75)';
        ctx.beginPath();
        ctx.roundRect(pipX, pipY, pipSize, pipSize, 10);
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Ghost connections
        const connections = [
            [11, 12], [11, 23], [12, 24], [23, 24],
            [11, 13], [13, 15], [12, 14], [14, 16],
            [23, 25], [25, 27], [24, 26], [26, 28]
        ];

        ctx.lineCap = 'round';
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.5)';
        ctx.lineWidth = 3;

        connections.forEach(([i, j]) => {
            const a = landmarks[i];
            const b = landmarks[j];
            if (!a || !b || (a.visibility !== undefined && a.visibility < 0.3)) return;

            const ax = pipX + a.x * pipSize;
            const ay = pipY + a.y * pipSize;
            const bx = pipX + b.x * pipSize;
            const by = pipY + b.y * pipSize;

            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
        });

        // Ghost joints
        const mainJoints = [11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28];
        mainJoints.forEach(i => {
            const lm = landmarks[i];
            if (!lm) return;

            const x = pipX + lm.x * pipSize;
            const y = pipY + lm.y * pipSize;
            const isTarget = this.targetJoints.includes(i);

            ctx.beginPath();
            ctx.arc(x, y, isTarget ? 6 : 4, 0, Math.PI * 2);
            ctx.fillStyle = isTarget ? '#0099ff' : 'rgba(0, 153, 255, 0.6)';
            ctx.fill();
        });

        // Label
        ctx.fillStyle = 'rgba(0, 153, 255, 0.8)';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.fillText('GUIDE', pipX + 8, pipY + pipSize - 8);

        ctx.restore();
    }
}
