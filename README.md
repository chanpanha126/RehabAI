# RehabAI 🏋️🤖

RehabAI is an AI-powered rehabilitation platform using real-time computer vision and gamification, specifically designed to assist with stroke and hemiplegia recovery. The platform tracks patient movements in real-time, guides them through targeted physical therapy exercises, and evaluates their form using custom machine learning models running entirely on the client side.

---

## 🌟 Key Features

- **Real-Time Pose Tracking**: Utilizes **MediaPipe Pose** directly in the browser to track joint coordinates without requiring any external hardware besides a standard webcam.
- **Client-Side ML Inference**: Features 9 separate **XGBoost classifiers** exported to raw JavaScript using **m2cgen**. This enables zero-latency model inference directly in the browser, completely removing the need for an external GPU server or cloud API endpoints.
- **Interactive Gamification**:
  - **Ghost Guide Skeleton**: A glowing overlay showing target postures to help patients perform exercises correctly.
  - **Live Feedback**: Real-time evaluation of form and accuracy.
  - **Progress Dashboard**: Track streaks, completed reps, best scores, and view history trends.
  - **Audio/Visual Rewards**: Stars, score multipliers, combo counts, sound effects, and floating rep popups.
- **Fully Responsive Glassmorphism Design**: Sleek, modern, and dark-themed UI built with HTML, JS, and custom CSS.

---

## 🏃 Supported Rehabilitation Exercises

RehabAI evaluates movements for 9 distinct rehabilitation gesture types:

| ID | Gesture Name | Focus Area |
|:---:|:---|:---|
| **0** | `ElbowFlexionLeft` | Left arm elbow range of motion |
| **1** | `ElbowFlexionRight` | Right arm elbow range of motion |
| **2** | `ShoulderFlexionLeft` | Left shoulder elevation forward |
| **3** | `ShoulderFlexionRight` | Right shoulder elevation forward |
| **4** | `ShoulderAbductionLeft` | Left shoulder lateral reach |
| **5** | `ShoulderAbductionRight` | Right shoulder lateral reach |
| **6** | `ShoulderForwardElevation` | Bilateral shoulder lift |
| **7** | `SideTapLeft` | Lateral trunk stability and side reach |
| **8** | `SideTapRight` | Lateral trunk stability and side reach |

---

## 📂 Project Structure

```text
RehabAI/
├── SkeletonData/            # Raw skeleton/pose dataset files
├── data.csv                 # Compiled CSV dataset containing landmark features for training
├── requirements.txt         # Python dependencies for model training
├── train_all_models.py      # Automated pipeline to train and export XGBoost models to JavaScript
├── train_model.ipynb        # Jupyter notebook for research, testing, and model iteration
└── front-end/               # Complete web-app code
    ├── index.html           # Main entrypoint and screen layouts
    ├── style.css            # Custom CSS stylesheets (modern dark mode, glassmorphism)
    ├── app.js               # Application coordinator and screen routing logic
    ├── camera.js            # Webcam stream wrapper and MediaPipe connector
    ├── exercise-engine.js   # Logical engine for matching and verifying exercises
    ├── game-manager.js      # Manages scores, combos, streaks, and gamification feedback
    ├── ghost-animator.js    # Computes and animates reference "ghost" guide postures
    ├── skeleton-renderer.js # Renders active and guide skeletons onto the HTML5 Canvas
    ├── audio.js             # Manages audio sound effects (success, combo, victory)
    ├── XGBoost_Engine.js    # Math functions required for XGBoost tree scores in JavaScript
    ├── test_pose.html       # Debug page to test MediaPipe pose coordinates
    └── models/              # Exported JavaScript XGBoost models
        ├── model_gesture_0.js
        ├── ...
        └── all_models.js    # Aggregates and exposes all gesture models to the engine
```

---

## 🛠️ Installation & Setup

### 1. Run the Web Application
The frontend requires no compiler or build steps. However, due to browser security restrictions on webcam feeds and ES Modules, you must run it through a local web server:

**Using Python:**
```bash
cd front-end
python -m http.server 8000
```
Then, open `http://localhost:8000` in your web browser.

**Using VS Code:**
- Install the **Live Server** extension.
- Right-click `front-end/index.html` and select **Open with Live Server**.

### 2. Machine Learning Training Pipeline
If you wish to re-train the models on your custom `data.csv`:

1. Set up a Python virtual environment and install the dependencies:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   pip install -r requirements.txt
   ```
2. Run the training script:
   ```bash
   python train_all_models.py
   ```
   This script will:
   - Load training landmarks from `data.csv`.
   - Train an XGBoost model for each gesture.
   - Print out accuracy reports.
   - Auto-compile the models to JavaScript files and save them to `front-end/models/`.

---

## 🤖 How the Machine Learning Works

Instead of using resource-intensive deep learning models on the frontend, RehabAI uses a hybrid pipeline:
1. **Pose Landmark Extraction**: MediaPipe Pose runs inside the browser, transforming the raw image pixels from the webcam into 33 3D coordinate landmarks.
2. **Feature Alignment**: Relevant relative angles and landmark distance vectors are calculated.
3. **Gradient Boosting Forest**: The calculated features are fed into a trained XGBoost forest.
4. **JavaScript Translation**: Using `m2cgen` (Model to Code Generator), the mathematical trees inside XGBoost are represented as structured nested `if-else` blocks in vanilla JS. This runs in less than **1ms**, making it incredibly performant and suitable for run-of-the-mill laptops or mobile browsers.
