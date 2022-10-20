from django.urls import path, include
from ..views import *


urlpatterns = [
    path('register', Auth.register),
    path('login', Auth.login),
    path('check', Auth.check),
    path('logout', Auth.logout),
]