from django.db import models

class postgressetup(models.Model):
    name = models.CharField(max_length = 256)
    roll = models.IntegerField()