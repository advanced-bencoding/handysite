# Generated by Django 4.0.2 on 2022-04-03 05:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applist',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
