from django.db import models
# Create your models here.
# custom date 

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
    graduation = models.PositiveSmallIntegerField(null=True)
    degree = models.PositiveSmallIntegerField(null=True)
    course = models.PositiveSmallIntegerField(null=True)
    academic_year = models.CharField(max_length=20, unique=True,null=True)
    rollno = models.CharField(max_length=20, unique=True,null=True)
    joined = models.CharField(max_length=20, null=True)
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
    pincode = models.CharField(max_length = 20,null=True)
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
