from django.conf.urls import url
from .views import LanguageView, LanguageCreate

urlpatterns = [
    url('list', LanguageView.as_view()),
    url('create', LanguageCreate.as_view())
]