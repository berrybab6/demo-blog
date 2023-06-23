from rest_framework import generics
from .models import CompanyInfo
from .serializers import CompanyInfoSerializer



class CompanyInfoListCreateView(generics.ListCreateAPIView):
    queryset = CompanyInfo.objects.all()
    serializer_class = CompanyInfoSerializer

class CompanyInfoRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = CompanyInfo.objects.all()
    serializer_class = CompanyInfoSerializer
