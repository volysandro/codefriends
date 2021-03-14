from django.shortcuts import render
from rest_framework import generics

from .models import Challenge
from .serializers import ChallengeSerializer

class ChallengeView(generics.ListAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer

class ChallengeCreate(generics.CreateAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer