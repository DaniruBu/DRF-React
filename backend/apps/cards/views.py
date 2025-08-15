from rest_framework import viewsets
from .models import Card, Category
from .serializers import CardSerializer, CategorySerializer, CreateCardSerializer, CreateCategorySerializer


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return CreateCardSerializer
        return super().get_serializer_class()

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return CreateCategorySerializer
        return super().get_serializer_class()