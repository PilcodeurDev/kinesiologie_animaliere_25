from django.urls import path
from .views import *

urlpatterns = [
    path('', ArticleList.as_view(), name ="posts"),
    path('<int:pk>/', ArticleDetail.as_view(), name ="post-detail"),
]
