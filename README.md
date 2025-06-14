# 💬 Customer Feedback Visualizer

This project leverages Natural Language Processing (NLP) to analyze and interpret customer feedback. Using rule-based tools like VADER and TextBlob for initial sentiment labeling, and a Bidirectional LSTM model for advanced sentiment classification, it effectively categorizes reviews into sentiment groups. The results are visualized through interactive pie charts, offering clear insights into customer satisfaction. The BiLSTM model achieved a test accuracy of 45% after training.

---

## 📸 Project Snapshots

### 📝 Feedback Entry Interface


![Screenshot 2025-06-04 103347](https://github.com/user-attachments/assets/3d4f3b36-d389-4f6e-ad05-3b21b6e319ac)

### 📊 Sentiment Analysis Output
![Screenshot 2025-06-04 103339](https://github.com/user-attachments/assets/94a46db9-92d1-4f61-a8ac-36a6dcba1353)

##[▶️ Watch Demo Video]






https://github.com/user-attachments/assets/9bdc0a01-a467-4f59-b9bd-808d580fa871




> Replace `path-to-image/` with the actual image path in your repo or hosting location.

---

## 🎯 Key Features

- 🔄 **Synthetic Feedback Generator**: Auto-generates 100 realistic feedback entries using `Faker`
- 🧹 **Text Preprocessing**: Uses `spaCy` to clean and tokenize feedback
- 📈 **Dual Sentiment Engines**: Analyzes sentiment using both **TextBlob** and **VADER**
- 🍰 **Pie Chart Visualization**: Visually represent customer sentiment categories
- 💾 **Export Support**: Easily save data and plots as CSV, PNG, or PDF
- 🎛️ **Categorical Mapping**: Maps polarity and compound scores into `Satisfactory`, `Neutral`, or `Unsatisfactory`

---

## 🧰 Tech Stack

| Component         | Technology          |
|------------------|---------------------|
| Language          | Python 3.6+         |
| Text Preprocessing| spaCy              |
| Sentiment Tools   | TextBlob, VADER     |
| Data Generation   | Faker               |
| Visualization     | matplotlib, seaborn |
| Data Handling     | pandas              |

---

## 🧠 How It Works

### 1. **Generate Synthetic Data**
- Uses `Faker` to simulate customer names, IDs, and realistic review text

### 2. **Preprocess Feedback**
- Removes punctuation, stopwords, and performs lemmatization using `spaCy`

### 3. **Analyze Sentiment**
- `TextBlob` returns polarity scores (range: -1 to 1)
- `VADER` returns compound scores (range: -1 to 1)

### 4. **Map Sentiment Categories**
- **TextBlob**:
  - `> 0.2` → Satisfactory
  - `-0.2 to 0.2` → Neutral
  - `< -0.2` → Unsatisfactory
- **VADER**:
  - `> 0.05` → Satisfactory
  - `-0.05 to 0.05` → Neutral
  - `< -0.05` → Unsatisfactory

### 5. **Visualize**
- Generates comparative pie charts for both sentiment analyzers

---

## 🛠️ Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/customer-feedback-visualizer.git
cd customer-feedback-visualizer
