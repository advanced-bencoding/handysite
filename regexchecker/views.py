from urllib import request
from django.shortcuts import render

# Create your views here.
def regex(request):
    return render(request, 'regexchecker/regex.html')