from django.urls import path
from auth import views

urlpatterns = [
    # ...
    path('api/login/', views.login, name='login'),
    # ...
]
