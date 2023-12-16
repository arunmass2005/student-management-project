from django.urls import path
from .views import *

urlpatterns = [
    path("lookup/<str:value>", lookupapiView.as_view()),
    path("lookup/<str:value>/<int:Id>", lookupapiView.as_view()),
    path("lookup/<str:value>/filt/<int:id>", lookupapiView.as_view()),
]
