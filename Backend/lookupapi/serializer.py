from rest_framework import serializers
from .models import *



class genderSerializer(serializers.ModelSerializer):
    class Meta:
        model = gender
        fields = "__all__"

class bloodgroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = bloodgroup
        fields = "__all__"

class religionSerializer(serializers.ModelSerializer):
    class Meta:
        model = religion
        fields = "__all__"
class communitySerializer(serializers.ModelSerializer):
    class Meta:
        model = community
        fields = "__all__"
class casteSerializer(serializers.ModelSerializer):
    class Meta:
        model = caste
        fields = "__all__"
class countrySerializer(serializers.ModelSerializer):
    class Meta:
        model = country
        fields = "__all__"
class stateSerializer(serializers.ModelSerializer):
    class Meta:
        model = state
        fields = "__all__"
class districtSerializer(serializers.ModelSerializer):
    class Meta:
        model = district
        fields = "__all__"
        
class talukSerializer(serializers.ModelSerializer):
    class Meta:
        model = taluk
        fields = "__all__"
class location_typeSerializer(serializers.ModelSerializer):
    class Meta:
        model = location_type
        fields = "__all__"