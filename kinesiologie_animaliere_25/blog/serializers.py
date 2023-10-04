from rest_framework import serializers
from .models import *

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['titre', 'contenu', 'auteur', 'date_creation', 'date_update', 'image']


# class CommentaireSerializer(serializers.ModelSerializer):


#     class Meta:
#         model = Commentaire
#         fields = ['id','auteur','contenu','date_creation','date_update']
