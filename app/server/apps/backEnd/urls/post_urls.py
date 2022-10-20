from django.urls import path, include
from ..views import *

urlpatterns = [
    path('', PostView.as_view()),
    path('/all', get_all_posts),
    path('/<int:id>', PostView.as_view()),
    path('/details', PostDetailsView.as_view()),
    path('/details/all', get_all_posts_detail),
    path('/details/<int:id>', PostDetailsView.as_view())
]
