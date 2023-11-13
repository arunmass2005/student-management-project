from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.platypus import Image
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

from django.conf import settings
init_y = 25.8
init_x = 0.5
GENERAL_INFORMATION=[
            "NAME",
            "DATE OF BIRTH",
            "GENDER",
            "BLOOD GROUP",
            "NATIONALITY",
            "RELIGION",
            "COMMUNITY",
            "CASTE",
            "AADHAR NUMBER",
            "FIRST GRADUATE",
        ]
CONTACT_INFORMATION = [
            "MOBILE NUMBER",
            "EMAIL ID",
            "COUNTRY",
            "STATE",
            "DISTRICT",
            "TALUK",
            "LOCATION TYPE",
            "VILLAGE/TOWN",
            "ADDRESS",
        ]
FAMILY_INFORMATION = [
            "FATHER'S NAME",
            "FATHER'S OCCUPATION",
            "MOTHER'S NAME",
            "MOTHER'S OCCUPATION",
            "PARENT'S MOBILE NUMBER",
            "ANNUAL FAMILY INCOME",
        ]
BACK_ACCOUNT_DETAILS = [
            "ACCOUNT NUMBER",
            "IFSC CODE",
            "BANK NAME",
            "BANK BRANCH",
            "CITY",
        ]
    # {'PAST ACCADEMIC INFORMATION':[]}
def writeData(c,key,data,right=False):

    global init_x
    global init_y
    c.setFont("Helvetica-Bold", 12)
    c.saveState()
    c.setFillColorCMYK(0.5, 0.5, 0.5, 0.5)
    c.drawString((init_x + 0.5) * cm, (init_y) * cm, f"{key} : ")
    c.restoreState()
    c.setFont("Poppins-Regular", 11)
    if right!=True :
        c.drawString(
            (c.stringWidth(f"{key} : ", "Helvetica-Bold", 12) + (1 * cm)),
            (init_y) * cm,
            data,
        )
    else:
        c.drawString(
            (c.stringWidth(f"{key} : ", "Helvetica-Bold", 12) + (1 * cm)+(init_x *cm)),
            (init_y) * cm,
            data,
        )
    init_y -= 0.7

