from django.db import models
from api.models import User


# Create your models here.
class Article(models.Model):
    titre = models.CharField(max_length=200)
    contenu = models.TextField()
    auteur = models.ForeignKey(User, on_delete=models.CASCADE)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_update = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)

    class Meta:
        verbose_name = "Article"
        ordering = ['titre']

    def __str__(self):
        return f"{self.titre}, {self.auteur}"

# class Commentaire(models.Model):
#     auteur = models.ForeignKey(User, on_delete=models.CASCADE)
#     contenu = models.TextField()
#     date_creation = models.DateTimeField(auto_now_add=True)
#     date_update = models.DateTimeField(auto_now=True)
#     post = models.ForeignKey(Article, on_delete=models.CASCADE)

#     class Meta:
#         verbose_name = "Commentaire"
#         ordering = ['date_creation']

#     def __str__(self):
#         return f"{self.auteur}, {self.post}"
