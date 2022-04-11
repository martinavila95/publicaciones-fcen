from pipes import Template
from django.http import HttpResponse
from django.template import Template, Context
from django.template.loader import get_template
from django.shortcuts import render

def index(request):
    return render(request, "publicaciones.html");