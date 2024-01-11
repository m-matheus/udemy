from django.urls import path

# . -> porque o views esta no mesmo diretorio
from . import views

urlpatterns = [
    path('', views.homepage),

    path('register', views.register),
]
