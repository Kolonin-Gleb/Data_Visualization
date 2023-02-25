var ourCanvas = $("#ourChart");


var chartElement = new Chart(ourCanvas, {
    type: 'bar',
    data: {
        labels: countrties_list,
        datasets: [
            {
                label: 'Популяция в 2019 году',
                data: population,
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(54, 162, 235, 0.9)'
            }
        ]
    }
});
