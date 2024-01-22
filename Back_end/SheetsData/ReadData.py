import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd


# Google Sheets logic
scope = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
]

creds = ServiceAccountCredentials.from_json_keyfile_name("key.json", scopes=scope)

file = gspread.authorize(creds)

workbook = file.open("Vegetable Prices WholeSale")

sheet = workbook.get_worksheet(0)

# Convert Google Sheets data to DataFrame
data = sheet.get_all_values()
headers = data[0]
values = data[1:]

df = pd.DataFrame(values, columns=headers)
print(df)
