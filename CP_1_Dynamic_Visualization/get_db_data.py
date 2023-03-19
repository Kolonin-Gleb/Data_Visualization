# Скрипт получения данных из БД
from flask import Flask, jsonify
import pymysql
from pymysql.cursors import DictCursor

app = Flask(__name__, static_folder="static")

# Соединяемся с базой данных
dbh = pymysql.connect(
        host='?????????????',
        user='?????????????',
        password='?????????????',
        db='ithub',
        charset='utf8mb4',
        cursorclass=DictCursor,
        autocommit=True
    )

@app.route('/')
def index():
    index = open("static/index.html", "r")
    page = index.read()
    index.close()
    return page

@app.route('/get_data', methods=['GET', 'POST'])
def get_contact_list():
    data = []
    quarters = []
    years = []
    # periods = []
    income_fact = []
    income_prediction = []
    try:
        with dbh.cursor() as cur:
            cur.execute('SELECT QUARTER(dt) as q, YEAR(dt) as y, income_fact, income_prediction FROM `vd_tsmc`;')
            rows = cur.fetchall()

            for row in rows:
                print(row)
                # period = str(row['y']) + "г." + str(row['q'] + "кв.")
                # print(period)
                # periods.append(period)
                quarters.append(row['q'])
                years.append(row['y'])
                income_fact.append(row['income_fact'])
                income_prediction.append(row['income_prediction'])

            data = [quarters, years, income_fact, income_prediction]
    except:
        data = { 'error': 'Ошибка чтения' }

    return jsonify(data)

app.run(debug=True, host='db-learning.ithub.ru', port=1133)