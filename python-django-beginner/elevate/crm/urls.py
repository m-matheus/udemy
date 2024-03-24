from django.urls import path

# . -> porque o views esta no mesmo diretorio
from . import views

urlpatterns = [
    path('', views.homepage, name=""),

    path('task', views.task, name="task"),

    path('register', views.register, name="register"),

    path('task-form', views.task_form, name="task-form"),
]
