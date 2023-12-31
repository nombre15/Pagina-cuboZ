from django.db import models

class AuditoriaFecha(models.Model):

    """Clase para guardar la fecha de creacion y de actualizacion"""
    f_creacion = models.DateTimeField(auto_now_add=True)
    f_actualizar = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True

class Usuario(AuditoriaFecha):

    """Clase usuario que hereda de AuditoriaFecha"""
    usuario = models.CharField(max_length=255)
    clave = models.CharField(max_length=255)
    
    def __str__(self) :
        return "Usuario : {} {}".format(self.usuario, self.clave) #Datos a mostrar en la vista de admin

class Persona(AuditoriaFecha):

    """Clase persona que hereda de AuditoriaFecha"""
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    f_nacimiento=models.DateField()
    usuario = models.ForeignKey(Usuario,on_delete=models.SET_NULL,null=True) #Usuario es clave foranea del modelo usuario
    
    def __str__(self) :
        return "Persona : {} {} {} {}".format(self.id, self.nombre, self.apellido, self.usuario) #Datos a mostrar en la vista de admin
