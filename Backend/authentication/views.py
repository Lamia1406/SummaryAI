from django.http import JsonResponse
from django.shortcuts import redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required

#signup Method
def signup(request):
    form = UserCreationForm()
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return JsonResponse(
            {'message': 'Registered successfully'}
            )
        else:

            return JsonResponse({'message': 'Please correct the errors in the form.'})  

#login Method
def login(request):
    form = AuthenticationForm()
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return JsonResponse(
            {'message': 'Login successful'}
            )
        else:

            return JsonResponse({'message': 'Incorrect email or password.'})  


#history view

from django.http import JsonResponse
from .models import UserHistory
from django.contrib.auth.decorators import login_required

@login_required
def view_history(request):
    # Récupérer l'historique de l'utilisateur connecté
    user_history = UserHistory.objects.filter(user=request.user).order_by('-timestamp')

    # Créer une liste de dictionnaires pour stocker les données d'historique
    history_data = [{'action': entry.action, 'timestamp': entry.timestamp.strftime('%Y-%m-%d %H:%M:%S')} for entry in user_history]

    return JsonResponse({'history': history_data})
