// Столбчатая диаграмма
var chartBar = $("#chartBar");

var chartElement = new Chart(chartBar, {
    type: 'bar',
    data: {
        labels: years,
        datasets: [
            {
                label: 'Worldwide IC Unit Shipment Growth',
                data: billions_of_units,
                backgroundColor: 'blue',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(54, 162, 235, 0.9)'
            }
        ]
    },
    options: {
        scales: {
            x: {
            display: true,
            title: {
                display: true,
                text: 'YEARS'

            }
            },
            y: {
            display: true,
            title: {
                display: true,
                text: 'BILLIONS OF UNITS'
            },
            suggestedMin: -10,
            suggestedMax: 200
            }
        }
    }
});

var chartPie = $("#chartPie");

// Круговая диаграмма
var linePie = new Chart(chartPie, {
    type: 'doughnut',
    data: {
        labels: companies,
        datasets: [
            {
                label: 'Доля врачебных ошибок по отраслям медицины',
                data: percents,

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
});

// Отчёт SQL
/*
В обоих вариантах используйте данные из таблицы vd_tsmc, которая находится в базе данных ithub
Постройте график или столбчатую диаграмму доходов компании TSMC по годам.
В одном столбце отражается реальный доход, во втором столбце - прогноз по доходу.Доход указан за кварталы.
Поэтому при отображении число месяца нужно преобразовать в номер квартала,
а день месяца (он везде 01) необходимо удалить.
*/

