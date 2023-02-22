from django.db import models
from auth_app.models import EmployeeUser
from stocks_app.models import Product
from phonenumber_field.modelfields import PhoneNumberField


class Customer(models.Model):
    name = models.CharField(max_length=100)
    contact_number = PhoneNumberField(region='IN', unique=True, blank=True)
    address = models.TextField(blank=True)

    def __str__(self):
        return f'{self.name} {self.contact_number}'


class Invoice(models.Model):
    Invoice_id = models.BigAutoField(primary_key=True)
    invoice_number = models.BigAutoField(editable=False, unique=True)
    total_cost_without_gst = models.FloatField()
    total_cost_with_gst = models.FloatField()
    total_cost_with_offer_and_gst = models.FloatField()
    invoice_date = models.DateField(auto_now=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE ,related_name='customer_invoice')
    invoice_created_by = models.ForeignKey(EmployeeUser, on_delete=models.CASCADE ,related_name='employee_name')

    def __str__(self):
        return f'{self.invoice_number} {self.customer}'


class InvoiceProduct(models.Model):
    invoice_product_id = models.BigAutoField(primary_key=True)
    #invoice_number = models.ForeignKey(Invoice, on_delete=models.CASCADE, related_name='product_in_invoice')
    invoice_product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='invoice_list')
    invoice_product_quantity = models.FloatField(default=1)
    invoice_product_cost_per_quantity = models.FloatField()
    invoice_product_cost_per_quantity_with_offer = models.FloatField()
    invoice_product_total_cost = models.FloatField()
    invoice_product_total_cost_with_gst = models.FloatField()
    invoice_product_total_cost_with_offer = models.FloatField() 

    def __str__(self):
        return f'{self.invoice_number} {self.invoice_product} {self.invoice_product_quantity}'