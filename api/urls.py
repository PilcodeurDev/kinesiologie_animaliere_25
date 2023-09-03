# from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api.views import *


urlpatterns = [

    path('admin/', admin.site.urls),
    path('', ReactView.as_view(), name="react-view"),
]
