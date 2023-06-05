from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('my_view_url/', views.my_view, name='my_view'),
]