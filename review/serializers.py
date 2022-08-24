from dataclasses import field
from rest_framework import serializers
from .models import Candidate



class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ['id','first_name','last_name','email','academic_details','profesional_exp','phone_no','status']
