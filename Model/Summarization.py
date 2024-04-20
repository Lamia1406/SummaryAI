from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize
import nltk
import re

nltk.download('stopwords')
nltk.download('punkt')

# Enter the text
text = """تردد ياسين في صغره على المدرسة القرآنية بمسجد مدينة قسنطينة، لكنه بعد فترة وجيزة التحق بالمدرسة الفرنسية 
بولاية سطيف وفيها تابع تعليمه حتى 8 مايو/أيار 1945، اليوم الذي ارتكب فيه المستعمر الفرنسي مجازر مروعة بحق الشعب 
الجزائري راح ضحيتها -بحسب بعض الرواياتـ أكثر من 45 ألف شهيد. وبسبب مشاركته في هذه المظاهرات تم القبض عليه بعد خمسة 
أيام من انطلاقها وتم سجنه، وهي الحادثة التي تسببت في إصابة والده باضطراب نفسي لاعتقاده أن 
ابنه لقي حتفه في المظاهرات. 
ومن وراء القضبان وبعد عام أصدر ديوانه الشعري الأول بعنوان "مناجاة" ليسخر قلمه بعد ذلك لخدمة لبلاده ومناهضة الاستعمار الفرنسي.
هاجر إلى فرنسا سنة 1947، وفي باريس التي استقر بها تعرف على مجموعة من المناضلين والمثقفين الجزائريين، وكان يشاركهم في 
تنشيط حلقات فكرية وأدبية، لكنه قرر العودة إلى الجزائر عام 1970، ليستقر بمدينة سيدي بلعباس في الغرب الجزائري. """
stopWords = set(stopwords.words("arabic"))
print(stopWords)

# Remove HTML tags
text = re.sub(r'<[^>]+>', '', text)

# Remove URLs
text = re.sub(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', '', text)

# Remove @mentions
text = re.sub(r'@\w+', '', text)
print(text)

# Tokenization
words = word_tokenize(text)
print(words)

freqTable = dict()
# Creating a frequency table to keep the score of each word it's basically how many times a word has been repeated
freqTable = dict()
for word in words:
    word = word.lower()
    if word in stopWords:
        continue
    if word in freqTable:
        freqTable[word] += 1
    else:
        freqTable[word] = 1

print(freqTable)

# Creating a dictionary to keep the score of each sentence here basically we check how heavy the sentence is based on frequency of repeated words
sentences = sent_tokenize(text)
print(sentences)


def getsenteceValue():
    sentenceValue = dict()
    for sentence in sentences:
        for word, freq in freqTable.items():
            if word in sentence.lower():
                if sentence in sentenceValue:
                    sentenceValue[sentence] += freq
                else:
                    sentenceValue[sentence] = freq
    return sentenceValue
    print(sentenceValue)


sentenceValue = getsenteceValue()
print(sentenceValue)


def getsumValues():
    sumValues = 0
    for sentence in sentenceValue:
        sumValues += sentenceValue[sentence]

    # Average value of a sentence from the Input text
    average = int(sumValues / len(sentenceValue))
    return average


average = getsumValues()
print(average)

# Storing sentences into our summary based on the sentence score where score is somewhat greater than the average score
summary = ''
for sentence in sentences:
    if (sentence in sentenceValue) and (sentenceValue[sentence] > (1.2 * average)):
        summary += " " + sentence
print(summary)

