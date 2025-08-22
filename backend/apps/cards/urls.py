app_name = "cards"

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CardViewSet, CategoryViewSet

router = DefaultRouter()
router.register(r"cards", CardViewSet, basename="card")
router.register(r"categories", CategoryViewSet, basename="category")

urlpatterns = [
    path("", include(router.urls)),
]
