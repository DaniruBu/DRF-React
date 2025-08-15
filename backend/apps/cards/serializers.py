from rest_framework import serializers
from .models import Card, Category

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CreateCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['question', 'answer', 'category']

class CreateCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title']
