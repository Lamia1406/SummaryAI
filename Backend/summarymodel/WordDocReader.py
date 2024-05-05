# for word document
import docx

def read_word_document(docx_path):
    try:
        doc = docx.Document(docx_path)
        text = ""
        for paragraph in doc.paragraphs:
            text += paragraph.text + "\n"
        return text
    except FileNotFoundError:
        print(f"File '{docx_path}' not found.")
        return None
    except Exception as e:
        print(f"An error occurred while reading the document: {e}")
        return None

# Example usage:
docx_path = 'C:/Users/PC/Downloads/Telegram Desktop/خلايا الدم الحمراء.docx'  # Replace 'example.docx' with the path to your Word document
docx_text_content = read_word_document(docx_path)
if docx_text_content:
    print(docx_text_content)
