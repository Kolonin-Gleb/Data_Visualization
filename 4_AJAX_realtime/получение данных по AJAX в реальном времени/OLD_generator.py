# Генератор данных с определенной периодичностью

import pymysql
from pymysql.cursors import DictCursor
import time
import random


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

while True:
        d = random.uniform(0, 20)
        #print(d)

        try:
                with dbh.cursor() as cur:
                        sql = "INSERT INTO vd_data_3p1 (d) VALUES('"+str(d)+"')"
                        print(sql)
                        cur.execute(sql)
        except:
                d = {'error': 'Ошибка чтения'}
                # print("Что-то пошло не так")

        time.sleep(1)