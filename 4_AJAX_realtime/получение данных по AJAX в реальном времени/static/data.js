popBarId = $("#pop");

popBar = new Chart(popBarId, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Последние 10 значений от датчика',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
                borderColor: 'rgba(255, 99, 132, 1)'
            },
        ]
    },
});

// Получить информацию о конкретном пользователе
function getData(pb)
{
    $.ajax({
        url: '/get_data',
        type: 'POST',
        dataType: 'json',
        data: {
            key: "akljsdhfasdhfkjhasd"
        },
        success: function (data) {
            console.log(data);
            pb.data.datasets[0].data = data[1];
            pb.data.labels = data[0];
            pb.update();
        },
        error: function(jqxhr, status, errorMsg) {
            console.log('Ошибка при взаимодействии с сервером: '+errorMsg);
        }
    });
}

// Код, который выполняется после того, как страница загрузилась
$(function() {
    console.log("loading done");

    getData(popBar);

    t = setInterval(
        () => {
            getData(popBar);
        },
        2 * 1000
    );



});