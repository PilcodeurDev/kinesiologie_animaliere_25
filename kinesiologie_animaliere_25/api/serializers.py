from django.contrib.auth.models import User
from rest_framework import serializers
from blog.models import Article
from .models import *


class UserSerializer(serializers.ModelSerializer):
    article = serializers.PrimaryKeyRelatedField(many=True, queryset=Article.objects.all())

    class Meta:
        model = User
        fields = ['id', 'prénom', 'article']

# class AnimalSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Animal
#         fields = ['id','nom_animal','photo_animal','Sexe','date_de_naissance','élément','type_animal','status_animal','sterilisé','suivi_par_professionnel','régime_alimentaire']

# class RendezVousSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = RendezVous
#         fields = ['id','date_rdv','heure_rdv','animal', 'client', 'status_rdv']
