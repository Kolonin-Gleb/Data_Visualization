var ourBar = $("#chartBar");

var barChart = new Chart(ourBar, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Популяция',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'rgba(54, 162, 235, 0.9)'
            }
        ]
    },
})


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
            barChart.data.labels = data[0];
            barChart.data.datasets[0].data = data[1];
            barChart.update();
        },
        error: function(jqxhr, status, errorMsg) {
            console.log('Ошибка при взаимодействии с сервером: '+errorMsg);
        }
    });
}

// Код, который выполняется после того, как страница загрузилась
$(function() {
    console.log('loading done');
    getData();
});