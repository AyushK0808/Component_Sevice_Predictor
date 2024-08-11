import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import mean_squared_error, mean_absolute_error
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from io import BytesIO
from model import prepare_data

def save_plot_to_image(plot_func, filename):
    buf = BytesIO()
    plot_func()
    plt.savefig(buf, format='png')
    buf.seek(0)
    with open(filename, 'wb') as f:
        f.write(buf.read())
    buf.close()
    plt.close()

# Define a function to create PDF report
def create_pdf_report(model, X, y, scaler, column_names, thresholds, predictions_file, output_file="report.pdf"):
    c = canvas.Canvas(output_file, pagesize=letter)
    width, height = letter

    # Title Page
    c.setFont("Helvetica-Bold", 16)
    c.drawString(1 * inch, height - 1 * inch, "Machine Breakdown Prediction Report")
    c.setFont("Helvetica", 12)
    c.drawString(1 * inch, height - 1.5 * inch, f"Date: {pd.Timestamp.now().strftime('%Y-%m-%d')}")
    c.drawString(1 * inch, height - 2 * inch, "User/Company Name")

    c.showPage()

    # Model Training and Evaluation
    c.setFont("Helvetica-Bold", 14)
    c.drawString(1 * inch, height - 1 * inch, "Model Training and Evaluation")
    c.setFont("Helvetica", 12)

    # Training Loss Plot
    def plot_loss():
        plt.figure(figsize=(8, 6))
        history = model.history  # You need to modify this based on how you store training history
        plt.plot(history.history['loss'], label='Training Loss')
        plt.plot(history.history['val_loss'], label='Validation Loss')
        plt.title('Model Loss')
        plt.xlabel('Epoch')
        plt.ylabel('Loss')
        plt.legend()
    save_plot_to_image(plot_loss, 'training_loss.png')
    c.drawImage('training_loss.png', 1 * inch, height - 4 * inch, width=6 * inch, height=3 * inch)

    # Metrics
    train_predictions = model.predict(X)
    train_mse = mean_squared_error(y, train_predictions)
    train_mae = mean_absolute_error(y, train_predictions)
    c.drawString(1 * inch, height - 4.5 * inch, f"Train MSE: {train_mse:.4f}")
    c.drawString(1 * inch, height - 5 * inch, f"Train MAE: {train_mae:.4f}")

    c.showPage()

    # Breakdown Predictions
    c.setFont("Helvetica-Bold", 14)
    c.drawString(1 * inch, height - 1 * inch, "Breakdown Predictions")
    c.setFont("Helvetica", 12)
    
    # Load and add breakdown predictions from file
    with open(predictions_file, 'r') as f:
        predictions = f.read()
    c.drawString(1 * inch, height - 1.5 * inch, "Predictions:")
    c.drawString(1 * inch, height - 2 * inch, predictions)

    c.showPage()

    # Sensitivity Analysis
    c.setFont("Helvetica-Bold", 14)
    c.drawString(1 * inch, height - 1 * inch, "Sensitivity Analysis")
    c.setFont("Helvetica", 12)

    # Sensitivity Plot
    def plot_sensitivity():
        sensitivity = {}  # You need to replace this with your actual sensitivity analysis
        baseline_pred = model.predict(X[-1].reshape(1, X.shape[1], X.shape[2]))
        for i, col in enumerate(column_names):
            X_perturbed = X[-1].copy()
            X_perturbed[:, i] *= 1.2
            perturbed_pred = model.predict(X_perturbed.reshape(1, X.shape[1], X.shape[2]))
            sensitivity[col] = np.mean(np.abs(perturbed_pred - baseline_pred))
        
        plt.figure(figsize=(8, 6))
        cols = list(sensitivity.keys())
        values = list(sensitivity.values())
        plt.barh(cols, values)
        plt.title('Feature Sensitivity')
        plt.xlabel('Sensitivity')
    save_plot_to_image(plot_sensitivity, 'sensitivity_analysis.png')
    c.drawImage('sensitivity_analysis.png', 1 * inch, height - 4 * inch, width=6 * inch, height=3 * inch)

    c.showPage()

    # Feature Scaling Analysis
    c.setFont("Helvetica-Bold", 14)
    c.drawString(1 * inch, height - 1 * inch, "Feature Scaling Analysis")
    c.setFont("Helvetica", 12)

    # Feature Scaling Plot
    def plot_scaling():
        numerical_cols = X.columns
        scaler = MinMaxScaler()
        scaled_data = scaler.fit_transform(X[numerical_cols])
        plt.figure(figsize=(8, 6))
        pd.DataFrame(scaled_data, columns=numerical_cols).describe().T.plot(kind='bar')
        plt.title('Scaled Data Statistics')
        plt.xlabel('Feature')
        plt.ylabel('Value')
    save_plot_to_image(plot_scaling, 'feature_scaling.png')
    c.drawImage('feature_scaling.png', 1 * inch, height - 4 * inch, width=6 * inch, height=3 * inch)

    c.showPage()

    # Data Overview
    c.setFont("Helvetica-Bold", 14)
    c.drawString(1 * inch, height - 1 * inch, "Data Overview")
    c.setFont("Helvetica", 12)

    # Display Data Sample
    sample_data = X.head().to_string()
    c.drawString(1 * inch, height - 1.5 * inch, "Sample Data:")
    c.drawString(1 * inch, height - 2 * inch, sample_data)

    c.showPage()

    c.save()

