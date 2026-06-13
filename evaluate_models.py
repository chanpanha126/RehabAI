"""
RehabAI — Comprehensive Model Evaluation & Slide-Ready Charts
==============================================================
Trains all 9 XGBoost gesture models, computes every key metric
(Accuracy, Precision, Recall, F1-Score, ROC-AUC, Log Loss),
and generates comparison charts suitable for presentation slides.

Output directory: evaluation_results/
"""

import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    roc_auc_score, log_loss, confusion_matrix, roc_curve,
    precision_recall_curve, classification_report
)
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import seaborn as sns
import os

# ─────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────
CSV_FILE   = "data.csv"
OUTPUT_DIR = "evaluation_results"
DPI        = 300  # high-res for slides

GESTURE_NAMES = {
    0: "Elbow Flex. Left",
    1: "Elbow Flex. Right",
    2: "Shoulder Flex. Left",
    3: "Shoulder Flex. Right",
    4: "Shoulder Abd. Left",
    5: "Shoulder Abd. Right",
    6: "Shoulder Fwd. Elev.",
    7: "Side Tap Left",
    8: "Side Tap Right",
}

# Slide-ready style
plt.rcParams.update({
    "figure.facecolor": "#FFFFFF",
    "axes.facecolor":   "#F8F9FA",
    "axes.edgecolor":   "#DEE2E6",
    "axes.grid":        True,
    "grid.color":       "#E9ECEF",
    "grid.linewidth":   0.6,
    "font.family":      "sans-serif",
    "font.size":        13,
    "axes.titlesize":   16,
    "axes.titleweight":  "bold",
    "axes.labelsize":   13,
    "xtick.labelsize":  11,
    "ytick.labelsize":  11,
    "legend.fontsize":  11,
})

PALETTE = sns.color_palette("Set2", 9)


# ─────────────────────────────────────────────
# 1. TRAIN & EVALUATE ALL 9 MODELS
# ─────────────────────────────────────────────
def train_and_evaluate(csv_file):
    """Train each gesture model and return a dict of metrics."""
    df = pd.read_csv(csv_file)
    metrics = {}

    for gid in sorted(df["gesture_type"].unique()):
        name = GESTURE_NAMES.get(gid, f"Gesture {gid}")
        gdf  = df[df["gesture_type"] == gid].copy()

        X = gdf.drop(columns=["gesture_type", "label"])
        y = gdf["label"]

        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )

        model = xgb.XGBClassifier(
            n_estimators=100, max_depth=5, base_score=0.5,
            eval_metric="logloss", random_state=42
        )
        model.fit(X_train, y_train)

        y_pred       = model.predict(X_test)
        y_pred_proba = model.predict_proba(X_test)[:, 1]

        acc  = accuracy_score(y_test, y_pred)
        prec = precision_score(y_test, y_pred, average="weighted", zero_division=0)
        rec  = recall_score(y_test, y_pred, average="weighted", zero_division=0)
        f1   = f1_score(y_test, y_pred, average="weighted", zero_division=0)
        auc  = roc_auc_score(y_test, y_pred_proba)
        ll   = log_loss(y_test, y_pred_proba)
        cm   = confusion_matrix(y_test, y_pred)

        # ROC curve data
        fpr, tpr, _ = roc_curve(y_test, y_pred_proba)
        # Precision-Recall curve data
        pr_prec, pr_rec, _ = precision_recall_curve(y_test, y_pred_proba)

        # Class distribution in test set
        n_pos = int(y_test.sum())
        n_neg = int(len(y_test) - n_pos)
        imbalance_ratio = round(max(n_pos, n_neg) / min(n_pos, n_neg), 2)

        metrics[gid] = {
            "name": name, "accuracy": acc, "precision": prec,
            "recall": rec, "f1": f1, "roc_auc": auc, "log_loss": ll,
            "confusion_matrix": cm, "samples": len(gdf),
            "test_pos": n_pos, "test_neg": n_neg,
            "imbalance_ratio": imbalance_ratio,
            "fpr": fpr, "tpr": tpr,
            "pr_precision": pr_prec, "pr_recall": pr_rec,
        }

        print(f"[Gesture {gid}] {name:>22s}  |  "
              f"Acc={acc:.4f}  P={prec:.4f}  R={rec:.4f}  "
              f"F1={f1:.4f}  AUC={auc:.4f}  LL={ll:.4f}")

    return metrics


