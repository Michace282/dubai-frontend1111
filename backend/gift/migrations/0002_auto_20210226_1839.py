# Generated by Django 2.0.3 on 2021-02-26 15:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gift', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='gift',
            options={'ordering': ['-created_at'], 'verbose_name': 'Gift', 'verbose_name_plural': 'Gifts'},
        ),
    ]