def generatePdf(data):
    print(data['name'])
    print(data)
    global init_x
    global init_y
    pdfmetrics.registerFont(
        TTFont(
            "Poppins-SemiBold",
            "/home/arun/Desktop/FullStack/Backend/StudentApi/poppins_files/Poppins-SemiBold.ttf",
        )
    )
    pdfmetrics.registerFont(
        TTFont(
            "Poppins-Regular",
            "/home/arun/Desktop/FullStack/Backend/StudentApi/poppins_files/Poppins-Regular.ttf",
        )
    )
    pdfmetrics.registerFont(
        TTFont(
            "Poppins-Bold",
            "/home/arun/Desktop/FullStack/Backend/StudentApi/poppins_files/Poppins-Bold.ttf",
        )
    )
    # create canva for pdf
    c = canvas.Canvas(f"{settings.BASE_DIR}/static/st_pdfs/{data['name']}.pdf" ,pagesize=A4)
    c.translate(cm, cm)
    print(cm)
    w, h = 21, 29.1
    print(w, h)
    # create a tex object
    # image = Image("/home/arun/Desktop/FullStack/counter.png",100,100)
    c.rect(0 * cm, 25.8 * cm, 19 * cm, -26 * cm)
    c.drawImage(
        f"{settings.BASE_DIR}/StudentApi/assets/TEC-LOGO.png",
        2.2 * cm,
        26.2 * cm,
        3.3 * cm,
        2.1 * cm,
        mask="auto",
    )
    c.setFont(
        "Helvetica-Bold",
        22.5,
    )
    c.drawString(x=5.7 * cm, y=27 * cm, text="TEC INFORMATION SYSTEM")
    c.drawImage(
        f"{settings.BASE_DIR}{data['profile']}",
        14 * cm,
        19.5 * cm,
        3.2 * cm,
        3.9 * cm,
    )
    #----info title -----
    c.line(0 * cm, (init_y) * cm, 19 * cm, (init_y) * cm)
    c.setFont("Helvetica-Bold", 14)
    init_y -= 0.7
    c.drawString(x=(init_x - 0.3) * cm, y=(init_y) * cm, text="GENERAL INFORMATION")
    init_y -= 0.3
    c.line(0 * cm, (init_y) * cm, 19 * cm, (init_y) * cm)
    init_y -= 0.5
    #---info body-----
    writeData(c,"NAME",data['name'])
    writeData(c,"DATE OF BIRTH",data['dob'])
    writeData(c,"GENDER",data['gender'])
    writeData(c,"BLOOD GROUP",data['bloodgroup'])
    if data['nationality']=='null':
        writeData(c,"NATIONALITY","INDIAN")
    writeData(c,"RELIGION",data['religion'])
    writeData(c,"COMMUNITY",data['community'])
    writeData(c,"CASTE",data['caste'])
    writeData(c,"AADHAR NUMBER",data['aadhar'])
    writeData(c,"FIRST GRADUATE",data['firstgraduate'])
    init_y+=0.3
    #----info title -----
    c.line(0 * cm, (init_y) * cm, 19 * cm, (init_y) * cm)
    c.setFont("Helvetica-Bold", 14)
    init_y -= 0.7
    c.drawString(x=(init_x - 0.3) * cm, y=(init_y) * cm, text="CONTACT INFORMATION")
    init_y -= 0.3
    c.line(0 * cm, (init_y) * cm, 19 * cm, (init_y) * cm)
    init_y -= 0.5
    writeData(c,"MOBILE NUMBER",data['mobile'])
    writeData(c,"EMAIL ID",data['emailid'])
    writeData(c,"COUNTRY",data['country'])
    writeData(c,"STATE",data['state'])
    writeData(c,"DISTRICT",data['district'])
    writeData(c,"LOCATION TYPE",data['location_type'])
    writeData(c,"TALUK",data['taluk'])
    writeData(c,"PLACE",data['place'])
    writeData(c,"ADDRESS",data['address'])
    writeData(c,"PINCODE",data['pincode'])
    init_y+=0.3
    #----info title -----
    c.line(0 * cm, (init_y) * cm, 19 * cm, (init_y) * cm)
    c.setFont("Helvetica-Bold", 14)
    init_y -= 0.7
    c.drawString(x=(init_x - 0.3) * cm, y=(init_y) * cm, text="FAMILY INFORMATION")
    init_y -= 0.3
    c.line(0 * cm, (init_y) * cm, 19 * cm, (init_y) * cm)
    init_y -= 0.5
    #---info body-----
    writeData(c,"FATHER'S NAME",data['fathersname'])
    writeData(c,"FATHER'S OCCUPATION",data['fathersoccupation'])
    writeData(c,"MOTHER'S NAME",data['mothersname'])
    writeData(c,"MOTHER'S OCCUPATION",data['mothersoccupation'])
    writeData(c,"ANNUAL INCOME",data['annual_income'])
    writeData(c,"PARENT MOBILE NUMBER",data['parents_mobile_number'])

    # --next page----
    # c.showPage()
    # c.translate(cm, cm)
    # init_y = 27.2
    # c.rect(0 * cm, 27.7 * cm, 19 * cm, -27.7 * cm)
    #----info title -----
    init_y+=0.3
    c.line(0 * cm, (init_y) * cm, 19 * cm, (init_y) * cm)
    c.setFont("Helvetica-Bold", 14)
    init_y -= 0.7
    c.drawString(x=(init_x - 0.3) * cm, y=(init_y) * cm, text="BANK ACOUNT INFORMATION")
    init_y -= 0.3
    c.line(0 * cm, (init_y) * cm, 19 * cm, (init_y) * cm)
    init_y -= 0.5
    print(init_y,init_x)
    writeData(c,"ACCOUNT NUMBER",data['account_number'])
    writeData(c,"IFSC CODE",data['ifsc'])
    writeData(c,"BANK NAME",data['bank_name'])
    writeData(c,"BRANCH",data['bank_branch'])
    init_y = 2.500000000000015
    init_x = 9
    writeData(c,"CITY",data['city'],True)
    init_y = 25.8
    init_x = 0.5
    c.showPage()
    c.save()
    
    return f"{settings.BASE_DIR}/st_pdfs/{data['name']}.pdf"
