from django.shortcuts import render
from rest_framework import viewsets
from .serializers import VendorsSerializer
from .models import Vendors



class VendorsViewSet(viewsets.ModelViewSet):
    serializer_class = VendorsSerializer
    queryset = Vendors.objects.all()


