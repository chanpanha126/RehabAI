"""
Train 9 separate XGBoost models (one per gesture type) and export each to JavaScript.
"""
import pandas as pd
import xgboost as xgb
import m2cgen as m2c
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix
import matplotlib.pyplot as plt
import seaborn as sns
import os

def train_all_models(csv_file, output_dir):
    df = pd.read_csv(csv_file)
    
    gesture_names = {
        0: 'ElbowFlexionLeft',
        1: 'ElbowFlexionRight',
        2: 'ShoulderFlexionLeft',
        3: 'ShoulderFlexionRight',
        4: 'ShoulderAbductionLeft',
        5: 'ShoulderAbductionRight',
        6: 'ShoulderForwardElevation',
        7: 'SideTapLeft',
        8: 'SideTapRight'
    }
    
    os.makedirs(output_dir, exist_ok=True)
    
    results = {}
    
    for gesture_id in sorted(df['gesture_type'].unique()):
        name = gesture_names.get(gesture_id, f'Gesture{gesture_id}')
        print(f"\n{'='*60}")
        print(f"Training model for Gesture {gesture_id}: {name}")
        print(f"{'='*60}")
        
        gesture_df = df[df['gesture_type'] == gesture_id].copy()
        
        label_counts = gesture_df['label'].value_counts()
        print(f"  Total samples: {len(gesture_df)}")
        print(f"  Label distribution: {dict(label_counts)}")
        
        if len(gesture_df) < 20:
            print(f"  SKIPPING: Not enough data ({len(gesture_df)} rows)")
            continue
        
        X = gesture_df.drop(columns=['gesture_type', 'label'])
        y = gesture_df['label']
        
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        model = xgb.XGBClassifier(
            n_estimators=100,
            max_depth=5,
            base_score=0.5,
            eval_metric='logloss',
            random_state=42
        )
        model.fit(X_train, y_train)
        
        y_pred = model.predict(X_test)
        
        # Calculate metrics
        accuracy = accuracy_score(y_test, y_pred)
        precision = precision_score(y_test, y_pred, average='weighted', zero_division=0)
        recall = recall_score(y_test, y_pred, average='weighted', zero_division=0)
        f1 = f1_score(y_test, y_pred, average='weighted', zero_division=0)
        
        print(f"  Accuracy:  {accuracy*100:.2f}%")
        print(f"  Precision: {precision*100:.2f}%")
        print(f"  Recall:    {recall*100:.2f}%")
        print(f"  F1 Score:  {f1*100:.2f}%")
        
        # Generate Confusion Matrix Chart
        cm = confusion_matrix(y_test, y_pred)
        plt.figure(figsize=(5, 4))
        sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
        plt.title(f'Confusion Matrix: {name}')
        plt.xlabel('Predicted Label')
        plt.ylabel('True Label')
        plt.tight_layout()
        plt.savefig(os.path.join(output_dir, f'cm_gesture_{gesture_id}.png'))
        plt.close()
        
        results[gesture_id] = {
            'name': name,
            'accuracy': accuracy,
            'precision': precision,
            'recall': recall,
            'f1': f1,
            'samples': len(gesture_df)
        }
        
        # Export to JavaScript
        js_code = m2c.export_to_javascript(model)
        
        output_file = os.path.join(output_dir, f'model_gesture_{gesture_id}.js')
        with open(output_file, 'w') as f:
            f.write(f"// XGBoost Model for Gesture {gesture_id}: {name}\n")
            f.write(f"// Accuracy: {accuracy*100:.2f}%\n")
            f.write(f"// Precision: {precision*100:.2f}%\n")
            f.write(f"// Recall: {recall*100:.2f}%\n")
            f.write(f"// F1 Score: {f1*100:.2f}%\n")
            f.write(f"// Trained on {len(gesture_df)} samples\n\n")
            f.write(f"export function evaluateGesture{gesture_id}(features) {{\n")
            f.write(js_code)
            f.write("\n    return score(features);\n}\n")
        
        print(f"  Exported to: {output_file}")
    
    # Generate Summary Metrics Chart
    gesture_names_list = [results[gid]['name'] for gid in sorted(results.keys())]
    acc_list = [results[gid]['accuracy'] for gid in sorted(results.keys())]
    f1_list = [results[gid]['f1'] for gid in sorted(results.keys())]
    
    plt.figure(figsize=(12, 7))
    x = range(len(gesture_names_list))
    width = 0.35
    plt.bar([i - width/2 for i in x], acc_list, width, label='Accuracy', color='skyblue')
    plt.bar([i + width/2 for i in x], f1_list, width, label='F1 Score', color='salmon')
    plt.xlabel('Gesture Models')
    plt.ylabel('Score (0 to 1)')
    plt.title('Accuracy and F1 Score by Gesture Model')
    plt.xticks(x, gesture_names_list, rotation=45, ha='right')
    plt.legend(loc='lower right')
    plt.ylim(0.95, 1.01) # zoom in since scores are high
    plt.tight_layout()
    plt.savefig(os.path.join(output_dir, 'metrics_summary.png'))
    plt.close()
    
    # Create a combined loader module
    combined_file = os.path.join(output_dir, 'all_models.js')
    with open(combined_file, 'w') as f:
        f.write("// Combined XGBoost Models for all 9 rehabilitation gestures\n")
        f.write("// Auto-generated by train_all_models.py\n\n")
        
        for gesture_id in sorted(results.keys()):
            f.write(f"import {{ evaluateGesture{gesture_id} }} from './model_gesture_{gesture_id}.js';\n")
        
        f.write("\nexport const GESTURE_MODELS = {\n")
        for gesture_id in sorted(results.keys()):
            info = results[gesture_id]
            f.write(f"    {gesture_id}: {{ name: '{info['name']}', evaluate: evaluateGesture{gesture_id}, accuracy: {info['accuracy']:.4f}, precision: {info['precision']:.4f}, recall: {info['recall']:.4f}, f1: {info['f1']:.4f} }},\n")
        f.write("};\n\n")
        
        f.write("export function evaluateGesture(gestureId, features) {\n")
        f.write("    const model = GESTURE_MODELS[gestureId];\n")
        f.write("    if (!model) return null;\n")
        f.write("    const result = model.evaluate(features);\n")
        f.write("    // result is [prob_class_0, prob_class_1]\n")
        f.write("    return {\n")
        f.write("        prediction: result[1] > 0.5 ? 1 : 0,\n")
        f.write("        confidence: Math.max(result[0], result[1]),\n")
        f.write("        probCorrect: result[1],\n")
        f.write("        probIncorrect: result[0]\n")
        f.write("    };\n")
        f.write("}\n")
    
    print(f"\n{'='*60}")
    print("TRAINING SUMMARY")
    print(f"{'='*60}")
    for gid in sorted(results.keys()):
        r = results[gid]
        print(f"  Gesture {gid} ({r['name']}): Acc: {r['accuracy']*100:.2f}%, P: {r['precision']*100:.2f}%, R: {r['recall']*100:.2f}%, F1: {r['f1']*100:.2f}% ({r['samples']} samples)")
    print(f"\nCharts saved in {output_dir}")
    print(f"Combined loader: {combined_file}")

if __name__ == '__main__':
    train_all_models('data.csv', 'front-end/models')
