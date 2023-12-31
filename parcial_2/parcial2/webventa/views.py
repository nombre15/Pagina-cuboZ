from django.shortcuts import render
from .models import Productos

def lista(request):

    """ Vista de productos """
    n_productos = Productos.objects.count() # Sacar el numero de productos en una variable
    lista_prod = Productos.objects.all() # Sacar la lista de productos en una variable

    return render(request,'lista.html',{'n_prod':n_productos,'lista_p':lista_prod})

def detalle_producto(request, producto_id):
    
    """ Vista del detalle del producto segun la id del mismo """
    producto = Productos.objects.get(id=producto_id) #Conseguir la id del producto
    
    return render(request, 'detalle_prod.html', {'prod': producto})

def productos_por_categoria(request, categoria):

    """ Vista de los productos por la categoria seleccionada """
    productos_en_categoria = Productos.objects.filter(tipo_prod=categoria)

    #Si no existe ningun producto en la categoria seleccionada, renderizar el html de no productos
    if not productos_en_categoria.exists():
        return render(request, 'no_products.html', {'categoria': categoria})
    
    # Si hay productos en la categoria seleccionada, renderizar el html con productos
    return render(request, 'productos_por_categoria.html', {'productos': productos_en_categoria, 'categoria': categoria})