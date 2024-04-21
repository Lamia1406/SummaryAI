from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .model import Summarizer
import json
summarizer = Summarizer()
@csrf_exempt
def summarizetext(request):
    data = json.loads(request.body.decode('utf-8'))
    text = data.get("text")
    print(f"text is {text}")
    summary = summarizer.predict(text)
    print(summary)

    return JsonResponse({'summary':summary})