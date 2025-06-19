
# 🧠 Customer Emotion Mining using NLP & LSTM (Flipkart Reviews)

This project showcases an end-to-end machine learning pipeline for **emotion mining** from customer reviews. It begins with scraping user reviews from Flipkart, followed by text augmentation, sentiment analysis, NLP preprocessing, and finally classification using a deep LSTM model.

---

## 📌 Overview

The workflow is organized in two Jupyter notebooks:

1. **`nlp.ipynb`**: Handles all NLP preprocessing steps after data collection – cleaning, tokenization, lemmatization, stopword removal, vocabulary creation, and padding.

2. **`lstm (1).ipynb`**: Constructs and trains a neural network using Embedding + LSTM layers for emotion classification of customer reviews, including model evaluation and metrics visualization.

---

## 🛒 Data Source

- Reviews were extracted from **Flipkart** using web scraping techniques with Python.
- Each review includes:
  - Customer rating
  - Review title
  - Full comment
- After scraping, data was **augmented** for balancing emotions like *happy, angry, neutral, sad*, etc., to improve model generalization.

---

## 😊 Sentiment Analysis

Before training the LSTM model, customer reviews are analyzed using:

- **VADER (Valence Aware Dictionary and sEntiment Reasoner)**
- **TextBlob**

These tools help derive initial **sentiment polarity (positive, negative, neutral)**. The results are visualized using:

📊 **Pie Charts**  
- Distribution of sentiment classes based on review texts  
- Enables a clear view of customer emotion trends before classification

---

## ⚙️ How It Works

### Step-by-Step Pipeline:

1. **Web Scraping**:
   - Data fetched using BeautifulSoup/requests or Selenium
   - Stored in structured format (CSV / JSON)

2. **Sentiment Analysis**:
   - VADER and TextBlob applied to review texts
   - Sentiment score thresholds used to classify text
   - Pie charts generated to visualize sentiment distribution

3. **Text Preprocessing (`nlp.ipynb`)**:
   - Lowercasing, punctuation & digit removal
   - Tokenization
   - Stopword removal with `nltk`
   - Lemmatization
   - Vocabulary and token index generation
   - Sentence padding to standard length

4. **Modeling with LSTM (`lstm (1).ipynb`)**:
   - Input: Tokenized padded sequences
   - Layers:
     - Embedding layer
     - LSTM with dropout
     - Dense + Softmax/Sigmoid for classification
   - Output: Predicted emotion class

---

## 🚀 Tech Stack

| Category        | Tools / Libraries        |
|----------------|--------------------------|
| Language        | Python 3.x               |
| Scraping        | BeautifulSoup, requests  |
| NLP Toolkit     | NLTK, TextBlob, VADER    |
| Deep Learning   | TensorFlow, Keras        |
| Visualization   | Matplotlib               |
| Evaluation      | Scikit-learn             |

---

## 📊 Model Performance

| Metric     | Value        |
|------------|--------------|
| Test Accuracy | **94.76%** ✅ |
| Loss         | ~0.18        |
| Optimizer    | Adam         |
| Epochs       | 10           |

> ✅ The LSTM model demonstrates excellent performance in mining customer emotions from Flipkart reviews.

---

## 🖼️ Screenshots

> 📷 **Coming Soon**
- Raw review examples from Flipkart
- Sentiment pie chart (VADER/TextBlob)
- Tokenization and padding preview
- LSTM model summary and training curve

---

## 🎬 Demo Video

> 🎥 **Coming Soon**
- Full demo of the pipeline from scraping to classification

---

## 🧪 Installation & Running

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/flipkart-emotion-mining.git
cd flipkart-emotion-mining
```

### 2. Install dependencies:
```bash
pip install -r requirements.txt
```

### 3. Run notebooks:
Use Jupyter Notebook or any IDE to explore and execute:
- `nlp.ipynb`
- `lstm (1).ipynb`

---

## 📂 Folder Structure

```
.
├── nlp.ipynb               # Text preprocessing & sentiment analysis
├── lstm (1).ipynb          # LSTM model training and evaluation
├── README.md               # Project documentation
├── requirements.txt        # Python dependencies
└── /data                   # (optional) Scraped and augmented review data
```

---

## 👤 Author

**Prapti Mishra**  
📧 [Praptimishra977@gmail.com]

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
