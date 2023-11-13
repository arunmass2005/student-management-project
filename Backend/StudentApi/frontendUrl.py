from django.urls import path
from .stReactViews import stReactView
urlpatterns = [
    path("",stReactView)
]