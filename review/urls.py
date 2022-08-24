from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path("candidate_list/",views.CandidateListView.as_view() ,name='candidate_list'),
    path('candidate/<int:pk>',views.CandidateView.as_view(),name='candidate'),
    path('add_candidate/',views.CandidateListView.as_view(),name='add_candidate'),
path('review_candidate/<int:pk>',views.ReviewCandidateView.as_view(),name='review_candidate')

]
