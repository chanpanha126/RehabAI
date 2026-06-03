export class DashboardManager {
    constructor() {
        this.data = this.loadData();
    }

    loadData() {
        const defaultData = {
            sessions: [],
            streak: { currentDays: 0, lastDate: null },
            totalReps: 0,
            bestScores: {}
        };
        
        try {
            const stored = localStorage.getItem('rehabai_data');
            return stored ? JSON.parse(stored) : defaultData;
        } catch (e) {
            console.error("Failed to load dashboard data", e);
            return defaultData;
        }
    }

    saveData() {
        try {
            localStorage.setItem('rehabai_data', JSON.stringify(this.data));
        } catch (e) {
            console.error("Failed to save dashboard data", e);
        }
    }

    addSession(sessionResults) {
        // Update streak
        const todayStr = new Date().toISOString().split('T')[0];
        if (this.data.streak.lastDate) {
            const lastDate = new Date(this.data.streak.lastDate);
            const today = new Date(todayStr);
            const diffTime = Math.abs(today - lastDate);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                this.data.streak.currentDays++;
            } else if (diffDays > 1) {
                this.data.streak.currentDays = 1; // reset
            }
            // if diffDays === 0, already worked out today
        } else {
            this.data.streak.currentDays = 1;
        }
        this.data.streak.lastDate = todayStr;

        // Update totals
        this.data.totalReps += sessionResults.reps;
        
        // Update best scores
        const currentBest = this.data.bestScores[sessionResults.exerciseId] || 0;
        if (sessionResults.score > currentBest) {
            this.data.bestScores[sessionResults.exerciseId] = sessionResults.score;
        }

        // Add to history (keep last 50)
        this.data.sessions.unshift(sessionResults);
        if (this.data.sessions.length > 50) {
            this.data.sessions.pop();
        }

        this.saveData();
    }

    getStats() {
        const sessions = this.data.sessions;
        const totalSessions = sessions.length;
        const avgAccuracy = sessions.length > 0 
            ? Math.round(sessions.reduce((a, b) => a + b.accuracy, 0) / sessions.length) 
            : 0;

        let bestOverallScore = 0;
        for (const key in this.data.bestScores) {
            bestOverallScore = Math.max(bestOverallScore, this.data.bestScores[key]);
        }

        return {
            streak: this.data.streak.currentDays,
            totalReps: this.data.totalReps,
            sessions: totalSessions,
            avgAccuracy: avgAccuracy,
            bestScore: bestOverallScore
        };
    }

    renderDashboard(uiElements) {
        const stats = this.getStats();
        
        // Update basic DOM elements
        if (uiElements.streakEl) uiElements.streakEl.innerText = `${stats.streak} days`;
        if (uiElements.totalRepsEl) uiElements.totalRepsEl.innerText = stats.totalReps;
        if (uiElements.bestScoreEl) uiElements.bestScoreEl.innerText = stats.bestScore;
        if (uiElements.avgAccuracyEl) uiElements.avgAccuracyEl.innerText = `${stats.avgAccuracy}%`;
        
        this.renderSessionList(uiElements.sessionListEl);
        this.drawAccuracyChart(uiElements.accuracyChartEl);
        this.drawExerciseChart(uiElements.exerciseChartEl);
    }

    renderSessionList(containerEl) {
        if (!containerEl) return;
        
        if (this.data.sessions.length === 0) {
            containerEl.innerHTML = '<p class="empty-state">No sessions yet. Start exercising!</p>';
            return;
        }

        containerEl.innerHTML = '';
        const displayLimit = Math.min(10, this.data.sessions.length);
        
        for (let i = 0; i < displayLimit; i++) {
            const s = this.data.sessions[i];
            const date = new Date(s.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
            
            const div = document.createElement('div');
            div.className = 'session-item';
            div.innerHTML = `
                <div class="session-item-left">
                    <span class="session-item-exercise">${s.exerciseName}</span>
                    <span class="session-item-date">${date} • ${s.reps} reps</span>
                </div>
                <div class="session-item-score">${s.score}</div>
            `;
            containerEl.appendChild(div);
        }
    }

    drawAccuracyChart(canvas) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);

        // We want chronological order (oldest to newest)
        const sessions = [...this.data.sessions].slice(0, 20).reverse();
        
        if (sessions.length < 2) {
            ctx.fillStyle = "#64748b";
            ctx.font = "14px Inter";
            ctx.textAlign = "center";
            ctx.fillText("Complete at least 2 sessions to see trend", width/2, height/2);
            return;
        }

        const padding = 30;
        const chartW = width - padding * 2;
        const chartH = height - padding * 2;
        
        // Draw grid
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i <= 4; i++) {
            const y = padding + (chartH / 4) * i;
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
        }
        ctx.stroke();

        // Draw line
        ctx.strokeStyle = "#00d4aa";
        ctx.lineWidth = 3;
        ctx.lineJoin = "round";
        ctx.beginPath();
        
        const dx = chartW / (sessions.length - 1);
        
        sessions.forEach((s, i) => {
            const x = padding + i * dx;
            const y = padding + chartH - (s.accuracy / 100) * chartH;
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        
        ctx.stroke();
        
        // Draw points
        ctx.fillStyle = "#0099ff";
        sessions.forEach((s, i) => {
            const x = padding + i * dx;
            const y = padding + chartH - (s.accuracy / 100) * chartH;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI*2);
            ctx.fill();
        });
    }

    drawExerciseChart(canvas) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        if (this.data.sessions.length === 0) return;

        // Count reps per exercise ID
        const counts = {};
        this.data.sessions.forEach(s => {
            counts[s.exerciseName] = (counts[s.exerciseName] || 0) + s.reps;
        });
        
        const labels = Object.keys(counts).slice(0, 5); // top 5
        const values = labels.map(l => counts[l]);
        const maxVal = Math.max(...values, 10);
        
        const padding = 40;
        const chartW = width - padding * 2;
        const chartH = height - padding * 2;
        const barWidth = Math.min(40, chartW / labels.length - 10);
        
        const dx = chartW / labels.length;
        
        ctx.fillStyle = "#0099ff";
        
        labels.forEach((label, i) => {
            const val = values[i];
            const h = (val / maxVal) * chartH;
            const x = padding + i * dx + (dx - barWidth)/2;
            const y = padding + chartH - h;
            
            // Draw bar gradient
            const grad = ctx.createLinearGradient(x, y, x, y + h);
            grad.addColorStop(0, "#00d4aa");
            grad.addColorStop(1, "#0099ff");
            ctx.fillStyle = grad;
            
            // Rounded bar top
            ctx.beginPath();
            ctx.roundRect(x, y, barWidth, h, [4, 4, 0, 0]);
            ctx.fill();
            
            // Label
            ctx.fillStyle = "#94a3b8";
            ctx.font = "10px Inter";
            ctx.textAlign = "center";
            // truncate label
            const shortLabel = label.split(' ')[0];
            ctx.fillText(shortLabel, x + barWidth/2, height - 10);
        });
    }

    clearData() {
        localStorage.removeItem('rehabai_data');
        this.data = this.loadData();
    }
}
