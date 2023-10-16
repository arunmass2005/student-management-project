from django.db import models


# Create your models here.
class gender(models.Model):
    value = models.CharField(max_length=20)

    def __str__(self):
        return self.value


class bloodgroup(models.Model):
    value = models.CharField(max_length=4)

    def __str__(self):
        return self.value


class religion(models.Model):
    value = models.CharField(max_length=30)

    def __str__(self):
        return self.value


class community(models.Model):
    value = models.CharField(max_length=30)

    def __str__(self):
        return self.value


class caste(models.Model):
    value = models.CharField(max_length=1000)
    communityId = models.SmallIntegerField()

    def __str__(self):
        return self.value


class country(models.Model):
    value = models.CharField(max_length=50)

    def __str__(self):
        return self.value


class state(models.Model):
    value = models.CharField(max_length=50)

    def __str__(self):
        return self.value
class district(models.Model):
    value = models.CharField(max_length=50)

    def __str__(self):
        return self.value

class taluk(models.Model):
    value = models.CharField(max_length=50)
    districtId = models.PositiveSmallIntegerField()
    def __str__(self):
        return self.value