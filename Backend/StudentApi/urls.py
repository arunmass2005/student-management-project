from django.urls import path
from .views import ApiViews, login, loginCheck, generatePdfView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("", ApiViews.as_view()),
    path("<int:id>", ApiViews.as_view()),
    path("login/", login.as_view()),
    path("login/check/", loginCheck.as_view()),
    path("login/<str:userid>", login.as_view()),
    path("generatePdf/<int:id>", generatePdfView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
