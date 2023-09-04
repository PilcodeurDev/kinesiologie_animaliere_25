from .models import article
from rest_framework import serializers

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = article
        fields = ['id','title','body']
