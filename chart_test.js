var ctx = document.getElementById('myChart').getContext('2d');
var a1 = 12
var a2 = 19
var a3 = 3
var a4 = 5
var a5 = 2
var a6 = 3

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [a1, a2, a3, a4, a5, a6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var locator = document.getElementById('dount').getContext('2d')
var pizzaChart = new Chart(locator, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [40, 60],
            backgroundColor: [
                'rgba(19, 181, 234, 0.7)', 
                'rgba(234, 51, 19, 0.7)']
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Resolvidos',
            'Não resolvidos',
        ]
    },

})

