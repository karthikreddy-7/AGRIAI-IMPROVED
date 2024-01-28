from django.contrib import admin

from django.urls import path
from .views import hello, upload_image
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", hello, name="hello"),
    path("upload/", upload_image, name="upload_image"),
    # Add other URL patterns as needed
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
