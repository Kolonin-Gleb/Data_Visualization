# Подключаем библиотеки для работы с MySQL из Python
import pymysql
from pymysql.cursors import DictCursor, Cursor

# Соединяемся с базой данных
dbh = pymysql.connect(
        host='185.12.94.106', #db-learning.ithub.ru
        user='teacher',
        password='a-007-007-007',
        db='ithub',
        charset='utf8mb4',
        cursorclass=DictCursor
    )

try:
  with dbh.cursor() as cur:
    cur.execute('SELECT * FROM vd_population')
    rows = cur.fetchall()

    counties = ''
    population = ''
    for row in rows:
        counties += ',"' + row['country'] + '"'
        population += ',' + str(row['population'])

    counties = 'countrties_list = ['+counties[1:]+'];'
    population = 'population = ['+population[1:]+'];'
    #print(counties)
    #print(population)

    file = open('population_data.js', 'w', encoding='utf-8')
    file.write(counties+"\n"+population)
    file.close()
except Exception as error:
  print("Что-то пошло не так", error)

