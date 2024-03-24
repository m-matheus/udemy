from django.shortcuts import render
from django.http import HttpResponse

from .models import Task
from .forms import TaskForm


def homepage(request):

    return render(request, 'crm/index.html') 


def task(request):

    queryDataAll = Task.objects.all()
    #           identificador: conteudo
    #context = {'allTasks': queryDataAll}

    queryDataSingle = Task.objects.get(id=3)
    context = {'singleTask': queryDataSingle}

    return render(request, 'crm/task.html', context)


def register(request):

    return render(request, 'crm/register.html')


def task_form(request):

    form = TaskForm()

    context = {'TaskForm': form}

    return render(request, 'crm/task-form.html', context)