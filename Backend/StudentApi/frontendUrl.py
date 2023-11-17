from django.urls import path,re_path
from django.views.generic import TemplateView
# from django.views.decorators.csrf import csrf_exempt
from .stReactViews import stReactView
urlpatterns = [
    path('',TemplateView.as_view(template_name = "index.html"))
]