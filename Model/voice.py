import re
import numpy as np
import pandas as pd
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
from gtts import gTTS
import os

# Download NLTK stopwords dataset and Punkt tokenizer
nltk.download('stopwords')
nltk.download('punkt')

# Import Arabic stopwords
stop_words_arabic = set(nltk.corpus.stopwords.words('arabic'))

# Preprocessing function for Arabic text
def preprocess_arabic_text(text):
    # Remove mentions (@user)
    cleaned_text = re.sub(r'@\w+', '', text)
    # Remove special characters including ?, !
    cleaned_text = re.sub(r'[^\w\s\u0600-\u06FF]', '', cleaned_text)
    # Clean up extra spaces
    cleaned_text = re.sub(r'\s+', ' ', cleaned_text).strip()

    # Tokenize text
    words = nltk.word_tokenize(cleaned_text)

    # Filter out stop words and return the preprocessed text
    filtered_words = [word for word in words if word not in stop_words_arabic]
    return ' '.join(filtered_words)

# Custom machine learning model for generating summaries
class Summarizer:
    def __init__(self):
        self.tfidf_vectorizer = TfidfVectorizer(preprocessor=preprocess_arabic_text)

    def fit(self, texts, summaries):
        self.tfidf_matrix = self.tfidf_vectorizer.fit_transform(texts)
        self.summaries = summaries

    def predict(self, new_text):
        # Preprocess the new text
        preprocessed_new_text = preprocess_arabic_text(new_text)

        # Calculate TF-IDF weights for words in the new text
        new_text_tfidf = self.tfidf_vectorizer.transform([preprocessed_new_text])

        # Calculate the TF-IDF scores for each sentence
        sentences = nltk.sent_tokenize(new_text)
        sentence_scores = {}
        for i, sentence in enumerate(sentences):
            words_in_sentence = nltk.word_tokenize(sentence)
            sentence_tfidf_sum = 0
            for word in words_in_sentence:
                if word.lower() not in stop_words_arabic:
                    word_tfidf = new_text_tfidf[0, self.tfidf_vectorizer.vocabulary_.get(word, -1)]
                    if word_tfidf > 0:
                        sentence_tfidf_sum += word_tfidf
            sentence_scores[i] = sentence_tfidf_sum / len(words_in_sentence) if len(words_in_sentence) > 0 else 0  # Normalize by sentence length

        # Sort sentences by their scores
        sorted_sentences = sorted(sentence_scores.items(), key=lambda x: x[1], reverse=True)

        # Generate the summary based on top scoring sentences
        summary_length = min(len(sentences) // 3, 3)  # Adjust summary length as needed
        top_sentences = sorted_sentences[:summary_length]
        summary_sentences = [sentences[idx] for idx, _ in top_sentences]
        summary = ' '.join(summary_sentences)

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
dataset_path = "C:\\Users\\W11\\Downloads\\articles_with_summaries.xlsx"
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
text = """
الاقتصاد هو العلم الذي يدرس كيفية إدارة الموارد المتاحة بشكل فعال لتحقيق الأهداف الاقتصادية، وهو يشمل دراسة الإنتاج والتوزيع والاستهلاك للسلع والخدمات. يعتبر الاقتصاد من أهم العلوم الاجتماعية التي تؤثر بشكل كبير على حياة الناس وتنمية البلدان. تتفاوت أساليب ونظريات الاقتصاد بين البلدان والمدارس الاقتصادية، وتتأثر بالظروف الاقتصادية والسياسية والاجتماعية لكل مجتمع.
تتنوع الأنشطة الاقتصادية بين الدول وتتأثر بالعوامل الجغرافية والاجتماعية والثقافية لكل منطقة. تشمل هذه الأنشطة الصناعية والزراعية والخدماتية، وتتفاوت أهميتها ومساهمتها في الناتج المحلي الإجمالي بين البلدان. يسعى العديد من الدول إلى تحقيق النمو الاقتصادي وتعزيز التنمية المستدامة من خلال تنفيذ سياسات وبرامج اقتصادية تهدف إلى تحفيز الاستثمار وتعزيز الإنتاجية وتحسين البنية التحتية وتعزيز الابتكار وتحسين مستوى العيش للمواطنين.
على الصعيد الدولي، تترابط اقتصادات البلدان بشكل متزايد من خلال العلاقات التجارية والاستثمارية والمالية. تشكل العولمة تحديات وفرصًا للاقتصادات الوطنية، حيث يمكن للدول الناشئة الاستفادة من فرص التجارة والاستثمار العالمية لتعزيز نموها الاقتصادي، في حين تحتاج الدول الصاعدة إلى مواجهة التحديات المتمثلة في المنافسة العالمية والتباطؤ الاقتصادي والتغيرات التكنولوجية.
"""

summary = summarizer.predict(text)
print(f"Summary for new text: {summary}")

# Create a text-to-speech object with the summary
tts = gTTS(summary, lang='ar')

# Save the speech as a temporary file
tts.save("summary.mp3")

# Play the speech
os.system("start summary.mp3")