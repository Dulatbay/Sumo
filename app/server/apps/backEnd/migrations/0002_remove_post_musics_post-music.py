# Generated by Django 4.1.2 on 2022-10-17 17:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backEnd', '0001_initial'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='post_musics',
            name='post-music',
        ),
    ]
