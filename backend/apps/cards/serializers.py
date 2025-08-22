from rest_framework import serializers
from .models import Card, Category

class CardSerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='created_by.username', read_only=True)
    
    class Meta:
        model = Card
        fields = ['id', 'question', 'answer', 'category', 'owner', 'created_at']
class CategorySerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='created_by.username', read_only=True)
    
    class Meta:
        model = Category
        fields = ['id', 'title', 'owner']

class CreateCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'question', 'answer', 'category']

class CreateCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title']
