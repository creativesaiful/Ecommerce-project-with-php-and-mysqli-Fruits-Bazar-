'use strict';

$(document).ready(function() {

    widgetChart();

    function widgetChart() {
        var ctx = document.getElementById('design-graph-1').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildstackchartjs('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45]),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('design-graph-2').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildstackchartjs('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10]),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('design-graph-3').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildstackchartjs('#fff', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25]),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('client-map-1').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildchartjs('rgb(70, 128, 254)', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], 'rgba(70, 128, 254,0.2)'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('client-map-3').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildchartjs('rgb(147, 190, 82)', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], 'rgba(147, 190, 82,0.2)'),
            options: buildchartoption(),
        });
        //  viral Own js start
        function buildstackchartjs(a, b, f) {
            if (f == null) {
                f = "rgba(0,0,0,0)";
            }
            return {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "",
                    borderColor: a,
                    borderWidth: 1,
                    // lineTension: 0,
                    hitRadius: 30,
                    pointRadius: 1,
                    pointHoverRadius: 4,
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#fff").alpha(0.8).rgbString(),
                    pointBorderColor: Chart.helpers.color("#fff").alpha(0.8).rgbString(),
                    pointHoverBackgroundColor: a,
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: f,
                    data: b,
                }]
            };
        }

        function buildchartjs(a, b, f) {
            if (f == null) {
                f = "rgba(0,0,0,0)";
            }
            return {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "",
                    borderColor: a,
                    borderWidth: 2,
                    hitRadius: 30,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: a,
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: f,
                    data: b,
                }]
            };
        }

        function buildchartoption() {
            return {
                title: {
                    display: !1
                },
                tooltips: {
                    enabled: true,
                    intersect: !1,
                    mode: "nearest",
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: !1,
                    labels: {
                        usePointStyle: !1
                    }
                },
                responsive: !0,
                maintainAspectRatio: !0,
                hover: {
                    mode: "index"
                },
                scales: {
                    xAxes: [{
                        display: !1,
                        gridLines: !1,
                        scaleLabel: {
                            display: !0,
                            labelString: "Month"
                        }
                    }],
                    yAxes: [{
                        display: !1,
                        gridLines: !1,
                        scaleLabel: {
                            display: !0,
                            labelString: "Value"
                        },
                        ticks: {
                            beginAtZero: !0
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 0
                    }
                }
            };
        }
        var chart = AmCharts.makeChart("statestics-chart", {
            "type": "serial",
            "marginTop": 0,
            "hideCredits": true,
            "marginRight": 80,
            "dataProvider": [{
                "year": "Jan",
                "value": 0.98
            }, {
                "year": "Feb",
                "value": 1.87
            }, {
                "year": "Mar",
                "value": 0.97
            }, {
                "year": "Apr",
                "value": 1.64
            }, {
                "year": "May",
                "value": 0.40
            }, {
                "year": "Jun",
                "value": 2.90
            }, {
                "year": "Jul",
                "value": 5.2
            }, {
                "year": "Aug",
                "value": 0.77
            }, {
                "year": "Sap",
                "value": 3.1
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "dashLength": 6,
                "gridAlpha": 0.1,
                "position": "left"
            }],
            "graphs": [{
                "id": "g1",
                "bullet": "round",
                "bulletSize": 9,
                "lineColor": "#4680ff",
                "lineThickness": 2,
                "negativeLineColor": "#4680ff",
                "type": "smoothedLine",
                "valueField": "value"
            }],
            "chartCursor": {
                "cursorAlpha": 0,
                "cursorColor": '#FC6180',
                "valueLineEnabled": false,
                "valueLineBalloonEnabled": true,
                "valueLineAlpha": false,
                "fullWidth": true
            },
            "categoryField": "year",
            "categoryAxis": {
                "gridAlpha": 0,
                "axisAlpha": 0,
                "fillAlpha": 1,
                "fillColor": "#FAFAFA",
                "minorGridAlpha": 0,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            }
        });

        var chart = c3.generate({
            bindto: '#invoice',
            size: {
                height: 300,
            },
            data: {
                columns: [
                    ['Sent', 12],
                    ['In Review', 3],
                    ['Cancled', 9],
                ],
                type: 'donut',
            },
            color: {
                pattern: ['#4680ff', '#FFB64D', '#FC6180']
            },
            donut: {
                label: {
                    threshold: 1
                }
            }
        });

        // Project Overview start
        var chart = c3.generate({
            bindto: '#project-overview-chart',
            data: {
                // iris data from R
                columns: [
                    ['data1', 80],
                    ['data2', 130],
                    ['data3', 130],


                ],
                type: 'pie',
            },
            legend: {
                show: false
            },
            color: {
                pattern: ['#fb6180', '#4680ff', '#f3b967']
            }

        });
        var updatingChart1 = $("#project-over-sub-1").peity("line", {
           fill: "rgba(70, 128, 254,0.2)",
           stroke: "rgb(70, 128, 254)"
       });
       var updatingChart1 = $("#project-over-sub-2").peity("line", {
           fill: "rgba(252, 97, 128,0.2)",
           stroke: "rgb(252, 97, 128)"
       });
       var updatingChart1 = $("#project-over-sub-3").peity("line", {
           fill: "rgba(255, 182, 77,0.2)",
           stroke: "rgb(255, 182, 77)"
       });
        // Project Ovewview Ends

    };
});
