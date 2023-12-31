from django.contrib import admin
from django.urls import path
from webinicio.views import inicio, custom404
from weblogin.views import login, registro
from webventa.views import lista, detalle_producto,productos_por_categoria
from webinicio.views import custom_logout
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', inicio, name='inicio'),
    path('login/', login, name='login'),
    path('registro/', registro, name='registro'),
    path('lista/', lista, name='lista'),
    path('producto/<int:producto_id>/', detalle_producto, name='detalle_producto'),
    path('custom_logout/', custom_logout, name='custom_logout'),
    path('producto/tipo_prod/<str:categoria>/', productos_por_categoria, name='productos_por_categoria'),
]

handler404 = custom404

#Para usar imagenes desde static con django
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

