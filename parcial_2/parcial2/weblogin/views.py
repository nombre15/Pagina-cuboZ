from django.shortcuts import render, redirect
from .forms import LoginForm,RegistroForm
from .models import Usuario
from django.contrib.auth import authenticate, login

def login(request):
    
    """Vista de login"""

    mensaje={'txt_login':"Ingrese Usuario",'estado':"",'user_authenticated': False}
    usuariodb=None
    if request.method == 'POST':
        
        form = LoginForm(data=request.POST)
        usuario = request.POST.get('usuario','') # Extraer usuario del formulario
        usuariodb = Usuario.objects.filter(usuario=usuario) # Validar si el usuario existe en la base de datos

        if len(usuariodb)>0:

            clave = request.POST.get('clave','') # Extraer contraseña del formulario
            clavedb = usuariodb.filter(clave=clave) # Validar si la clave pertenece a algun usuario dentro de la base de datos

            if len(clavedb)>0:

                # Enviar a lista de productos si el usuario es valido
                mensaje["estado"]= "valido"
                mensaje["user_authenticated"] = True
                request.session['user_authenticated'] = True
                return redirect('lista')
            
            else: 

                mensaje["estado"]= "Usuario o contraseña no validos"
        else:

            # Si se ingresa un usuario que no esta en la database no se valida
            mensaje["estado"]= "Usuario o contraseña no validos"

        mensaje['form_login']=form

        return render(request,'login.html',mensaje)
    else:

        form = LoginForm(data=request.GET)
        mensaje['form_login']=form
        return render(request,'login.html',mensaje)

def registro(request):

    """Vista de registro"""

    mensaje = {'txt_login': "Ingrese Usuario", 'estado': ""}

    if request.method == 'POST':

        persona_form = RegistroForm(request.POST)

        if persona_form.is_valid():

            # Extraer email y contraseña del formulario
            email = persona_form.cleaned_data['email']
            password = request.POST.get('password')  

            # Crear objeto usuario con el email y la contraseña ingresados
            usuario = Usuario(usuario=email, clave=password)
            usuario.save()

            # Crear un objeto persona y asociarlo con persona
            persona = persona_form.save(commit=False)
            persona.usuario = usuario
            persona.save()

            mensaje['estado'] = "Registro exitoso."
            return redirect('login')
        else:
            mensaje['estado'] = "No se pudo registrar el usuario."
            
            # Si se ingresa un correo en uso, no validar el formulario
            if 'email' in persona_form.errors:
                mensaje['estado'] = "Este correo ya está en uso, porfavor elige otro."
            mensaje['form_registration'] = persona_form

    else:
        persona_form = RegistroForm()

    mensaje['form_registration'] = persona_form
    return render(request, 'registro.html', mensaje)
