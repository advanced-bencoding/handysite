from django.shortcuts import render
from . models import AppList

# Create your views here.
def home(request):
    apps = AppList.objects
    return render(request, 'home/home.html', {'apps': apps})