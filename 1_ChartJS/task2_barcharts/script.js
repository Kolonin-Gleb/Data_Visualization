var ourBar = $("#chartBar");

var barChart = new Chart(ourBar, {
    type: 'bar',
    data: {
        labels: countries,
        datasets: [
            {
                label: 'Популяция 2019 г',
                data: year2019,
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 3,
                borderColor: 'rgba(54, 162, 235, 0.9)'
            },
            {
                label: 'Популяция 2020 г',
                data: year2020,
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
            }
        },
    }
})
