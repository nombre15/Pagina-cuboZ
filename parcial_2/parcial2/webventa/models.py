from django.db import models

class AuditoriaFecha(models.Model):

    f_creacion = models.DateTimeField(auto_now_add=True)
    f_actualizar = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True


class Productos(AuditoriaFecha):

    """ Modelo productos """
    nom_prod = models.CharField(max_length=255)
    tipo_prod = models.CharField(max_length=255)
    precio_prod = models.IntegerField()
    marca_prod = models.CharField(max_length=100)
    detalle_prod = models.CharField(max_length=1000)
    color_fondo_prod = models.CharField(max_length=50)
    imagen_prod = models.CharField(max_length=500, default='https://cubezz.com/images/202106/goods_img/6608_P_1622689298143.jpg') #Usar links como una forma para guardar imagenes dentro del modelo
    
    def __str__(self) :
         return "Producto : {} {} {} {} {} {}".format(self.id,self.nom_prod, self.tipo_prod, self.marca_prod, self.color_fondo_prod, self.precio_prod) #Datos para mostrar en la vista admin
