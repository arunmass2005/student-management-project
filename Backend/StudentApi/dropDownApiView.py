from rest_framework.views import APIView
from django.http.response import JsonResponse
from . import data
class generalInfoView(APIView):
    def get(self,request,info,id=0):
        match info:
            case "salutionLookup":
                return JsonResponse(data.SALUTATION,safe=False)
            case "genderLookup":
                return JsonResponse(data.GENDER,safe=False)
            case 'bloodgroupLookup':
                return JsonResponse(data.BLOOD_GROUP,safe=False)
            case 'nationalityLookup':
                return JsonResponse(data.NATIONALITY,safe = False)
            case 'religionLookup':
                return JsonResponse(data.RELIGION,safe=False)
            case 'communityLookup':
                return JsonResponse(data.COMMUNITY,safe=False)
            case 'casteLookup':
                caste = self.__getCaste(id)
                return JsonResponse(caste,safe = False)
    def __getCaste(self,id):
        for dicts in data.CASTE:
            if(dicts[0]['communityId']==id):
                return dicts
