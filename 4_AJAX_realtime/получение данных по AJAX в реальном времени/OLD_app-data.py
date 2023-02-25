from flask import Flask, jsonify
import pymysql
from pymysql.cursors import DictCursor

app = Flask(__name__, static_folder="static")

# Соединяемся с базой данных
dbh = pymysql.connect(
        host='185.12.94.106',
        user='2p1s10',
        password='future_IT_money_victory_24',
        db='2p1s10',
        charset='utf8mb4',
        cursorclass=DictCursor,
        autocommit=True
    )

@app.route('/')
def index():
    index = open("static/data.html", "r")
    page = index.read()
    index.close()
    return page

@app.route('/get_data', methods=['GET', 'POST'])
def get_contact_list():
    d = []

    d_dt = []
    d_data = []
    try:
        with dbh.cursor() as cur:
            cur.execute('SELECT * FROM vd_data_3p1  ORDER BY dt DESC  LIMIT 20')
            rows = cur.fetchall()

            for row in rows:
                d_dt.append(row['dt'])
                d_data.append(row['d'])

            d = [ d_dt, d_data ]
    except:
        d = { 'error': 'Ошибка чтения' }


    return jsonify(d)

app.run(debug=True, host='db-learning.ithub.ru', port=1110)