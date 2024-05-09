from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from rest_framework import routers
from prodcts.views import ProductView

router = routers.DefaultRouter()
router.register('products', ProductView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
