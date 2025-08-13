from rest_framework import serializers
from .models import Card, Category

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ["id", "question", "answer", "category"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'