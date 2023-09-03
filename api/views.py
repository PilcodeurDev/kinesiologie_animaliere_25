from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *

# def home(request):
#     return HttpResponse('Hello, Django!')


class ReactView(APIView):

    serializer_class = ReactSerializer

    def get(self, request):
        output = [{ "employee": output.employee,
                    "department": output.departement}
                    for output in React.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exeption=True):
            serializer.save()
            return Response(serializer.data)
