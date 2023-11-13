from django.urls import path
from .views import *


urlpatterns=[
    path("get/<str:field>/<str:emailId>",studentAfterOtp.as_view()),
    path("put/<str:field>/<str:emailId>",studentAfterOtp.as_view())
]