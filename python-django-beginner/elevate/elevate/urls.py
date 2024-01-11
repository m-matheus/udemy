from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    
    #para linkar os urls criados no app crm com o elevate urls
    path('', include('crm.urls')),
]
