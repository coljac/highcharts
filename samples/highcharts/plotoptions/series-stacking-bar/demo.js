Highcharts.chart('container', {
    chart: {
        type: 'bar',
        marginLeft: 50,
        marginBottom: 90
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ],
        labels: {
            padding: 0
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    series: [{
        data: [
            29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
            95.6, 54.4
        ]
    }, {
        data: [
            144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5,
            106.4, 129.2
        ]
    }]
});