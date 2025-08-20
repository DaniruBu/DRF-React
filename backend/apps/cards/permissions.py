from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Разрешает доступ только владельцу объекта.
    """
    def has_object_permission(self, request, view, obj):
        # Разрешаем чтение для всех
        if request.method in permissions.SAFE_METHODS:
            return True
        
        # Разрешаем запись только владельцу
        return obj.created_by == request.user

class IsOwner(permissions.BasePermission):
    """
    Разрешает доступ только владельцу объекта (включая чтение).
    """
    def has_object_permission(self, request, view, obj):
        return obj.created_by == request.user

class IsOwnerForList(permissions.BasePermission):
    """
    Разрешает доступ к списку только для аутентифицированных пользователей.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated
