/*
1 пер для хранения состояния кнопок
Каждая кнопка отвечает только за себя
Вынести данные из функций в глоб

Если выжаты 2 кнопки, то в datasets должно быть 2
*/

/* Данные для отображения */
var data2019 = {
    label: 'Популяция 2019 г',
    data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
    backgroundColor: 'rgba(54, 162, 235, 0.4)',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(54, 162, 235, 0.9)'
}

var data2020 = {
    label: 'Популяция 2020 г',
    data: [1779302771, 1481935911, 526625791, 460580739, 507353391, 304924861, 390632261, 457826578, 342257519, 326451398],
    backgroundColor: 'rgba(255, 159, 64, 0.4)',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(255, 159, 64, 0.9)'
}

/* Состояния для отображения */
var year2019 = false;
var year2020 = false;

var ourBar = $("#chartBar");

var barChart = new Chart(ourBar, {
    type: 'bar',
    data: {
        labels: ["Китай", "Индия", "США", "Индонезия", "Бразилия", "Пакистан", "Нигерия", "Бангладеш", "Россия", "Япония"],
        // Изначально неотображать данные
        datasets: [
            
        ]
    },
})

// Можно вынести наполнение графика данными в отдельную функцию
// Что будет выполнять действия в зависимости от аргументов
function setData(year2019, year2020)
{
    if (year2019 && year2020) // Включить все данные
    {
        barChart.data.datasets = [data2019, data2020];
        // Удаление всевозможных классов на кнопках
        $('#2019').removeClass('btn-primary');
        $('#2019').removeClass('btn-secondary');
        $('#2020').removeClass('btn-primary');
        $('#2020').removeClass('btn-secondary');
        // Установка нужных классов на кнопках
        $('#2019').addClass('btn-primary');
        $('#2020').addClass('btn-primary');
    }
    else if (year2019 == false && year2020 == false) // Убрать все данные
    {
        barChart.data.datasets = [];
        // Удаление всевозможных классов на кнопках
        $('#2019').removeClass('btn-primary');
        $('#2019').removeClass('btn-secondary');
        $('#2020').removeClass('btn-primary');
        $('#2020').removeClass('btn-secondary');
        // Установка нужных классов на кнопках
        $('#2019').addClass('btn-secondary');
        $('#2020').addClass('btn-secondary');
    }
    else if (year2019 == true && year2020 == false) // Только 2019
    {
        barChart.data.datasets = [data2019];
        $('#2019').removeClass('btn-secondary');
        $('#2020').removeClass('btn-primary');
        $('#2019').addClass('btn-primary');
        $('#2020').addClass('btn-secondary');
    }
    else if (year2019 == false && year2020 == true) // Только 2020
    {
        barChart.data.datasets = [data2020];
        $('#2020').removeClass('btn-secondary');
        $('#2019').removeClass('btn-primary');
        $('#2020').addClass('btn-primary');
        $('#2019').addClass('btn-secondary');
    }
}

$('#2019').click(function () {
    console.log(year2019);
    console.log('2019 clicked');
    year2019 = !year2019; // Смена статуса
    console.log(year2019);

    setData(year2019, year2020);

    barChart.update();
})

$('#2020').click(function () {
    console.log(year2020);
    console.log('2020 clicked');
    year2020 = !year2020; // Смена статуса
    console.log(year2020);

    setData(year2019, year2020);

    barChart.update();
})


