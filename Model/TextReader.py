# for text file
def read_text_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            text = file.read()
        return text
    except FileNotFoundError:
        print(f"File '{file_path}' not found.")
        return None
    except Exception as e:
        print(f"An error occurred while reading the file: {e}")
        return None

# Example usage:
file_path = 'C:/Users/PC/Downloads/Telegram Desktop/textreadertest.txt'  # Replace 'example.txt' with the path to your text file
text_content = read_text_file(file_path)
if text_content:
    print(text_content)

