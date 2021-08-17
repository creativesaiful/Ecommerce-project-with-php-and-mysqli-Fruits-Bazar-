'use strict';

$(document).ready(function() {
    widgetChart();
    function widgetChart() {
        $("#tax-deduction-graph").peity("bar", {
            fill: ["#4680ff"],
            padding: 0.3,
        });

        $("#revenue-generate-graph").peity("bar", {
            fill: ["#FFB64D"],
            padding: 0.3,
        });

        var chart = AmCharts.makeChart("line-example", {
            "type": "serial",
            "marginTop": 0,
            "hideCredits": true,
            "marginRight": 0,
            "dataProvider": [{
                    "year": "Jan",
                    "v1": 0.5,
                    "v2": 1.5
                },
                {
                    "year": "Feb",
                    "v1": 1.5,
                    "v2": 1
                },
                {
                    "year": "Mar",
                    "v1": 1,
                    "v2": 2.5
                },
                {
                    "year": "Apr",
                    "v1": 2,
                    "v2": 1
                },
                {
                    "year": "May",
                    "v1": 1.5,
                    "v2": 2.5
                },
                {
                    "year": "Jun",
                    "v1": 4,
                    "v2": 3
                },
                {
                    "year": "Jul",
                    "v1": 3,
                    "v2": 3.5
                },
                {
                    "year": "Aug",
                    "v1": 5,
                    "v2": 3.5
                },
                {
                    "year": "Sap",
                    "v1": 4,
                    "v2": 5.5
                },
            ],
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
                "lineThickness": 1,
                "negativeLineColor": "#4680ff",
                "type": "smoothedLine",
                "valueField": "v1"
            }, {
                "id": "g2",
                "bullet": "round",
                "bulletSize": 9,
                "lineColor": "#93BE52",
                "lineThickness": 1,
                "negativeLineColor": "#93BE52",
                "type": "smoothedLine",
                "valueField": "v2"
            }],
            "chartCursor": {
                "cursorAlpha": 0,
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
        var chart = AmCharts.makeChart("visitor-graph", {
            "type": "serial",
            "hideCredits": true,
            "theme": "light",
            "categoryField": "year",
            "rotate": true,
            "startDuration": 1,
            "categoryAxis": {
                "gridPosition": "start",
                "position": "left",
                "lineAlpha":0,
                "gridAlpha":0,
            },
            "trendLines": [],
            "graphs": [{
                    "balloonText": "Income:[[value]]",
                    "fillAlphas": 0.8,
                    "id": "AmGraph-1",
                    "lineAlpha": 0.2,
                    "title": "Income",
                    "type": "column",
                    // "fillColors": "#9BBAFF",
                    "fillColors": "#fc6180",
                    "valueField": "income"
                },
                {
                    "balloonText": "Expenses:[[value]]",
                    "fillAlphas": 0.8,
                    "id": "AmGraph-2",
                    "lineAlpha": 0.2,
                    "title": "Expenses",
                    "type": "column",
                    "fillColors": "#FFB64D",
                    "valueField": "expenses"
                }
            ],
            "guides": [],
            "valueAxes": [{
                "id": "ValueAxis-1",

                "axisAlpha": 0
            }],
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [{
                    "year": 2005,
                    "income": 23.5,
                    "expenses": 18.1
                },
                {
                    "year": 2006,
                    "income": 26.2,
                    "expenses": 22.8
                },
                {
                    "year": 2007,
                    "income": 28.0,
                    "expenses": 23.9
                },
                {
                    "year": 2008,
                    "income": 23.5,
                    "expenses": 25.1
                },
                {
                    "year": 2009,
                    "income": 24.6,
                    "expenses": 25
                },
                {
                    "year": 2010,
                    "income": 20.6,
                    "expenses": 22
                },
                {
                    "year": 2011,
                    "income": 23,
                    "expenses": 26
                }
            ],
        });
        /*donut chart*/
        var $window = $(window);
        var windowHeight = $(window).innerHeight();
        if ($window.width() >= 767) {
            var chart = c3.generate({
                bindto: '#orderstatus',
                size: {
                    height: 200,
                },
                data: {
                    columns: [
                        ['Delevered', 12],
                        ['Panding', 6],
                        ['Conformed', 6],
                    ],
                    type: 'donut',
                },
                color: {
                    pattern: ['#4680FE', '#FFB64D', '#FC6180']
                },
                donut: {
                    title: "Order Status",
                    label: {
                        threshold: 1
                    }
                },
                legend: {
                    position: 'right'
                }
            });
        } else {
            var chart = c3.generate({
                bindto: '#orderstatus',
                size: {
                    height: 200,
                },
                data: {
                    columns: [
                        ['Delevered', 12],
                        ['Panding', 6],
                        ['Conformed', 6],
                    ],
                    type: 'donut',
                },
                color: {
                    pattern: ['#4680FE', '#FFB64D', '#FC6180']
                },
                donut: {
                    title: "Order Status",
                    label: {
                        threshold: 1
                    }
                },
                legend: {

                }
            });
        }

        var barw = $("#total-value-graph-4").width();
        $("#total-value-graph-4").sparkline([5, 6, 7, 4, 9, 5, 7, 5, 6, 8, 6, 5, 8, 4, 9, 5, 7, 5, 6, 8, 6, 5, 0], {
            type: 'bar',
            barWidth: barw / 24,
            height: '100px',
            tooltipClassname: 'chart-sparkline',
            barColor: '#e99f36'
        });
        // visitor
        // var data1 = [{
        //     label: "Sales & Marketing",
        //     data: 30,
        //     color: "#4680FE"
        // }, {
        //     label: "Information",
        //     data: 17,
        //     color: "#93BE52"
        // }, {
        //     label: "Product Design",
        //     data: 13,
        //     color: "#FFB64D"
        // }, {
        //     label: "Packaging",
        //     data: 8,
        //     color: "#FC6180"
        // }];
        // $.plot('#visitoranalsis', data1, {
        //     series: {
        //         pie: {
        //             innerRadius: 0.5,
        //             show: true
        //         }
        //     },
        //     legend: {
        //         show: false
        //     }
        // });

        $("span.pie_1").peity("pie", {
            fill: ["#D9D9D9", "#4680FE"]
        });
        $("span.pie_2").peity("pie", {
            fill: ["#D9D9D9", "#FC6180"]
        });
        $("span.pie_3").peity("pie", {
            fill: ["#D9D9D9", "#93BE52"]
        });
        $("span.pie_4").peity("pie", {
            fill: ["#D9D9D9", "#FFB64D"]
        });
        $("span.pie_5").peity("pie", {
            fill: ["#D9D9D9", "#69CEC6"]
        });
        $("span.last-week-report").peity("pie", {
            fill: ["#4680FE", "#93BE52", "#FC6180", "#FFB64D"]
        });
        $("span.last-month-report").peity("pie", {
            fill: ["#4680FE", "#93BE52", "#FC6180", "#FFB64D"]
        });
        /*updating chart*/
        var updatingChart1 = $("span.visitor1").peity("line", {
            fill: "rgba(70, 128, 254,0.2)",
            stroke: "rgb(70, 128, 254)"
        });
        var updatingChart2 = $("span.visitor2").peity("line", {
            fill: "rgba(252, 97, 128,0.2)",
            stroke: "rgb(252, 97, 128)"
        });
        var updatingChart3 = $("span.visitor3").peity("line", {
            fill: "rgba(147, 190, 82,0.2)",
            stroke: "rgb(147, 190, 82)"
        });
        var updatingChart4 = $("span.visitor4").peity("line", {
            fill: "rgba(255, 182, 77,0.2)",
            stroke: "rgb(255, 182, 77)"
        });
        var updatingChart5 = $("span.visitor5").peity("line", {
            fill: "rgba(254, 138, 125,0.2)",
            stroke: "rgb(254, 138, 125)"
        });

        $("span.order-graph").peity("pie", {
            fill: ["#ccc", "#FC6180"]
        });

        var gaugeChart = AmCharts.makeChart("solid-gauge", {
            "type": "gauge",
            "hideCredits": true,
            "theme": "light",
            "axes": [{
                "axisAlpha": 0,
                "tickAlpha": 0,
                "labelsEnabled": false,
                "startValue": 0,
                "endValue": 100,
                "startAngle": 0,
                "endAngle": 360,
                "bands": [{
                    "color": "#f4f4f4",
                    "startValue": 0,
                    "endValue": 100,
                    "radius": "100%",
                    "innerRadius": "97%"
                }, {
                    "color": "#4680FE",
                    "startValue": 0,
                    "endValue": 60,
                    "radius": "100%",
                    "innerRadius": "97%"
                }, {
                    "color": "#f4f4f4",
                    "startValue": 0,
                    "endValue": 100,
                    "radius": "70%",
                    "innerRadius": "67%"
                }, {
                    "color": "#FC6180",
                    "startValue": 0,
                    "endValue": 50,
                    "radius": "70%",
                    "innerRadius": "67%"
                }, {
                    "color": "#f4f4f4",
                    "startValue": 0,
                    "endValue": 100,
                    "radius": "40%",
                    "innerRadius": "37%"
                }, {
                    "color": "#FFB64D",
                    "startValue": 0,
                    "endValue": 25,
                    "radius": "40%",
                    "innerRadius": "37%"
                }]
            }],
            "export": {
                "enabled": true
            }
        });


        $(function() {
            var chart = AmCharts.makeChart("sale-prediction", {
                "theme": "light",
                "hideCredits": true,
                "type": "gauge",
                "axes": [{
                    // inner circle
                    "id": "axis2",
                    "labelsEnabled": false,
                    "axisColor": "#fec5d0",
                    // "axisColor": "#FC6180",
                    "axisThickness": 60,
                    "axisAlpha": 1,
                    "tickAlpha": 0,
                    "radius": "10%",
                    "startAngle": -150,
                    "endAngle": 360,
                    "topTextFontSize": 15,
                    "topTextColor": "#000",
                    "topTextYOffset": 80,
                    "topText": ""
                }, {
                    "topTextFontSize": 1,
                    "topTextYOffset": 0,
                    "axisColor": "#31d6ea",
                    "axisThickness": 0,
                    "endValue": 100,
                    "gridInside": false,
                    "inside": true,
                    "radius": "50%",
                    "fontSize": 0,
                    "valueInterval": 100,
                    "tickAlpha": 0,
                    "startAngle": -150,
                    "endAngle": 150,
                    "unit": "%",
                    "bandOutlineAlpha": 0,
                    "bands": [{
                        "color": "#fec5d0",
                        "endValue": 100,
                        "innerRadius": "150%",
                        "radius": "170%",
                        "gradientRatio": [0],
                        "startValue": 0
                    }, {
                        "color": "#FC6180",
                        "endValue": 0,
                        "innerRadius": "150%",
                        "radius": "170%",
                        "gradientRatio": [0],
                        "startValue": 0
                    }]
                }],
                "arrows": [{
                    "alpha": 1,
                    "color": "#FC6180",
                    "innerRadius": "250%",
                    "nailRadius": 30,
                    "nailAlpha": 1,
                    "startWidth": 20,
                    "radius": "500%"
                }]
            });

            setInterval(randomValue, 2000);

            // set random value
            function randomValue() {
                var value = Math.round(Math.random() * 100);
                chart.arrows[0].setValue(value * 1.18);
                chart.axes[0].setTopText(value + " %");
                // adjust darker band to new value
                chart.axes[1].bands[1].setEndValue(value);
            }


        });
        $(function() {
            var chart = AmCharts.makeChart("gap-target", {
                "theme": "light",
                "hideCredits": true,
                "type": "gauge",
                "axes": [{
                    "topTextFontSize": 1,
                    "topTextYOffset": 0,
                    "topTextColor": "#fff",
                    "axisColor": "#31d6ea",
                    "axisThickness": 0,
                    "endValue": 100,
                    "gridInside": false,
                    "inside": true,
                    "radius": "50%",
                    "fontSize": 0,
                    "valueInterval": 100,
                    "tickAlpha": 0,
                    "startAngle": -90,
                    "endAngle": 90,
                    "unit": "%",
                    "bandOutlineAlpha": 0,
                    "bands": [{
                        "color": "#FC6180",
                        "endValue": 100,
                        "innerRadius": "105%",
                        "radius": "170%",
                        "gradientRatio": [0],
                        "startValue": 0
                    }, {
                        "color": "#4680FE",
                        "endValue": 0,
                        "innerRadius": "105%",
                        "radius": "170%",
                        "gradientRatio": [0],
                        "startValue": 0
                    }]
                }],
                "arrows": [{
                    "alpha": 1,
                    "innerRadius": "0%",
                    "startWidth": 5,
                    "nailRadius": 0,
                    "radius": "170%"
                }]
            });

            setInterval(randomValue, 2000);

            // set random value
            function randomValue() {
                var value = Math.round(Math.random() * 100);
                chart.arrows[0].setValue(value);
                chart.axes[0].setTopText(value + " %");
                document.getElementById("g-target").innerHTML = (value);
                document.getElementById("g-gap").innerHTML = (100 - value);
                chart.axes[0].bands[1].setEndValue(value);
            }
        });
        //  reconded change chart
        $(".dial").knob({
            draw: function() {
                // "tron" case
                if (this.$.data('skin') == 'tron') {
                    this.cursorExt = 0.3;
                    var a = this.arc(this.cv),
                        pa // Previous arc
                        , r = 1;
                    this.g.lineWidth = this.lineWidth;
                    if (this.o.displayPrevious) {
                        pa = this.arc(this.v);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                    this.g.stroke();
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
                    return false;
                }
            }
        });
    };
});



// ============================= chart.js ================================
var ctx = document.getElementById('power-card-chart1').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: buildchartjs('#4680ff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10]),
    options: buildchartoption(),
});
var ctx = document.getElementById('power-card-chart2').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: buildchartjs('#FFB64D', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45]),
    options: buildchartoption(),
});
var ctx = document.getElementById('power-card-chart3').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: buildchartjs('#93BE52', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10]),
    options: buildchartoption(),
});
var ctx = document.getElementById('client-map-1').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: buildchartjs('rgb(70, 128, 254)', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], 'rgba(70, 128, 254,0.2)'),
    options: buildchartoption(),
});
var ctx = document.getElementById('client-map-2').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: buildchartjs('rgb(252, 97, 128)', [35, 10, 35, 20, 47, 20, 15, 45, 15, 10], 'rgba(252, 97, 128,0.2)'),
    options: buildchartoption(),
});
var ctx = document.getElementById('client-map-3').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: buildchartjs('rgb(147, 190, 82)', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], 'rgba(147, 190, 82,0.2)'),
    options: buildchartoption(),
});
var ctx = document.getElementById('total-value-graph-1').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: buildchartjs('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#3a73f1'),
    options: buildchartoption(),
});
var ctx = document.getElementById('total-value-graph-2').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: buildchartjs('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#e55571'),
    options: buildchartoption(),
});
var ctx = document.getElementById('total-value-graph-3').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: buildchartjs('#fff', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], '#83a84c'),
    options: buildchartoption(),
});

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
