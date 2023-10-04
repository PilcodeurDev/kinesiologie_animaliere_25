from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ArticleSerializer
from .models import article

# Create your views here.
class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = article.objects.all()
