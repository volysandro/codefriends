from django.db import models

class Language(models.Model):
    name = models.CharField(max_length=20, default="", unique=False)
    default_code = models.TextField(max_length=300, default="", unique=False)
    unique_name = models.CharField(max_length=200, default="", unique=True)