# ─────────────────────────────────────────────
# 2. CHART GENERATORS
# ─────────────────────────────────────────────

def chart_1_metrics_table(metrics, out):
    """Comprehensive metrics CSV + styled table image."""
    rows = []
    for gid in sorted(metrics):
        m = metrics[gid]
        rows.append({
            "Gesture":        m["name"],
            "Samples":        m["samples"],
            "Imbalance":      f'{m["imbalance_ratio"]}:1',
            "Accuracy (%)":   round(m["accuracy"]  * 100, 2),
            "Precision (%)":  round(m["precision"] * 100, 2),
            "Recall (%)":     round(m["recall"]    * 100, 2),
            "F1-Score (%)":   round(m["f1"]        * 100, 2),
            "ROC-AUC":        round(m["roc_auc"],          4),
            "Log Loss":       round(m["log_loss"],         4),
        })
    table = pd.DataFrame(rows)
    table.to_csv(os.path.join(out, "metrics_table.csv"), index=False)

    # Render as image
    fig, ax = plt.subplots(figsize=(16, 5))
    ax.axis("off")
    ax.set_title("RehabAI — Comprehensive Model Metrics", fontsize=18,
                 fontweight="bold", pad=20)

    tbl = ax.table(
        cellText=table.values, colLabels=table.columns,
        cellLoc="center", loc="center"
    )
    tbl.auto_set_font_size(False)
    tbl.set_fontsize(10)
    tbl.scale(1, 1.6)

    # Style header row
    for col_idx in range(len(table.columns)):
        cell = tbl[0, col_idx]
        cell.set_facecolor("#2C3E50")
        cell.set_text_props(color="white", fontweight="bold")

    # Alternate row colours
    for row_idx in range(1, len(table) + 1):
        colour = "#EBF5FB" if row_idx % 2 == 0 else "#FFFFFF"
        for col_idx in range(len(table.columns)):
            tbl[row_idx, col_idx].set_facecolor(colour)

    fig.tight_layout()
    fig.savefig(os.path.join(out, "chart_metrics_table.png"), dpi=DPI,
                bbox_inches="tight")
    plt.close(fig)
    print("  ✓ Metrics table saved")
    return table


def chart_2_f1_vs_roc_auc(metrics, out):
    """Grouped bar chart: F1-Score vs ROC-AUC."""
    names = [metrics[g]["name"] for g in sorted(metrics)]
    f1s   = [metrics[g]["f1"]      for g in sorted(metrics)]
    aucs  = [metrics[g]["roc_auc"] for g in sorted(metrics)]

    x     = np.arange(len(names))
    width = 0.35

    fig, ax = plt.subplots(figsize=(14, 6))
    bars1 = ax.bar(x - width/2, f1s,  width, label="F1-Score",
                   color="#3498DB", edgecolor="white", linewidth=0.8)
    bars2 = ax.bar(x + width/2, aucs, width, label="ROC-AUC",
                   color="#E74C3C", edgecolor="white", linewidth=0.8)

    ax.set_ylabel("Score")
    ax.set_title("F1-Score vs ROC-AUC  —  Cross-Model Comparison")
    ax.set_xticks(x)
    ax.set_xticklabels(names, rotation=35, ha="right")
    ax.set_ylim(0.990, 1.002)
    ax.yaxis.set_major_formatter(mticker.FormatStrFormatter("%.3f"))
    ax.legend(loc="lower left", framealpha=0.9)

    # Value labels
    for bar in bars1:
        ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.0003,
                f"{bar.get_height():.4f}", ha="center", va="bottom", fontsize=8)
    for bar in bars2:
        ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.0003,
                f"{bar.get_height():.4f}", ha="center", va="bottom", fontsize=8)

    fig.tight_layout()
    fig.savefig(os.path.join(out, "chart_f1_vs_roc_auc.png"), dpi=DPI)
    plt.close(fig)
    print("  ✓ F1 vs ROC-AUC chart saved")


