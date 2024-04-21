import re
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
import nltk
import pandas as pd
from nltk.tokenize import word_tokenize, sent_tokenize  # Add this line to import word_tokenize

# Download NLTK stopwords dataset
nltk.download('stopwords')
nltk.download('punkt')  # Add this line to download the Punkt tokenizer

# Arabic stop words
stop_words_arabic = set(nltk.corpus.stopwords.words('arabic'))

# Function to preprocess Arabic text: remove stop words, punctuation, and digits
def preprocess_arabic_text(text):
    # Remove emails
    text = re.sub(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', '', text)

    # Remove hashtags
    text = re.sub(r'#\w+', '', text)

    # Remove non-Arabic characters and symbols
    text = re.sub(r'[^\u0600-\u06FF\s]', '', text)

    # Remove digits
    text = re.sub(r'\d+', '', text)

    # Remove punctuation
    text = re.sub(r'[^\w\s]', '', text)

    # Tokenize text
    words = text.split()

    # Filter out stop words and return the preprocessed text
    filtered_words = [word for word in words if word.lower() not in stop_words_arabic]
    return ' '.join(filtered_words)

# Custom machine learning model for generating summaries
class Summarizer:
    def __init__(self):
        self.tfidf_vectorizer = TfidfVectorizer(preprocessor=preprocess_arabic_text)

    def fit(self, texts, summaries):
        # Transform texts to TF-IDF vectors
        self.tfidf_matrix = self.tfidf_vectorizer.fit_transform(texts)
        self.summaries = summaries

    def predict(self, new_text):
        # Preprocess the new text
        preprocessed_new_text = preprocess_arabic_text(new_text)

        # Tokenize the preprocessed text into words
        words = word_tokenize(preprocessed_new_text)

        # Create a frequency table to keep track of word frequencies
        freq_table = {}
        for word in words:
            word = word.lower()
            if word in stop_words_arabic:
                continue
            if word in freq_table:
                freq_table[word] += 1
            else:
                freq_table[word] = 1

        # Tokenize the preprocessed text into sentences
        sentences = sent_tokenize(new_text)

        # Calculate the score for each sentence based on word frequency
        sentence_value = {}
        for sentence in sentences:
            for word, freq in freq_table.items():
                if word in sentence.lower():
                    if sentence in sentence_value:
                        sentence_value[sentence] += freq
                    else:
                        sentence_value[sentence] = freq

        # Calculate the average score of sentences
        sum_values = sum(sentence_value.values())
        average_score = sum_values / len(sentence_value) if len(sentence_value) > 0 else 0

        # Generate the summary based on sentences with scores higher than 1.2 times the average score
        summary = ''
        for sentence in sentences:
            if (sentence in sentence_value) and (sentence_value[sentence] > (1.2 * average_score)):
                summary += " " + sentence

        return summary.strip()

    def evaluate(self, texts, num_samples):
        # Generate summaries for a subset of texts in the dataset
        test_texts_subset = texts[:num_samples]
        generated_summaries = [self.predict(text) for text in test_texts_subset]

        # Ensure that the number of generated summaries matches the number of samples
        assert len(generated_summaries) == num_samples, "Number of generated summaries does not match the number of samples"

        # Encode the summaries into numerical representations using TF-IDF
        encoded_true_summaries = self.tfidf_vectorizer.transform([preprocess_arabic_text(summary) for summary in self.summaries[:num_samples]])
        encoded_generated_summaries = self.tfidf_vectorizer.transform([preprocess_arabic_text(summary) for summary in generated_summaries])

        # Convert sparse matrices to dense arrays
        encoded_true_summaries_dense = encoded_true_summaries.toarray()
        encoded_generated_summaries_dense = encoded_generated_summaries.toarray()

        # Calculate Mean Squared Error (MSE) between encoded true summaries and encoded generated summaries
        mse = mean_squared_error(encoded_true_summaries_dense, encoded_generated_summaries_dense)
        return mse

# Load dataset from external file
dataset_path = "summarymodel\wanlp.xlsx"
df = pd.read_excel(dataset_path)

# Extract texts and summaries from the dataframe
texts = df['text'].tolist()
summaries = df['summary'].tolist()

# Ensure that the number of test samples matches the number of samples needed for evaluation
num_test_samples = min(len(texts), 12)  # Adjust as needed
assert num_test_samples > 1, "Ensure that the number of test samples is greater than 1"

# Split dataset into training and testing sets
train_texts, test_texts, train_summaries, test_summaries = train_test_split(texts, summaries, test_size=num_test_samples, random_state=42)

# Create and train the summarizer model
summarizer = Summarizer()
summarizer.fit(train_texts, train_summaries)

# Evaluate the model
mse = summarizer.evaluate(test_texts, num_test_samples)
print(f"Mean Squared Error (MSE) on the test set: {mse}")

# Example usage with a new text
new_text = "في عالم مليء بالتحولات والتغيرات السريعة، يظل الاقتصاد محورًا حيويًا يؤثر على حياة الناس وتطور المجتمعات. تعتمد الاقتصادات الحديثة على مجموعة من العوامل المتشعبة، تلعب السياسات الحكومية والتطورات التكنولوجية والتغيرات الاجتماعية دورًا بارزًا في تشكيل مسار الاقتصاد. على سبيل المثال، يؤثر السياسات النقدية والمالية للحكومة على معدلات الفائدة ومعدلات التضخم، وتعمل التكنولوجيا على تحسين الإنتاجية وتغيير طبيعة العمل. تلعب القيم والثقافة دورًا حاسمًا في تحديد أنماط الاستهلاك والإنفاق وسلوك المستهلكين. لا يمكن إغفال دور التجارة الدولية في تعزيز الاقتصاد وتوسيع نطاق الفرص. في الختام، يظل الاقتصاد مجالًا ديناميكيًا يتطلب فهمًا عميقًا ورؤية استراتيجية لضمان النمو والاستدامة."
summary = summarizer.predict(new_text)
print(f"Summary for new text: {summary}")