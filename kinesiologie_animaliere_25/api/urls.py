
from .views import UserList, UserDetail
from django.urls import path, include

urlpatterns = [
    path('users/', UserList.as_view(), name="user-list"),
    path('users/<int:pk>/', UserDetail.as_view(), name="user-detail"),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
