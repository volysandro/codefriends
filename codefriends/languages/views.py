from django.shortcuts import render
from rest_framework import generics

from .models import Language
from .serializers import LanguageSerialier


class LanguageView(generics.ListAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerialier


class LanguageCreate(generics.CreateAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerialier
