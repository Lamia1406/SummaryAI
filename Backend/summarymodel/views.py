from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import UserHistory
from .model import Summarizer
import json

summarizer = Summarizer()

@csrf_exempt
def summarizetext(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        text = data.get("text")
        print(f"text is {text}")
        
        summary = summarizer.predict(text)
        print(summary)
        
        user_history = UserHistory.objects.create(
            original_text=text,
            summarized_text=summary
        )
        
        return JsonResponse({'summary': summary})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