def chart_3_precision_vs_recall(metrics, out):
    """Clinical Safety — Precision vs Recall scatter with annotations."""
    fig, ax = plt.subplots(figsize=(10, 8))

    for idx, gid in enumerate(sorted(metrics)):
        m = metrics[gid]
        ax.scatter(m["recall"], m["precision"], s=220, zorder=5,
                   color=PALETTE[idx], edgecolors="white", linewidth=1.5)
        ax.annotate(m["name"], (m["recall"], m["precision"]),
                    textcoords="offset points", xytext=(8, -6), fontsize=9)

    ax.set_xlabel("Recall  (↑ = fewer missed correct movements)")
    ax.set_ylabel("Precision  (↑ = fewer false 'good form' signals)")
    ax.set_title("Clinical Safety  —  Precision vs Recall")

    ax.set_xlim(0.994, 1.001)
    ax.set_ylim(0.994, 1.001)
    ax.xaxis.set_major_formatter(mticker.FormatStrFormatter("%.3f"))
    ax.yaxis.set_major_formatter(mticker.FormatStrFormatter("%.3f"))

    # Ideal corner indicator
    ax.annotate("← Ideal zone", xy=(1.0, 1.0),
                fontsize=10, fontstyle="italic", color="#27AE60",
                ha="right", va="top")

    fig.tight_layout()
    fig.savefig(os.path.join(out, "chart_clinical_safety.png"), dpi=DPI)
    plt.close(fig)
    print("  ✓ Clinical Safety chart saved")


def chart_4_log_loss_heatmap(metrics, out):
    """Log Loss 1-D heatmap — lower = better probability calibration."""
    names = [metrics[g]["name"] for g in sorted(metrics)]
    lls   = [metrics[g]["log_loss"] for g in sorted(metrics)]

    fig, ax = plt.subplots(figsize=(14, 3))
    data = np.array(lls).reshape(1, -1)

    sns.heatmap(data, annot=True, fmt=".4f", cmap="YlOrRd_r",
                xticklabels=names, yticklabels=["Log Loss"],
                linewidths=1, linecolor="white", cbar_kws={"shrink": 0.8},
                ax=ax)
    ax.set_title("Probability Quality  —  Log Loss (lower is better)")
    ax.set_xticklabels(names, rotation=35, ha="right")

    fig.tight_layout()
    fig.savefig(os.path.join(out, "chart_log_loss_heatmap.png"), dpi=DPI)
    plt.close(fig)
    print("  ✓ Log Loss heatmap saved")


def chart_5_roc_curves_overlay(metrics, out):
    """All 9 ROC curves overlaid on one plot."""
    fig, ax = plt.subplots(figsize=(9, 8))

    for idx, gid in enumerate(sorted(metrics)):
        m = metrics[gid]
        ax.plot(m["fpr"], m["tpr"], linewidth=2, color=PALETTE[idx],
                label=f'{m["name"]}  (AUC={m["roc_auc"]:.4f})')

    ax.plot([0, 1], [0, 1], "k--", linewidth=0.8, alpha=0.4, label="Random")
    ax.set_xlabel("False Positive Rate")
    ax.set_ylabel("True Positive Rate")
    ax.set_title("ROC Curves  —  All 9 Gesture Models")
    ax.legend(loc="lower right", fontsize=9, framealpha=0.9)
    ax.set_xlim(-0.01, 0.15)
    ax.set_ylim(0.85, 1.01)

    fig.tight_layout()
    fig.savefig(os.path.join(out, "chart_roc_curves.png"), dpi=DPI)
    plt.close(fig)
    print("  ✓ ROC curves chart saved")


