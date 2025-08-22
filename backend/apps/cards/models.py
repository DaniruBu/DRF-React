from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings

class Card(models.Model):
    id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=128)
    answer = models.TextField(max_length=512, blank=True)
    category = models.ForeignKey("Category", on_delete=models.CASCADE, blank=True, null=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = _("Card")
        verbose_name_plural = _("Cards")


    def __str__(self):
        return self.question

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=128)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=False, null=False)

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def __str__(self):
        return self.title