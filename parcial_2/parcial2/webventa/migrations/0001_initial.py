# Generated by Django 4.2.6 on 2023-11-03 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('f_creacion', models.DateTimeField(auto_now_add=True)),
                ('f_actualizar', models.DateTimeField(auto_now=True)),
                ('nom_prod', models.CharField(max_length=255)),
                ('tipo_prod', models.CharField(max_length=255)),
                ('precio_prod', models.IntegerField()),
                ('marca_prod', models.CharField(max_length=100)),
                ('detalle_prod', models.CharField(max_length=1000)),
                ('color_fondo_prod', models.CharField(max_length=50)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
