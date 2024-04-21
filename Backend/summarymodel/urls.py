from django.urls import path
from .views import summarizetext
urlpatterns = [
    path('summarize/', summarizetext, name='summarize_text'),
]