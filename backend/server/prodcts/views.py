
from django.shortcuts import render
from .models import Product
from .serializer import ProductSerializer
from rest_framework import viewsets

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
