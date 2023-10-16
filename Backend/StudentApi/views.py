from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .messages import message
from django.utils.datastructures import MultiValueDictKeyError, MultiValueDict
from django.conf import settings
import os
from .GeneratePdf import generatePdf

# Models,Serializers
from .models import StudentsModel, StudentLoginModel
from .serializers import StudentsSerializer, StudentLoginSerializer


# Create your views here.
class ApiViews(APIView):
    parser_classes = MultiPartParser, FormParser, JSONParser

    def get(self, request, field="", id=""):
        if id == "":
            students = StudentsModel.objects.all()
            student_serializer = StudentsSerializer(students, many=True)
            return JsonResponse(student_serializer.data, safe=False)
        elif field == "image":
            student = StudentsModel.objects.get(id=id)
            return JsonResponse(
                {"url": f"http://localhost:8000/students/images/{student.profile}"},
                safe=False,
            )
        else:
            students = StudentsModel.objects.get(id=id)
            student_serializer = StudentsSerializer(students)
            return JsonResponse(student_serializer.data, safe=False)

    def post(self, request, format=None):
        print("hello")

        student_serializer = StudentsSerializer(data=request.data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse({"suc": f"{request.data['name']}"}, safe=True)
        return JsonResponse(
            {"err": [i for i in (student_serializer.errors).keys()]}, safe=True
        )

    def put(self, request, MobileNum, format=None):
        student = StudentsModel.objects.get(mobile=MobileNum)

        if request.data.profile:
            os.remove(f"{settings.BASE_DIR}/images/{student.profile}")
        elif request.data == {}:
            return JsonResponse({"suc": "No updates found"}, safe=False)

        student_serializer = StudentsSerializer(
            student, data=request.data, partial=True
        )
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse({"suc": "Successfully updated"}, safe=False)
        print(student_serializer.errors)
        return JsonResponse(
            {"err": [i for i in (student_serializer.errors).keys()]}, safe=False
        )

    def delete(self, request, MobileNum, *agrs, **kwargs):
        student = StudentsModel.objects.get(mobile=MobileNum)
        os.remove(f"{settings.BASE_DIR}/images/{student.profile}")
        student.delete()
        return JsonResponse(message(student.name, "Deleted Successfully"))


class login(APIView):
    parser_classes = MultiPartParser, FormParser, JSONParser

    def get(self, request, userid):
        student_log = StudentLoginModel.objects.get(userid=userid)
        print(student_log)
        student_log_serializer = StudentLoginSerializer(student_log)
        return JsonResponse({"suc": student_log_serializer.data}, safe=False)
        # return JsonResponse({"err":[i for i in (student_log_serializer.errors).keys()]}, safe = False)

    def post(self, request):
        print(request.data)
        uniqueValues = ["userid", "aadhar", "mobile", "emailid"]
        for key in uniqueValues:
            print('in for loop')
            try:
                if StudentLoginModel.objects.get(**{key: request.data[key]}):
                    print("in loginmodel")
                    errMsg = {
                        "field": key,
                        "err": f"{request.data[key]} aldready existed !",
                    }
                    return JsonResponse(data=errMsg, safe=False)
                elif StudentsModel.objects.get(**{key: request.data[key]}):
                    print('in student model')
                    errMsg = {
                        "field": key,
                        "err": f"{request.data[key]} aldready existed !",
                    }
                    return JsonResponse(data=errMsg,safe=False)
            except StudentLoginModel.DoesNotExist:
                pass
        print('after check')
        student_log_serializer = StudentLoginSerializer(data=request.data)
        print('after serial')
        if student_log_serializer.is_valid():
            print('in if')
            student_log_serializer.save()
            return JsonResponse({"suc": "sucess"}, safe=False)
        else:
            print(student_log_serializer.errors)

    def put(self, request, userid, format=None):
        print(request.data)
        if request.data == {}:
            return JsonResponse({"err": "No chnages detected"}, safe=False)
        student = StudentLoginModel.objects.get(userid=userid)
        print("profile" in request.data)
        if "profile" in request.data:
            request_profile = request.data["profile"]
            if request_profile == "preview-profile.png":
                request.data.pop("profile")
            elif request_profile != str(student.profile).split("/")[-1]:
                os.remove(f"{settings.BASE_DIR}/images/{student.profile}")
            else:
                request.data.pop("profile")
        student_serializer = StudentLoginSerializer(
            student, data=request.data, partial=True
        )

        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse({"suc": student_serializer.data}, safe=False)
        print(student_serializer.errors)
        return JsonResponse(
            {"err": [i for i in (student_serializer.errors).keys()]}, safe=False
        )


class loginCheck(APIView):
    parser_classes = MultiPartParser, FormParser, JSONParser

    def post(self, request):
        print("in login post")
        # print(request.data["userid"])
        try:
            userid = StudentLoginModel.objects.get(userid=request.data["userid"])
            print(userid)
            login_serial = StudentLoginSerializer(userid)
            if login_serial.data["password"] == request.data["password"]:
                return JsonResponse({"suc": login_serial.data}, safe=False)
            else:
                return JsonResponse({"err": "password"}, safe=False)
        except StudentLoginModel.DoesNotExist:
            return JsonResponse({"err": "userid"}, safe=False)


class generatePdfView(APIView):
    parser_classes = MultiPartParser, FormParser, JSONParser
    print("in api")

    def post(self, request, id):
        print(id)
        student_model = StudentsModel.objects.get(id=id)
        print(student_model)
        student_serializer = StudentsSerializer(student_model)
        print(student_serializer.data)
        generatePdf(student_serializer.data)
        return JsonResponse({"suc": "fuck"}, safe=False)
