from django.urls import path, include
from ..views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('auth/', include('apps.backEnd.urls.auth_urls')),
    path('music', include('apps.backEnd.urls.music_urls')),
    path('post', include('apps.backEnd.urls.post_urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
