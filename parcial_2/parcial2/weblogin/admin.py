from django.contrib import admin
from .models import Persona,Usuario

""" Añadir persona y usuario al admin de django """
admin.site.register(Persona)
admin.site.register(Usuario)
