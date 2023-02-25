from rest_framework import serializers
from .models import Vendors


class VendorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendors
        fields = '__all__'
    

    def validate_vendor_gst_number(self, value):
        # print(value, '============')
        # if not len(value) == 15:
        #     raise serializers.ValidationError('GST Number Must bE 15 Characters Long')
        # if not (value[:2:].isdigit()):
        #     raise serializers.ValidationError('First 2 Character Must Be Number')
        # if not (value[2:7].isalpha()):
        #     raise serializers.ValidationError('  3rd 4th 5th 6th 7th Character Must Be Alphabet')
        # if not (value[7:10].isdigit()):
        #     raise serializers.ValidationError(' 8 9 10 11 Character Must be Number')
        # if not(value[-4].isalpha()):
        #     raise serializers.ValidationError('12th Character Must Be Alphabet')
        # if not(value[-3].isdigit()):
        #     raise serializers.ValidationError('13 Character Must Be Number')
        # if value[-2] != 'Z':
        #     raise serializers.ValidationError('14 Character Apply Only Z')
        # if not(value[-1].isalnum()):
        #     raise serializers.ValidationError('Your Choice')
        pattern = '^[\d]{2}[A-Z]{5}[\d]{4}[A-Z]{1}[\d]{1}Z[A-Z0-9]{1}$'
        import re 
        if not re.match(pattern, value):
            raise serializers.ValidationError('GST Number is Not Valid')
        return value
        