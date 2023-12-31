# Generated by Django 4.2.7 on 2023-12-09 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentApi', '0003_alter_studentsmodel_bloodgroup_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentsmodel',
            name='academic_year',
            field=models.PositiveSmallIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='studentsmodel',
            name='course',
            field=models.PositiveSmallIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='studentsmodel',
            name='degree',
            field=models.PositiveSmallIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='studentsmodel',
            name='graduation',
            field=models.PositiveSmallIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='studentsmodel',
            name='pincode',
            field=models.CharField(max_length=20, null=True),
        ),
      
        migrations.AlterField(
            model_name='studentsmodel',
            name='dob',
            field=models.CharField(max_length=20),
        ),
    ]
