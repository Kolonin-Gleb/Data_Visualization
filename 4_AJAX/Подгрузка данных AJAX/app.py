from flask import Flask, jsonify
import pymysql
from pymysql.cursors import DictCursor

app = Flask(__name__, static_folder="static")

# Соединяемся с базой данных
dbh = pymysql.connect(
    host='185.12.94.106',
    user='teacher',
    password='a-007-007-007',
    db='ithub',
    charset='utf8mb4',
    cursorclass=DictCursor,
    autocommit=True
)


@app.route('/')
def index():
    index = open("static/population.html", "r")
    page = index.read()
    index.close()
    return page


@app.route('/get_data', methods=['POST'])
def get_data():
    '''
    d = [
        ["Китай", "Индия", "США", "Индонезия", "Пакистан", "Нигерия"],
        [1439324000, 1380004000, 331003000, 273524000, 220892000, 218981456]
    ]
    '''

    try:
        with dbh.cursor() as cur:
            cur.execute('SELECT * FROM vd_population')
            rows = cur.fetchall()

            countries = []
            population = []
            for row in rows:
                countries.append(row['country'])
                population.append(row['population'])
            d = [ countries, population ]
    except:
        d = { 'error': 'Ошибка чтения' }
        #print("Что-то пошло не так")

    return jsonify(d)


app.run(debug=True, host='db-learning.ithub.ru', port=1110)
