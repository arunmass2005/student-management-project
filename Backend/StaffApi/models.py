from django.db import models

# Create your models here.
class StaffModel(models.Model):
    name = models.CharField(max_length = 50)
    