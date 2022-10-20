from django.urls import path, include
from ..views import *


urlpatterns = [
    path('', MusicView.as_view()),
    path('/all', get_all_musics),
    path('/<int:id>', MusicView.as_view()),
    path('/search', get_music_by_name),
    path('/author/<int:id>', get_music_by_author_id),
]
