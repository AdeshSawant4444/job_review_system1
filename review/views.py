
from django.shortcuts import render
from rest_framework import generics
from .serializers import CandidateSerializer
from .models import Candidate
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
#from rest_framework.viewsets import
# Create your views here.


class CandidateListView(generics.ListCreateAPIView):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
    permission_classes = [AllowAny]
    
    
    
    
class CandidateView(generics.RetrieveUpdateAPIView):
    queryset = Candidate.objects.all()
    serializer_class =  CandidateSerializer
    permission_classes = [AllowAny]


class ReviewCandidateView(generics.RetrieveUpdateAPIView):
    queryset = Candidate.objects.all()
    serializer_class =  CandidateSerializer
    permission_classes = [AllowAny]
