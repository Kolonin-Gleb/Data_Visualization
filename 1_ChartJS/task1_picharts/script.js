// TODO: Можно ли переписать этот код с циклом для создания неограниченного числа объектов по строкам в df?

var pie1 = $("#chartPie1");
var pie2 = $("#chartPie2");
var pie3 = $("#chartPie3");
var pie4 = $("#chartPie4");


// Шаблон конструктора объекта.
// Данные в него нужно будет подставлять динамически.

var linePie1 = new Chart(pie1, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    data: [sector1[0], sector2[0], sector3[0]],
    
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)'
                    ],
    
                    borderWidth: 3,
                    borderRadius: 3,
    
                    borderColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                    ]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: "right",
                },
                title: {
                    display: true,
                    text: years[0],
                    font: {
                        "weight": "bold",
                        "size": 22
                    }
                }
            }
        }
    })
    //////////////////////////////////////////////////////////////
    var linePie2 = new Chart(pie2, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    data: [sector1[1], sector2[1], sector3[1]],
    
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)'
                    ],
    
                    borderWidth: 3,
                    borderRadius: 3,
    
                    borderColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                    ]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: "right",
                },
                title: {
                    display: true,
                    text: years[1],
                    font: {
                        "weight": "bold",
                        "size": 22
                    }
                }
            }
        }
    })
    //////////////////////////////////////////////////////////////
    var linePie3 = new Chart(pie3, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    data: [sector1[2], sector2[2], sector3[2]],
    
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)'
                    ],
    
                    borderWidth: 3,
                    borderRadius: 3,
    
                    borderColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                    ]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: "right",
                },
                title: {
                    display: true,
                    text: years[2],
                    font: {
                        "weight": "bold",
                        "size": 22
                    }
                }
            }
        }
    })
    //////////////////////////////////////////////////////////////
    var linePie4 = new Chart(pie4, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    data: [sector1[3], sector2[3], sector3[3]],
    
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)'
                    ],
    
                    borderWidth: 3,
                    borderRadius: 3,
    
                    borderColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                    ]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: "right",
                },
                title: {
                    display: true,
                    text: years[3],
                    font: {
                        "weight": "bold",
                        "size": 22
                    }
                }
            }
        }
    })
    //////////////////////////////////////////////////////////////
    