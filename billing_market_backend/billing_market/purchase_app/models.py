from django.db import models
from stocks_app.models import Product
from phonenumber_field.modelfields import PhoneNumberField


class Vendors(models.Model):
    vendor_id = models.BigAutoField(primary_key=True)
    vendor_name = models.CharField(max_length=100)
    vendor_information = models.TextField()
    vendor_contact = PhoneNumberField(region='IN', unique=True)
    vendor_gst_number = models.CharField(max_length=15)

    def __str__(self):
        return f'{self.vendor_name}'


class Order(models.Model):
    order_id = models.BigAutoField(primary_key=True)
    order_number = models.BigAutoField(unique=True)
    order_total_cost_without_gst = models.FloatField()
    order_total_cost_with_gst = models.FloatField()
    status = (
        ('Pending', 'Pending'),
        ('Delivered', 'Deliveried')
    )
    order_status = models.CharField(max_length=10, choices=status, default='Pending')
    order_date = models.DateField(auto_now_add=True)
    order_delivery_date = models.DateField(blank=True)
    vendors = models.ForeignKey(Vendors, on_delete=models.CASCADE, related_name='vendors_order')

class OrderProduct(models.Model):
    order_product_id = models.BigAutoField(primary_key=True)
    #order_id = models.ForeignKey(Order, on_delete=models.CASCADE , related_name='product_in_ordert')
    order_product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_list')
    order_product_quantity = models.FloatField()
    order_product_cost_per_quantity = models.FloatField()
    order_product_total_cost = models.FloatField()
    order_product_total_cost_with_gst = models.FloatField()