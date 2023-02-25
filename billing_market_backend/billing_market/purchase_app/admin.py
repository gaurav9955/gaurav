from django.contrib import admin
from .models import Vendors


class VendorsAdmin(admin.ModelAdmin):
    list_display = ['vendor_id', 'vendor_name', 'vendor_information', 'vendor_contact', 'vendor_gst_number']

admin.site.register(Vendors, VendorsAdmin)


