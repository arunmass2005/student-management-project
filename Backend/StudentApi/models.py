from typing import Any
from django.db import models
from datetime import datetime
# Create your models here.
# custom date 
class DateMonthYearField(models.DateField):
    def to_python(self,value):
        if value:
            return datetime.strptime(value,'%D-%M-%Y').date()
        return None
    def get_prep_value(self,value):
        if value:
            return value.strftime('%D-%M-%Y')
        return ''

class StudentsModel(models.Model):
    profile = models.ImageField(upload_to="students",null=True)
    name = models.CharField(max_length=100)
    dob = models.CharField(max_length=20)
    gender = models.PositiveSmallIntegerField()
    bloodgroup = models.PositiveSmallIntegerField()
    nationality = models.CharField(max_length = 10,null=True)
    religion = models.PositiveSmallIntegerField()
    community = models.PositiveSmallIntegerField()
    caste = models.PositiveIntegerField()
    aadhar = models.CharField(max_length=12, unique=True)
    firstgraduate = models.CharField(max_length=10)
    mobile = models.CharField(max_length=15,unique = True)
    emailid = models.EmailField(unique=True)
    country = models.PositiveSmallIntegerField()
    state = models.PositiveSmallIntegerField()
    district = models.PositiveSmallIntegerField()
    location_type = models.CharField(max_length=5)
    taluk = models.PositiveSmallIntegerField()
    place = models.CharField(max_length=50)
    pincode = models.CharField(max_length = 20,null = True)
    address = models.TextField()
    fathersname = models.CharField(max_length=100)
    fathersoccupation = models.CharField(max_length=100)
    mothersname = models.CharField(max_length=100)
    mothersoccupation = models.CharField(max_length=100)
    annual_income = models.CharField(max_length=50)
    parents_mobile_number = models.CharField(max_length=15)
    account_number = models.CharField(max_length=50,null=True)
    ifsc = models.CharField(max_length=50,null=True)

    def __str__(self):
        return self.name
class StudentLoginModel(StudentsModel):
    userid = models.CharField(max_length=20,unique=True)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.userid
