# Generated by Django 4.2.4 on 2023-10-13 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lookupapi', '0004_alter_community_value'),
    ]

    operations = [
        migrations.CreateModel(
            name='caste',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.CharField(max_length=1000)),
                ('communityId', models.SmallIntegerField()),
            ],
        ),
    ]