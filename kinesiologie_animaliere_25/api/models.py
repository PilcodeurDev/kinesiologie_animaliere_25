from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class User(models.Model):
    prénom = models.CharField(max_length=200)
    nom = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    téléphone = PhoneNumberField(region="FR", blank=True)
    adresse = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)

    class Meta:
        verbose_name = "Utilisateur"
        ordering = ['nom']

    def __str__(self):
        return f"{self.nom}, {self.prénom}"

# class Animal(models.Model):
#     nom_animal = models.CharField(max_length=200)
#     photo_animal = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=False)
#     Sexe = models.CharField(max_length=200)
#     date_de_naissance = models.DateField()
#     élément = models.CharField(max_length=200)
#     type_animal = models.CharField(max_length=200, blank = False)
#     status_animal = models.CharField(max_length=200, blank = False)
#     sterilisé = models.BooleanField()
#     suivi_par_professionnel = models.BooleanField()
#     régime_alimentaire = models.CharField(max_length=200)
#     compléments_aliménetaires = models.CharField(max_length=200)
#     traitements_médicaux = models.CharField(max_length=200)
#     antécédents_médicaux = models.CharField(max_length=200)
#     résumé = models.TextField()
#     propriétaire = models.ForeignKey(User, on_delete=models.CASCADE)

#     class Meta:
#         verbose_name = "Animal"
#         ordering = ['nom_animal']

#     def __str__(self):
#         return f"{self.nom_animal}, {self.propriétaire}"

# class RendezVous(models.Model):
#     date = models.DateTimeField()
#     réservé_le = models.DateTimeField(auto_now_add=True)
#     prix_séance = models.IntegerField()
#     séance_payée = models.BooleanField()
#     séance_payée_le = models.DateTimeField(auto_now=True)
#     client = models.ForeignKey(User, on_delete=models.CASCADE)
#     animal = models.ForeignKey(Animal, on_delete=models.CASCADE)

#     class Meta:
#         verbose_name = "Rendez-vous"
#         ordering = ['date']

#     def __str__(self):
#         return f"{self.date}, {self.animal}, {self.client}"
