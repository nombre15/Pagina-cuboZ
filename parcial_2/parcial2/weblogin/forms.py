from django import forms
from .models import Usuario, Persona


class LoginForm(forms.Form):

    """ Formulario de login """
    usuario = forms.CharField(required=True,widget=forms.EmailInput())
    clave =forms.CharField(required=True,widget=forms.PasswordInput())
    
    class Meta:
        model = Usuario

class RegistroForm(forms.ModelForm):

    """ Formulario de registro """
    nombre = forms.CharField()
    apellido = forms.CharField()
    email = forms.CharField(widget=forms.EmailInput())

    #Si el email existe en la base de datos, no se valida el formulario 
    def clean_email(self):

        email = self.cleaned_data.get('email')

        if Persona.objects.filter(email=email).exists():
            raise forms.ValidationError("Esta dirección de correo ya existe, elige otra.")
        return email

    class Meta:
        model = Persona
        fields = ['nombre', 'apellido', 'f_nacimiento', 'email']
        widgets = {
            'f_nacimiento': forms.DateInput(attrs={'type': 'date'}), #Usar un input de tipo date para la fecha de nacimiento
        }
