# Generated by Django 4.2.4 on 2023-10-13 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lookupapi', '0006_country_state'),
    ]

    operations = [
        migrations.AlterField(
            model_name='country',
            name='value',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='state',
            name='value',
            field=models.CharField(max_length=50),
        ),
    ]