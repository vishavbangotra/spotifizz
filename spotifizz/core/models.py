from django.db import models
import os
from spotifizz import settings
class Seller(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='seller/', height_field=None, width_field=None, max_length=None)

    def __str__(self):
        return self.user.name


class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    image = models.ImageField(upload_to='product/', height_field=None, width_field=None, max_length=None, default='SOME STRING')
    date_published = models.DateField(auto_now_add=True)
    desciption = models.TextField(max_length=1028, null=True)

    def __str__(self):
        return self.name

class ProductOrder(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    def __str__(self):
        return self.product

class Order(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    items = models.ManyToManyField(ProductOrder)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
