from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password','first_name','last_name','is_staff','is_active','is_superuser','date_joined','last_login']

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id','titre','contenu','auteur','date_creation','date_update','image']

class CommentaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commentaire
        fields = ['id','auteur','contenu','date_creation','date_update','post']

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = ['id','nom_animal','photo_animal','Sexe','date_de_naissance','élément','type_animal','status_animal','sterilisé','suivi_par_professionnel','régime_alimentaire']

class RendezVousSerializer(serializers.ModelSerializer):
    class Meta:
        model = RendezVous
        fields = ['id','date_rdv','heure_rdv','animal', 'client', 'status_rdv']


