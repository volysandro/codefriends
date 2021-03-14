from django.conf.urls import url
from .views import ChallengeView, ChallengeCreate

urlpatterns = [
    url('list', ChallengeView.as_view()),
    url('create', ChallengeCreate.as_view())
]