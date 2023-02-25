var popBarId = $("#pop");
var popLineId = $("#line");
var popPieId = $("#pie");

/* Chart.defaults.font.family = "Lato"; */
Chart.defaults.font.size = 16;
/* Chart.defaults.color = "blue"; */

var popBar = new Chart(popBarId, {
    type: 'bar',
    data: {
        labels: ["Китай", "Индия", "США", "Индонезия", "Бразилия", "Пакистан", "Нигерия", "Бангладеш", "Россия", "Япония"],
        datasets: [
            {
                label: 'Популяция 2019 г',
                data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
                borderColor: 'rgba(255, 99, 132, 1)'         },
            {
                label: 'Популяция 2020 г',
                data: [1359302771, 1251935911, 306625791, 250580739, 197353391, 184924861, 170632261, 147826578, 132257519, 106451398],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1,
                borderColor: 'rgba(54, 162, 235, 1)'
            }
        ]
    },
    options: {
/*        indexAxis: 'y', */
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 50,
                    color: "black",
                    font: {
                        size: 20,
                        /* weight: "bold",
                        style: "italic" */
                    }
                }
            }
        }
    }

})


var lineBar = new Chart(popLineId, {
    type: 'line',
    data: {
        labels: ["Китай", "Индия", "США", "Индонезия", "Бразилия", "Пакистан", "Нигерия", "Бангладеш", "Россия", "Япония"],
        datasets: [
            {
                label: 'Популяция 2019 г',
                data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
                borderColor: 'rgba(255, 99, 132, 1)'
            },

        ]
    },
    options: {
        /*        indexAxis: 'y', */
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 50,
                    color: "black",
                    font: {
                        size: 20,
                        /* weight: "bold",
                        style: "italic" */
                    }
                }
            }
        }
    }

})




var pieBar = new Chart(popPieId, {
    type: 'doughnut',
    data: {
        labels: ["Хирургия",
            "Стоматология",
            "Гинекология",
            "При родах, особенно после кесарева сечения",
            "Общая терапия",
            "Педиатрия",
            "Травматология",
            "Офтальмология",
            "Анестезиология",
            "Оказание скорой медицинской помощи",
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
                backgroundColor: [ 'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)' ]
            },

        ]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: "right",
            }
        }
    }
})