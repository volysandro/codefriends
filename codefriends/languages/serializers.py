from rest_framework import serializers
from .models import Language

class LanguageSerialier(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('id', 'name', 'default_code', 'unique_name')
