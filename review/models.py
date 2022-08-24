from asyncio import FastChildWatcher
from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.

class Candidate(models.Model):
    status_choice = [('applied','applied'),('accepted','accepted'),('rejected','rejected')]
    #personal_details = models.TextField()
    first_name = models.CharField(max_length = 30 , blank=True)
    last_name = models.CharField(max_length = 30 , blank=True)
    email = models.EmailField(blank=True)
    academic_details = models.TextField()
    profesional_exp = models.TextField()
    phone_no =models.CharField(max_length = 10)
    #resume = models.FileField()
    status = models.CharField(choices=status_choice, default='applied',max_length=10)
  
