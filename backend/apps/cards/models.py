from django.db import models
from django.utils.translation import gettext_lazy as _

class Card(models.Model):
    id = models.UUIDField(primary_key=True, editable=False)
    question = models.CharField(max_length=128)
    answer = models.TextField(max_length=512, blank=True)
    category = models.ForeignKey("Category", on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = _("Card")
        verbose_name_plural = _("Cards")

    def __str__(self):
        return (f'{self.id}. {self.question}')

class Category(models.Model):
    id = models.UUIDField(primary_key=True, editable=False)
    name = models.CharField(max_length=128)

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def __str__(self):
        return (f'{self.id}. {self.name}')