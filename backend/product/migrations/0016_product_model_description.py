# Generated by Django 2.0.3 on 2021-02-07 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0015_auto_20210206_1351'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='model_description',
            field=models.TextField(blank=True, null=True, verbose_name='Model description'),
        ),
    ]
