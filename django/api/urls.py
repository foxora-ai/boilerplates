from django.urls import path
from api import views

urlpatterns = [
    path("hello/", views.hello),
    path("hello/name/", views.hello_name),
]
