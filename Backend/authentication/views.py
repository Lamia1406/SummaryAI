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
