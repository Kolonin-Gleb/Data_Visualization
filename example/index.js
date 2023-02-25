var ourPie = $("#chartPie");
var ourLine = $("#chartLine");
var ourBar = $("#chartBar");

var barChart = new Chart(ourBar, {
    type: 'bar',
    data: {
        labels: ["Китай", "Индия", "США", "Индонезия", "Бразилия", "Пакистан", "Нигерия", "Бангладеш", "Россия", "Япония"],
        datasets: [
            {
                label: 'Популяция 2019 г',
                data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 3,
                borderColor: 'rgba(54, 162, 235, 0.9)'
            },
            {
                label: 'Популяция 2020 г',
                data: [1579302771, 1481935911, 526625791, 460580739, 507353391, 304924861, 390632261, 457826578, 342257519, 326451398],
                backgroundColor: 'rgba(255, 159, 64, 0.4)',
                borderWidth: 1,
                borderRadius: 3,
                borderColor: 'rgba(255, 159, 64, 0.9)'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: "bottom",

                labels: {
                    boxWidth: 50,
                    color: "black",
                    font: {
                        size: 24,
                        weight: "bold",
                        style: "italic"
                    }
                }
            },

            tooltip: {
                cornerRadius: 0,
                caretSize: 0,
                padding: 10,
                backgroundColor: 'black',
                borderColor: "gray",
                borderWidth: 5,
                titleMarginBottom: 4,
                titleFont: {
                    "weight": "bold",
                    "size": 22
                }
            },

            title: {
                display: true,
                text: 'Самые свежие данные',
                color: "black",
                font: {
                    "weight": "bold",
                    "size": 22
                }
            }

        },

    }
})

var lineChart = new Chart(ourLine, {
    type: 'line',
    data: {
        labels: ["Китай", "Индия", "США", "Индонезия", "Бразилия", "Пакистан", "Нигерия", "Бангладеш", "Россия", "Япония"],
        datasets: [
            {
                label: 'Популяция 2019 г',
                data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderColor: 'rgba(54, 162, 235, 0.9)'
            },
            {
                label: 'Популяция 2020 г',
                data: [1579302771, 1481935911, 526625791, 460580739, 507353391, 304924861, 390632261, 457826578, 342257519, 326451398],
                backgroundColor: 'rgba(255, 159, 64, 0.4)',
                borderWidth: 1,
                borderColor: 'rgba(255, 159, 64, 0.9)'
            }
        ]
    },
})

var linePie = new Chart(ourPie, {
//    type: 'doughnut', /* 'pie', */
    type: 'pie', /* 'pie', */
    data: {
        labels: [
            "Хирургия",
            "Стоматология",
            "Гинекология",
            "При родах, особенно после кесарева сечения",
            "Общая терапия",
            "Педиатрия",
            "Травматология",
            "Офтальмология",
            "Анестезиология",
            "Оказание скорой медицинской помощи"
        ],
        datasets: [
            {
                label: 'Доля врачебных ошибок по отраслям медицины',
                data: [
                    25,
                    15,
                    15,
                    15,
                    10,
                    5,
                    5,
                    5,
                    3,
                    2
                ],

                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(255, 159, 64, 0.3)',
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(153, 102, 255, 0.3)'
                ],

                borderWidth: 3,

                borderRadius: 3,

                borderColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ]
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                position: "right",
            }
        }
    }
})