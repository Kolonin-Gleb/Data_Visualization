chartBar_TSMC_id = $("#chartBar_TSMC");

chartBar_TSMC = new Chart(chartBar_TSMC_id, {
    type: 'bar',
    data: {
        labels: [], // Года + Кварталы
        datasets: [
            {
                label: 'Реальный доход',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
                borderColor: 'rgba(255, 99, 132, 1)'
            },
            {
                label: 'Прогнозируемый доход',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1,
                borderColor: 'rgba(54, 162, 235, 1)'
            }
        ]
    },
});

function getData()
{
    $.ajax({
        url: '/get_data',
        type: 'POST',
        dataType: 'json',
        data: {
            key: "Hn3nbdk4hjgsdfbksdfhs"
        },
        success: function (data) {
            console.log(data);

            var years = [];

            for (i=0; i < data[0].length; i++)
            {
                years.push(data[1][i].toString() + "г. " + data[0][i].toString() + "кв.");
            }
            
            chartBar_TSMC.data.labels = years;
            chartBar_TSMC.data.datasets[0].data = data[2];
            chartBar_TSMC.data.datasets[1].data = data[3];
            chartBar_TSMC.update();
        },
        error: function(jqxhr, status, errorMsg) {
            console.log('Ошибка при взаимодействии с сервером: '+errorMsg);
        }
    });
}

// Код, который выполняется после того, как страница загрузилась
$(function() {
    console.log("loading done");

    getData(chartBar_TSMC_id);

    t = setInterval(
        () => {
            getData(chartBar_TSMC_id);
        },
        2 * 1000
    );
});
