from django.http.response import JsonResponse
from django.views import View
from rest_framework.views import APIView
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from .models import *
from .serializer import *


# Create your views here.
class lookupapiView(APIView):
    parser_classes = FormParser, JSONParser, MultiPartParser

    def __getData(self, model, serializer):
        dbData = model.objects.all()
        print(dbData)
        dbSerial = serializer(dbData, many=True)
        print(dbSerial)
        return dbSerial

    def __filterGetData(self, model, serializer, idName,id):
        dbData = model.objects.filter(**{f"{idName}":id})
        dbSerial = serializer(dbData, many=True)
        return dbSerial

    def __getSpecData(self, model, serializer, id):
        print(id)
        dbData = model.objects.get(id=id)
        dbSerial = serializer(dbData)
        return dbSerial

    def get(self, request, *args, **kwargs):
        print(kwargs)
        value = kwargs.get("value")
        Id = kwargs.get("Id")
        id = kwargs.get("id")
        if Id == None and id == None:
            match value:
                case "gender":
                    f_data = self.__getData(gender, genderSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "graduation":
                    f_data = self.__getData(graduation, graduationSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "degree":
                    f_data = self.__getData(degree, degreeSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "course":
                    f_data = self.__getData(course, courseSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "bloodgroup":
                    f_data = self.__getData(bloodgroup, bloodgroupSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "religion":
                    f_data = self.__getData(religion, religionSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "community":
                    f_data = self.__getData(community, communitySerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "caste":
                    f_data = self.__getData(caste, casteSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "country":
                    f_data = self.__getData(country, countrySerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "state":
                    f_data = self.__getData(state, stateSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "district":
                    f_data = self.__getData(district, districtSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "taluk":
                    f_data = self.__getData(taluk, talukSerializer)
                    return JsonResponse(f_data.data, safe=False)
                case "location_type":
                    f_data = self.__getData(location_type, location_typeSerializer)
                    return JsonResponse(f_data.data, safe=False)

        elif Id != None and id == None:
            print("in elif case")
            match value:
                case "gender":
                    f_data = self.__getSpecData(gender, genderSerializer, Id)
                    return JsonResponse(f_data.data, safe=False)
                case "bloodgroup":
                    f_data = self.__getSpecData(bloodgroup, bloodgroupSerializer, Id)
                    return JsonResponse(f_data.data, safe=False)
                case "religion":
                    f_data = self.__getSpecData(religion, religionSerializer, Id)
                    return JsonResponse(f_data.data, safe=False)
                case "community":
                    f_data = self.__getSpecData(community, communitySerializer, Id)
                    return JsonResponse(f_data.data, safe=False)
                case "caste":
                    f_data = self.__getSpecData(caste, casteSerializer, Id)
                    return JsonResponse(f_data.data, safe=False)
                case "country":
                    f_data = self.__getSpecData(country, countrySerializer, Id)
                    return JsonResponse(f_data.data, safe=False)
                case "state":
                    f_data = self.__getSpecData(state, stateSerializer, Id)
                    return JsonResponse(f_data.data, safe=False)
                case "district":
                    f_data = self.__getSpecData(district, districtSerializer, Id)
                    return JsonResponse(f_data.data, safe=False)
                case "taluk":
                    f_data = self.__getSpecData(taluk, talukSerializer, Id)
                    return JsonResponse(f_data.data, safe=False)
                case "location_type":
                    f_data = self.__getSpecData(location_type, location_typeSerializer, Id)
                    return JsonResponse(f_data.data, safe=False)

        else:
            match value:
                case "caste":
                    f_data = self.__filterGetData(caste, casteSerializer,"communityId", id)
                    print(f_data.data)
                    return JsonResponse(f_data.data, safe=False)

                case "taluk":
                    f_data = self.__filterGetData(taluk, talukSerializer,"districtId", id)
                    print(f_data.data)
                    return JsonResponse(f_data.data, safe=False)
