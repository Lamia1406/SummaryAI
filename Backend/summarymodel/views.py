from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .model import Summarizer
import json
import random
from playsound import playsound
import os
from gtts import gTTS
summarizer = Summarizer()


@csrf_exempt
def summarizetext(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        text = data.get("text")
        print(f"text is {text}")
        
        summary = summarizer.predict(text)
        if summary == "":
            summary = "النص المدخل غير مناسب للتلخيص"
        print(summary)
        
        return JsonResponse({'summary': summary})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
@csrf_exempt
def play_sound(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        text = data.get("text")
        # Generate summary from the provided text
        summary = summarizer.predict(text)
        print(summary)
        # Generate speech from the summary
        tts = gTTS(summary, lang='ar')
        file_name = f"{summary[2:6]}.mp3"
        # Save the synthesized speech to an MP3 file
        tts.save(file_name)
        # Play the synthesized speech
        playsound(file_name)
        return JsonResponse({"status": "success"})
    else:
        return JsonResponse({"status": "error", "message": "Only POST requests are allowed."})

