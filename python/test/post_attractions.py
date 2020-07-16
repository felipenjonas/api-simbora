# import requests
# # from pprint import pprint

# # _print = print
# # print = pprint

# prod_url = "https://api-simbora.herokuapp.com/attractions/insert_new"

# attraction_data = {
# 	"category":"teste",
# 	"attraction_name":"teste",
# 	"link_attraction":"teste",
# 	"total_assessment": 59,
# 	"excellent_score":10,
# 	"great_score":10,
# 	"fair_score":10,
# 	"bad_score":10,
# 	"horrible_score":19,
# 	"address":"teste",
# 	"web_site_external":"teste",
# 	"phone":"teste",
# 	"source_url":"teste"
# }

# response = requests.post(url=prod_url, json=attraction_data)

# if response.status_code == 200:
#     #Success
#     print(response.status_code)
#     print(response.reason)
#     print(response.text)
#     print(response.json())
#     #print('Bytes', response.content)
# else:
#     # Error
#     print(response.status_code)
#     print(response.reason)
#     print(response.text)
#     print(response.json())
#     #print('Bytes', response.content)

    