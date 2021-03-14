from django.conf.urls import url, include

urlpatterns = [
    url('challenges', include('challenges.urls'))
]