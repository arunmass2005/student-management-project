from rest_framework import serializers
from .models import StudentsModel,StudentLoginModel

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentsModel
        fields = '__all__'

class StudentLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentLoginModel
        fields = '__all__'