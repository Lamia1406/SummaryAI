from django.urls import path
from .views import summarizetext, play_sound
urlpatterns = [
    path('summarize/', summarizetext, name='summarize_text'),
    path('playsound/', play_sound, name='playsound'),
]