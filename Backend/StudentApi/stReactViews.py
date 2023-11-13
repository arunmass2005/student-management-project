from django.shortcuts import render
from django.conf import settings
def stReactView(request):
    return render(request,"index.html")