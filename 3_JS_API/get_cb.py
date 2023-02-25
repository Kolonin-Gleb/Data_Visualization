import requests
import datetime
import pandas

url = "http://cbr.ru/scripts/XML_dynamic.asp?date_req1=##start-date##&date_req2=##end-date##&VAL_NM_RQ=R01235"

today = datetime.date.today()
today20 = datetime.date.today() - datetime.timedelta(days=20)

start_date_1 = "{:02}/{:02}/{}".format(today20.day, today20.month, today20.year)
start_date_2 = "{:02}/{:02}/{}".format(today20.day, today20.month, today20.year - 1)

end_date_1 = "{:02}/{:02}/{}".format(today.day, today.month, today.year)
end_date_2 = "{:02}/{:02}/{}".format(today.day, today.month, today.year - 1)


url_1 = url.replace('##start-date##', start_date_1).replace('##end-date##', end_date_1)
url_2 = url.replace('##start-date##', start_date_2).replace('##end-date##', end_date_2)

response_1 = requests.get(url_1)
xml_1 = response_1.text

response_2 = requests.get(url_2)
xml_2 = response_2.text


df_1 = pandas.read_xml(xml_1)
df_1 = df_1[-10:]

labels = df_1['Date'].tolist()
labels = "var labels = " + str([str(i) for i in labels]) + ";\n"

cb = df_1['Value'].tolist()
cb = "var cb = [" + "| ".join(cb).replace(",", ".").replace("|", ",") + "];\n"

fh = open("int_ext_data.js", "w")
fh.write(labels)
fh.write(cb)
fh.close()


df_2 = pandas.read_xml(xml_2)
df_2 = df_2[-10:]

labels = df_2['Date'].tolist()
labels = "var labels = " + str([str(i) for i in labels]) + ";\n"

cb = df_2['Value'].tolist()
cb = "var cb = [" + "| ".join(cb).replace(",", ".").replace("|", ",") + "];\n"

fh = open("int_ext_data.js", "w")
fh.write(labels)
fh.write(cb)
fh.close()

# Отобразить данные за 2 года.
# Если даты выпадают на выходные, то там где пропуски 

# Датафрейм за наш год
# Копируем
# Дополняем данными из прошлого года.

# df_1
# df_2

# Оставляю записи из DataFrame-ов, где даты совпадают (за искл. года)

dates_1 = df_1['Date'].tolist()
dates_1 = [d[:-5] for d in dates_1]
# dates_1

dates_2 = df_2['Date'].tolist()
dates_2 = [d[:-5] for d in dates_2]
# dates_2

# Нахождение 'общих' дат
dates_indexes_to_display = []

for index, d in enumerate(dates_1):
    if d in dates_2:
        dates_indexes_to_display.append(index)

# dates_indexes_to_display #

# Удаление строк из Data-Frame-ов 
# Чтобы оставить только нужные даты 
df_1 = df_1.iloc[dates_indexes_to_display]
# df_1

# Удаление строк из Data-Frame-ов 
# Чтобы оставить только нужные даты 
df_2 = df_2.iloc[dates_indexes_to_display]
# df_2

# Осталось данные из DataFrame-ов передать в JS и отобразить

labels = df_1['Date'].tolist()
labels = "var labels = " + str([str(i) for i in labels]) + ";\n"

values_1 = df_1['Value'].tolist()
values_2 = df_2['Value'].tolist()

values_1 = "var values_1 = [" + "| ".join(values_1).replace(",", ".").replace("|", ",") + "];\n"
values_2 = "var values_2 = [" + "| ".join(values_2).replace(",", ".").replace("|", ",") + "];\n"

fh = open("int_ext_data.js", "w")
fh.write(labels)
fh.write(values_1)
fh.write(values_2)
fh.close()
