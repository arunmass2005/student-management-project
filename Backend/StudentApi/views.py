from django.http import JsonResponse,FileResponse
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .messages import message
from django.utils.datastructures import MultiValueDictKeyError, MultiValueDict
import hashlib
from django.conf import settings
import os
from .GeneratePdf import generatePdf
import time
import random
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
import string

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
                {"url": f"http://localhost:8000.ngrok-free.app/students/images/{student.profile}"},
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
        print(student.profile)
        if student.profile:
            print(student.profile)
            if request.data.profile:
                os.remove(f"{settings.BASE_DIR}/images/{student.profile}")
            elif request.data == {}:
                return JsonResponse({"suc": "No updates found"}, safe=False)
        else:
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

    def delete(self, request, mobile, *agrs, **kwargs):
        print(mobile)
        try:
            student = StudentsModel.objects.get(mobile=mobile)
            try:
                os.remove(f"{settings.BASE_DIR}/images/{student.profile}")
                os.remove(f"{settings.BASE_DIR}/st_pdfs/{student.name}.pdf")
            except Exception as e:
                pass
            student.delete()
            return JsonResponse({"suc":{"msg":f"{student.name} Deleted Successfully"}},safe = False)
        except StudentsModel.DoesNotExist:
            return JsonResponse({"not_exist":"aldready deleted"},safe = False)


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
            except Exception as e:
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
        print("in login data")
        print(request.data)
        if request.data == {}:
            return JsonResponse({"err": "No changes detected"}, safe=False)
        student = StudentLoginModel.objects.get(userid=userid)
        print("profile" in request.data)
        if "profile" in request.data:
            request_profile = request.data["profile"]
            if request_profile == "preview-profile.png":
                request.data.pop("profile")
            elif (request_profile != str(student.profile).split("/")[-1]) and student.profile:
                os.remove(f"{settings.BASE_DIR}/images/{student.profile}")

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

    def delete(self, request, userid, *agrs, **kwargs):
        print("in userid")
        print(userid)
        student = StudentsModel.objects.get(userid=userid)
        # os.remove(f"{settings.BASE_DIR}/images/{student.profile}")
        student.delete()
        return JsonResponse(message(student.name, "Deleted Successfully"))
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

    def post(self, request):
        stDataDict = {key:value for key,value in request.data.items()}
        file_path = generatePdf(stDataDict)
        # f_response = FileResponse(open(file_path,"rb"),content_type = "application/pdf",as_attachment = True)
        # # f_response["Content-Disposition"] = f'attachment; filename={file_path}'
        print(file_path.split("/")[-1])
        return JsonResponse({"suc": (file_path.split("/")[-1])}, safe=False)

class checkStDetailsExists(APIView):
    parser_classes = MultiPartParser, FormParser, JSONParser

    def post(self,request):
        print(request.data)
        fields = request.data["fields"].split(",")
        req_data = {k:v for k,v in request.data.items()}
        print(req_data)
        temp = []
        for f in fields:
            print("inside for loop",req_data[f],f)
            try:
                print("in try")
                if StudentLoginModel.objects.get(**{f: req_data[f]}):
                    temp.append({"field":f,"value":req_data[f]})
            except StudentLoginModel.DoesNotExist:
                pass
        print("in printing temp",temp)
        if temp:
            return JsonResponse({"err":temp},safe = False)
        else:
            return JsonResponse({"suc":"no errors"},safe = False)

class SendOtp(ApiViews):
    def _otpNumber(self):
        chars = string.digits
        randomStr = ''.join(random.choice(chars) for _ in range(5))
        return randomStr
    def _generateOtp(self,emailid):
        # setup email contents like from to subject
        msg = MIMEMultipart()
        msg['From'] = "pattusputtus@gmail.com"
        msg["To"] = emailid
        msg["Subject"] = "Email confirmation otp"
        otp = self._otpNumber()
        html= f'''<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">TEC Information System</a>
    </div>
    <p>Use the following OTP to confirm your Email. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">{otp}</h2>
    <p style="font-size:0.9em;">Regards,<br />TEC Information System </p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>TECIS</p>
      <p>kilambi</p>
      <p>Kanchipuram</p>
    </div>
  </div>
</div>'''
        msg.attach(MIMEText(html,"html"))
        s = smtplib.SMTP('smtp.gmail.com', 587)
        s.starttls()
        s.login("pattusputtus@gmail.com", "vabt rwuu mqxp ldaq")
        try:
            s.sendmail('&&&&&&&&&&&',emailid,msg.as_string())

            return hashlib.sha256(otp.encode('UTF-8')).hexdigest()
        except Exception as e:
            print(e)
       
    def get(self,request,emailid):
       hashed_otp = self._generateOtp(emailid)
       if(hashed_otp):
        return JsonResponse({"otpSND":hashed_otp},safe = False)
       else:
        return JsonResponse({"SMWW":"try again later"},safe = False)


class studentAfterOtp(ApiViews):
    parser_classes = MultiPartParser, FormParser, JSONParser
    def get(self,request,field,emailId):
        student = StudentLoginModel.objects.get(emailid = emailId)
        student_serializer = StudentLoginSerializer(student)
        print(student_serializer.data)
        return JsonResponse({field:student_serializer.data[field]},safe = False)
    
    def put(self, request ,field, emailId):
        print("in login data")
        print(request.data)
        if request.data == {}:
            return JsonResponse({"err": "No changes detected"}, safe=False)
        student = StudentLoginModel.objects.get(emailid=emailId)
        print("profile" in request.data)
        student_serializer = StudentLoginSerializer(
            student, data=request.data, partial=True
        )

        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse({"suc": "created!"}, safe=False)
        print(student_serializer.errors)
        return JsonResponse(
            {"err": [i for i in (student_serializer.errors).keys()]}, safe=False
        )


