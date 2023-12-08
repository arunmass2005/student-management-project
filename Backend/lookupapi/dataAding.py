import mysql.connector

from data import *

conn = mysql.connector.connect(
    **{
        "host": "localhost",
        "user": "root",
        "password": "root",
        "database": "tecdb",
    }
)
# CASTE = [
#     {
#         "id": 4622,
#         "casteName": "NOT APPLICABLE",
#         "casteCode": "4622",
#         "communityId": 6,
#     }
# ]


code_area = conn.cursor()
# # for caste in CASTE:
#     for i in caste:
#         if i["communityId"] == 6:
#             print(i["communityId"])
#             code_area.execute(
#                 f"INSERT INTO lookupapi_caste (value,communityId) VALUES('{i['casteName']}',1);"
#             )
#         elif i["communityId"] == 3:
#             code_area.execute(
#                 f"INSERT INTO lookupapi_caste (value,communityId) VALUES('{i['casteName']}',2);"
#             )
#         elif i["communityId"] == 4:
#             code_area.execute(
#                 f"INSERT INTO lookupapi_caste (value,communityId) VALUES('{i['casteName']}',3);"
#             )
#         elif i["communityId"] == 11:
#             code_area.execute(
#                 f"INSERT INTO lookupapi_caste (value,communityId) VALUES('{i['casteName']}',4);"
#             )
#         elif i["communityId"] == 10:
#             code_area.execute(
#                 f"INSERT INTO lookupapi_caste (value,communityId) VALUES('{i['casteName']}',5);"
#             )
#         elif i["communityId"] == 7:
#             code_area.execute(
#                 f"INSERT INTO lookupapi_caste (value,communityId) VALUES('{i['casteName']}',6);"
#             )
#         elif i["communityId"] == 12:
#             code_area.execute(
#                 f"INSERT INTO lookupapi_caste (value,communityId) VALUES('{i['casteName']}',7);"
#             )
#         elif i["communityId"] == 13:
#             code_area.execute(
#                 f"INSERT INTO lookupapi_caste (value,communityId) VALUES('{i['casteName']}',8);"
#             )
#         elif i["communityId"] == 1:
#             code_area.execute(
#                 f"INSERT INTO lookupapi_caste (value,communityId) VALUES('{i['casteName']}',9);"
#             )


for i in COURSE:
    code_area.execute(
                f"INSERT INTO lookupapi_course (value,degreeId) VALUES(\"{i['value']}\",{i['degreeId']});"
            )


# import requests

# HEADER = {
#     "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0",
#     "Accept": "application/json, text/plain, */*",
#     "Accept-Language": "en-US,en;q=0.5",
#     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMzc3IiwianRpIjoiZTcwYjc4OGYtNTFmYi00OWUyLWE0YzQtMjNmMWY4NzdmZmE3IiwiaWF0IjoxNjk3MjEyODQ2LCJ1c2VyLmlkIjoiMTM3NyIsInVzZXIudXNlcm5hbWUiOiJ0ZWNhdTE1MTdAZ21haWwuY29tIiwidXNlci5sYW5ndWFnZSI6IjEiLCJ1c2VyLmVtYWlsIjoidGVjYXUxNTE3QGdtYWlsLmNvbSIsInVzZXIuZnVsbG5hbWUiOiJUSElSVU1BTEFJIEVOR0lORUVSSU5HIENPTExFR0UgIiwidXNlci5yb2xlaWQiOiI0IiwidXNlci5yb2xlbmFtZSI6Ikluc3RpdHV0ZSBBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Ikluc3RpdHV0ZSBBZG1pbiIsInVzZXIubW9iaWxlbm8iOiI5ODk0ODcwNDk2IiwidXNlci50aW1lem9uZSI6IkluZGlhIFN0YW5kYXJkIFRpbWUiLCJ1c2VyLlJlc2V0UGFzc3dvcmRUeXBlIjoiRG9udEFsbG93VG9DaGFuZ2VQYXNzd29yZCIsInVzZXIuaW5zdGl0dXRldmVyaWZpZWQiOiJUcnVlIiwidXNlci5pbnN0aXR1dGVDb3Vyc2VBdmFpbGFibGUiOiJUcnVlIiwidXNlci5pbnN0aXR1dGVpZCI6IjE1NzQiLCJ1c2VyLnVuaXZlcnNpdHlpZCI6IjIzIiwidXNlci5ob2RpZCI6IjgiLCJ1c2VyLmRpc3RyaWN0SWQiOiIzIiwidXNlci5kZXBhcnRtZW50SWQiOiI1IiwibmJmIjoxNjk3MjEyODQ2LCJleHAiOjE2OTcyOTkyNDYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0LmNvbS8iLCJhdWQiOiJFQTZGNTE5RTM3M0E5QzZFQzIzNjNDOTYxODE5MSJ9.fKVmCma7-EHJENXR2GUCRpt08bGi8rhEvvGMLeG4quU",
#     "Sec-Fetch-Dest": "empty",
#     "Sec-Fetch-Mode": "cors",
#     "Sec-Fetch-Site": "same-site",
# }
# j = 1
# for i in TAMIL_NADU_DISTRICT:
#     api = requests.get(
#         f"https://umis2api.xenovex.com/api/lookup/taluklookup/{i['key']}", headers=HEADER
#     )
#     for k in api.json():
#         code_area.execute(
#             f"INSERT INTO lookupapi_taluk (value,districtId) VALUES(\"{k['value']}\",{j});"
#         )
#     j+=1
conn.commit()
code_area.close()
conn.close()
