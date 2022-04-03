from django.shortcuts import render

# Create your views here.
def passgen(request):
    return render(request, 'passgen/passgen.html')