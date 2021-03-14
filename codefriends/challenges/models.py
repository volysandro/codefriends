from django.db import models

class Challenge(models.Model):
    title = models.CharField(max_length=50, default="", unique=False)
    identifier = models.CharField(max_length=20, default="", unique=True)
    description = models.CharField(max_length=200, default="", unique=False)
    created_at = models.DateTimeField(auto_now_add=True)