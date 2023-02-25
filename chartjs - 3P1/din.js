var popBarId = $("#pop");


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
                borderColor: 'rgba(255, 99, 132, 1)'
            },
        ]
    },

})


$('#2019').click(function () {
    console.log('2019');
    $('#2020').removeClass('btn-secondary');
    $('#2021').removeClass('btn-primary');
    $('#2020').addClass('btn-primary');
    $('#2021').addClass('btn-secondary');

    popBar.data.datasets[0].data = [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398];
    popBar.data.datasets[0].backgroundColor = 'rgba(255, 99, 132, 0.2)';
    popBar.data.datasets[0].borderColor = 'rgba(255, 99, 132, 1)';
    popBar.data.datasets[0].label = 'Популяция 2019 г';
    popBar.update();
});

$('#2020').click(function () {
    console.log('2020');
    $('#2021').removeClass('btn-secondary');
    $('#2020').removeClass('btn-primary');
    $('#2021').addClass('btn-primary');
    $('#2020').addClass('btn-secondary');

    popBar.data.datasets[0].data = [1259302771, 1151935911, 506625791, 450580739, 297353391, 284924861, 270632261, 147826578, 132257519, 106451398];
    popBar.data.datasets[0].backgroundColor = 'rgba(54, 162, 235, 0.2)';
    popBar.data.datasets[0].borderColor = 'rgba(54, 162, 235, 1)';
    popBar.data.datasets[0].label = 'Популяция 2020 г';

    popBar.update();
});