def chart_6_confusion_matrices_grid(metrics, out):
    """3×3 grid of confusion matrices for all 9 gestures."""
    fig, axes = plt.subplots(3, 3, figsize=(16, 14))
    fig.suptitle("Confusion Matrices  —  All 9 Gesture Models",
                 fontsize=20, fontweight="bold", y=1.01)

    for idx, gid in enumerate(sorted(metrics)):
        m  = metrics[gid]
        ax = axes[idx // 3][idx % 3]
        cm = m["confusion_matrix"]

        sns.heatmap(cm, annot=True, fmt="d", cmap="Blues",
                    xticklabels=["Incorrect", "Correct"],
                    yticklabels=["Incorrect", "Correct"],
                    linewidths=0.5, linecolor="white", ax=ax,
                    cbar=False)
        ax.set_title(f'{m["name"]}', fontsize=12, fontweight="bold")
        ax.set_xlabel("Predicted")
        ax.set_ylabel("Actual")

    fig.tight_layout()
    fig.savefig(os.path.join(out, "chart_confusion_matrices.png"), dpi=DPI,
                bbox_inches="tight")
    plt.close(fig)
    print("  ✓ Confusion matrix grid saved")


def chart_7_dataset_distribution(metrics, out):
    """Stacked bar chart showing class imbalance per gesture."""
    names   = [metrics[g]["name"] for g in sorted(metrics)]
    pos     = [metrics[g]["test_pos"] for g in sorted(metrics)]
    neg     = [metrics[g]["test_neg"] for g in sorted(metrics)]

    x = np.arange(len(names))
    width = 0.5

    fig, ax = plt.subplots(figsize=(14, 6))
    ax.bar(x, neg, width, label="Incorrect (0)", color="#E74C3C", alpha=0.85)
    ax.bar(x, pos, width, bottom=neg, label="Correct (1)",
           color="#2ECC71", alpha=0.85)

    ax.set_ylabel("Number of Test Samples")
    ax.set_title("Dataset Class Distribution per Gesture (Test Set)")
    ax.set_xticks(x)
    ax.set_xticklabels(names, rotation=35, ha="right")
    ax.legend()

    # Imbalance ratio annotations
    for i, gid in enumerate(sorted(metrics)):
        m = metrics[gid]
        total = m["test_pos"] + m["test_neg"]
        ax.text(i, total + 50, f'{m["imbalance_ratio"]}:1',
                ha="center", fontsize=9, fontstyle="italic", color="#7F8C8D")

    fig.tight_layout()
    fig.savefig(os.path.join(out, "chart_dataset_distribution.png"), dpi=DPI)
    plt.close(fig)
    print("  ✓ Dataset distribution chart saved")


# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print("=" * 65)
    print(" RehabAI — Training & Evaluating All 9 Models")
    print("=" * 65)
    metrics = train_and_evaluate(CSV_FILE)

    print(f"\n{'─' * 65}")
    print(f" Generating slide-ready charts → {OUTPUT_DIR}/")
    print(f"{'─' * 65}")

    table = chart_1_metrics_table(metrics, OUTPUT_DIR)
    chart_2_f1_vs_roc_auc(metrics, OUTPUT_DIR)
    chart_3_precision_vs_recall(metrics, OUTPUT_DIR)
    chart_4_log_loss_heatmap(metrics, OUTPUT_DIR)
    chart_5_roc_curves_overlay(metrics, OUTPUT_DIR)
    chart_6_confusion_matrices_grid(metrics, OUTPUT_DIR)
    chart_7_dataset_distribution(metrics, OUTPUT_DIR)

    print(f"\n{'=' * 65}")
    print(" ALL DONE — Summary")
    print(f"{'=' * 65}")
    print(table.to_string(index=False))
    print(f"\n📁 All charts and CSV saved to: {OUTPUT_DIR}/")
    print(f"   Ready to drag-and-drop into your presentation slides!")
