from rest_framework import viewsets, permissions
from .models import Card, Category
from .serializers import CardSerializer, CategorySerializer, CreateCardSerializer, CreateCategorySerializer
from .permissions import IsOwnerOrReadOnly, IsOwner, IsOwnerForList


class CardViewSet(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self):
        """Возвращает только карточки текущего пользователя"""
        return Card.objects.filter(created_by=self.request.user)

    def perform_create(self, serializer):
        """Автоматически устанавливает created_by при создании"""
        serializer.save(created_by=self.request.user)

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return CreateCardSerializer
        return super().get_serializer_class()

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_permissions(self):
        """Разные пермишены для разных действий"""
        if self.action in ['list', 'retrieve']:
            # Чтение доступно всем
            permission_classes = [permissions.AllowAny]
        else:
            # Создание, редактирование, удаление только авторизованным
            permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        """Автоматически устанавливает created_by при создании"""
        serializer.save(created_by=self.request.user)

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return CreateCategorySerializer
        return super().get_serializer_class()