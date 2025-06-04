# Customer-Emotion-Mining
# 💬 Customer Feedback Visualizer

Harness the power of Natural Language Processing (NLP) to decode what customers are really saying! This project analyzes and visualizes customer feedback using advanced sentiment analysis techniques. By categorizing feedback into meaningful sentiment groups and showcasing them with interactive pie charts, it offers a visual insight into customer satisfaction trends.

---

## 🧭 Quick Navigation

Jump into any section below to explore the project in detail:

- 🔍 [Project Snapshot](#project-snapshot)
- 🎯 [Key Highlights](#key-highlights)
- 🧰 [Tech Toolbox](#tech-toolbox)
- 🔧 [Workflow Demystified](#workflow-demystified)
- 🛠️ [Getting Started](#getting-started)
- 🚀 [How to Use](#how-to-use)
- 📈 [What You Get](#what-you-get)
- 🙏 [Credits & Thanks](#credits--thanks)

---

## 🔍 Project Snapshot

The **Customer Feedback Visualizer** processes and classifies customer reviews using sentiment analysis tools like **TextBlob** and **VADER**, then visualizes those insights in clean, informative pie charts.

Key capabilities include:
- Intelligent text preprocessing using `spaCy`
- Dual sentiment scoring via `TextBlob` and `VADER`
- Classification into **Satisfactory**, **Neutral**, and **Unsatisfactory**
- Exportable visual and CSV outputs for reporting

---

## 🎯 Key Highlights

✔️ **Synthetic Feedback Generator** – Produces 100 fake but realistic feedback entries  
✔️ **Robust Preprocessing** – Clean and tokenize text via `spaCy`  
✔️ **Dual Sentiment Engines** – Analyzes feedback using both `TextBlob` and `VADER`  
✔️ **Intuitive Visualization** – Pie charts provide quick, impactful sentiment snapshots  
✔️ **Export Options** – Save visualizations as PNG, PDF, or CSV for reports  

---

## 🧰 Tech Toolbox

This project integrates the following libraries and technologies:

- 🐍 **Python 3.6+**
- 📊 `pandas` – For data manipulation  
- 🔍 `spaCy` – Text cleaning and preprocessing  
- 🗨️ `TextBlob` – Polarity-based sentiment analysis  
- 🧠 `VADER` – Rule-based sentiment analysis  
- 🎨 `matplotlib` & `seaborn` – For static visualizations  
- 🤖 `Faker` – Generate synthetic customer feedback  

---

## 🔧 Workflow Demystified

Here’s what happens behind the scenes:

1. **Generate Synthetic Data**  
   → Creates realistic fake reviews using `Faker` with columns like `CustomerID`, `Name`, and `FeedbackText`.

2. **Preprocess Feedback**  
   → Tokenization, punctuation removal, and stopword elimination using `spaCy`.

3. **Perform Sentiment Analysis**  
   → `TextBlob` calculates polarity; `VADER` computes compound scores.

4. **Categorize Sentiment**  
   → Maps numerical scores into qualitative labels: **Satisfactory**, **Neutral**, or **Unsatisfactory**.

5. **Visualize Results**  
   → Pie charts render the sentiment distribution clearly for both analyzers.

---

## 🛠️ Getting Started

To set up and run the project on your machine:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/customer-feedback-visualizer.git
   cd customer-feedback-visualizer

2.**Install dependencies:**
   ```bash
   pip install -r requirements.txt --upgrade



