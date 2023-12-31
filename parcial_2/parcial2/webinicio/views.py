from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth import logout

#Vista de inicio
def inicio(request):

   return render(request,'index.html')

#Custom logout para no usar el de django, redirecciona a inicio luego de cerrar sesion
def custom_logout(request):

    logout(request)
    return redirect('inicio')

#Vista de error 404 personalizada cuando el usuario ingresa una url incorrectamente
def custom404(request, exception):
    return render(request, '404.html', status=404)
