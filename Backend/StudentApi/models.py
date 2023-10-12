from django.db import models

# Create your models here.


class StudentsModel(models.Model):
    profile = models.ImageField(upload_to="students", default="frontend/src/assets/preview-profile.png")
    name = models.CharField(max_length=100)
    dob = models.DateField()
    gender = models.CharField(max_length=10)
    bloodgroup = models.CharField(max_length=5)
    nationality = models.CharField(max_length = 10,null=True)
    religion = models.CharField(max_length=30)
    community = models.CharField(max_length=50)
    caste = models.CharField(max_length=70)
    aadhar = models.CharField(max_length=12, unique=True)
    firstgraduate = models.CharField(max_length=10)
    mobile = models.CharField(max_length=15,unique = True)
    emailid = models.EmailField()
    country = models.CharField(max_length=20)
    state = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    location_type = models.CharField(max_length=5)
    taluk = models.CharField(max_length=50)
    place = models.CharField(max_length=50)
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
