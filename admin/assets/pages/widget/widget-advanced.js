'use strict';

$(document).ready(function() {
    widgetChart();

    /*Area chart*/
    function widgetChart() {

        var chart = AmCharts.makeChart("visitor-list-graph", {
            "type": "serial",
            "hideCredits": true,
            "theme": "light",
            "dataDateFormat": "YYYY-MM-DD",
            "precision": 2,
            "valueAxes": [{
                "id": "v1",
                "title": "Visitors",
                "position": "left",
                "autoGridCount": false,
                "labelFunction": function(value) {
                    return "$" + Math.round(value) + "M";
                }
            }, {
                "id": "v2",
                "title": "New Visitors",
                "gridAlpha": 0,
                "position": "right",
                "autoGridCount": false
            }],
            "graphs": [{
                "id": "g3",
                "valueAxis": "v1",
                "lineColor": "#9BBAFF",
                "fillColors": "#9BBAFF",
                "fillAlphas": 1,
                "type": "column",
                "title": "old Visitor",
                "valueField": "sales2",
                "clustered": false,
                "columnWidth": 0.5,
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
            }, {
                "id": "g4",
                "valueAxis": "v1",
                "lineColor": "#4680ff",
                "fillColors": "#4680ff",
                "fillAlphas": 1,
                "type": "column",
                "title": "New visitor",
                "valueField": "sales1",
                "clustered": false,
                "columnWidth": 0.3,
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
            }, {
                "id": "g1",
                "valueAxis": "v2",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "lineColor": "#93be52",
                "type": "smoothedLine",
                "title": "Last Month Visitor",
                "useLineColorForBulletBorder": true,
                "valueField": "market1",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
            }, {
                "id": "g2",
                "valueAxis": "v2",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "lineColor": "#FC6180",
                // "type": "smoothedLine",
                "dashLength": 5,
                "title": "Average Visitor",
                "useLineColorForBulletBorder": true,
                "valueField": "market2",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
            }],
            "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 0,
                "valueLineAlpha": 0.2
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "legend": {
                "useGraphSettings": true,
                "position": "top"
            },
            "balloon": {
                "borderThickness": 1,
                "cornerRadius": 5,
                "shadowAlpha": 0
            },
            "dataProvider": [{
                "date": "2013-01-16",
                "market1": 71,
                "market2": 75,
                "sales1": 5,
                "sales2": 8
            }, {
                "date": "2013-01-17",
                "market1": 74,
                "market2": 78,
                "sales1": 4,
                "sales2": 6
            }, {
                "date": "2013-01-18",
                "market1": 78,
                "market2": 88,
                "sales1": 5,
                "sales2": 2
            }, {
                "date": "2013-01-19",
                "market1": 85,
                "market2": 89,
                "sales1": 8,
                "sales2": 9
            }, {
                "date": "2013-01-20",
                "market1": 82,
                "market2": 89,
                "sales1": 9,
                "sales2": 6
            }, {
                "date": "2013-01-21",
                "market1": 83,
                "market2": 85,
                "sales1": 3,
                "sales2": 5
            }, {
                "date": "2013-01-22",
                "market1": 88,
                "market2": 92,
                "sales1": 5,
                "sales2": 7
            }, {
                "date": "2013-01-23",
                "market1": 85,
                "market2": 90,
                "sales1": 7,
                "sales2": 6
            }, {
                "date": "2013-01-24",
                "market1": 85,
                "market2": 91,
                "sales1": 9,
                "sales2": 5
            }, {
                "date": "2013-01-25",
                "market1": 80,
                "market2": 84,
                "sales1": 5,
                "sales2": 8
            }, {
                "date": "2013-01-26",
                "market1": 87,
                "market2": 92,
                "sales1": 4,
                "sales2": 8
            }, {
                "date": "2013-01-27",
                "market1": 84,
                "market2": 87,
                "sales1": 3,
                "sales2": 4
            }, {
                "date": "2013-01-28",
                "market1": 83,
                "market2": 88,
                "sales1": 5,
                "sales2": 7
            }, {
                "date": "2013-01-29",
                "market1": 84,
                "market2": 87,
                "sales1": 5,
                "sales2": 8
            }, {
                "date": "2013-01-30",
                "market1": 81,
                "market2": 85,
                "sales1": 4,
                "sales2": 7
            }]
        });

        //statetics-graph1 update 2
        $(function() {

            // We use an inline data source in the example, usually data would
            // be fetched from a server

            var data = [],
                totalPoints = 300;

            function getRandomData() {

                if (data.length > 0)
                    data = data.slice(1);

                // Do a random walk

                while (data.length < totalPoints) {

                    var prev = data.length > 0 ? data[data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;

                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    data.push(y);
                }

                // Zip the generated y values with the x values

                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]])
                }

                return res;
            }

            // Set up the control widget

            var updateInterval = 30;
            $("#updateInterval").val(updateInterval).change(function() {
                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    if (updateInterval < 1) {
                        updateInterval = 1;
                    } else if (updateInterval > 2000) {
                        updateInterval = 2000;
                    }
                    $(this).val("" + updateInterval);
                }
            });


            //STATETICS chart start
            var plot = $.plot("#statetics-graph1", [getRandomData()], {
                series: {
                    shadowSize: 0, // Drawing is faster without shadows
                    color: '#FC6180',
                },
                lines: {
                    fill: true,
                    fillColor: 'rgba(252, 97, 128, 0.25)',
                    borderWidth: 0,
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 0,
                    axisMargin: 0,
                    minBorderMargin: 0,
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    show: true,
                },
                xaxis: {
                    show: false,
                }
            });

            //STATETICS chart Ends
            function update() {

                plot.setData([getRandomData()]);

                // Since the axes don't change, we don't need to call plot.setupGrid()

                plot.draw();
                setTimeout(update, updateInterval);
            }

            update();

        });

        //real-time update 3
        $(function() {

            // We use an inline data source in the example, usually data would
            // be fetched from a server

            var data = [],
                totalPoints = 300;

            function getRandomData() {

                if (data.length > 0)
                    data = data.slice(1);

                // Do a random walk

                while (data.length < totalPoints) {

                    var prev = data.length > 0 ? data[data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;

                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    data.push(y);
                }

                // Zip the generated y values with the x values

                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]])
                }

                return res;
            }

            // Set up the control widget

            var updateInterval = 30;
            $("#updateInterval").val(updateInterval).change(function() {
                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    if (updateInterval < 1) {
                        updateInterval = 1;
                    } else if (updateInterval > 2000) {
                        updateInterval = 2000;
                    }
                    $(this).val("" + updateInterval);
                }
            });


            // statetics purchase start
            var plot = $.plot("#statetics-purchase1", [getRandomData()], {
                series: {
                    shadowSize: 0, // Drawing is faster without shadows
                    color: '#e0e0e0',

                },
                lines: {
                    fill: true,
                    fillColor: '#f5f5f5',
                    borderWidth: 1,
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 0,
                    axisMargin: 0,
                    minBorderMargin: 0,
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    show: false,
                },
                xaxis: {
                    show: false,
                }
            });

            //STATETICS chart Ends
            function update() {

                plot.setData([getRandomData()]);

                // Since the axes don't change, we don't need to call plot.setupGrid()

                plot.draw();
                setTimeout(update, updateInterval);
            }

            update();

        });
        $(function() {

            // We use an inline data source in the example, usually data would
            // be fetched from a server

            var data = [],
                totalPoints = 300;

            function getRandomData() {

                if (data.length > 0)
                    data = data.slice(1);

                // Do a random walk

                while (data.length < totalPoints) {

                    var prev = data.length > 0 ? data[data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;

                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    data.push(y);
                }

                // Zip the generated y values with the x values

                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]])
                }

                return res;
            }

            // Set up the control widget

            var updateInterval = 30;
            $("#updateInterval").val(updateInterval).change(function() {
                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    if (updateInterval < 1) {
                        updateInterval = 1;
                    } else if (updateInterval > 2000) {
                        updateInterval = 2000;
                    }
                    $(this).val("" + updateInterval);
                }
            });

            var plot = $.plot("#realtimeupdate", [getRandomData()], {
                series: {
                    shadowSize: 0, // Drawing is faster without shadows
                    color: '#FFB64D',
                },
                lines: {
                    fill: true,
                    fillColor: '#FFB64D',
                    borderWidth: 0,
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 0,
                    axisMargin: 0,
                    minBorderMargin: 0,
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    show: false,
                },
                xaxis: {
                    show: false,
                }
            });

            function update() {

                plot.setData([getRandomData()]);

                // Since the axes don't change, we don't need to call plot.setupGrid()

                plot.draw();
                setTimeout(update, updateInterval);
            }

            update();

        });

        //real-time update 4
        $(function() {

            // We use an inline data source in the example, usually data would
            // be fetched from a server

            var data = [],
                totalPoints = 300;

            function getRandomData() {

                if (data.length > 0)
                    data = data.slice(1);

                // Do a random walk

                while (data.length < totalPoints) {

                    var prev = data.length > 0 ? data[data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;

                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    data.push(y);
                }

                // Zip the generated y values with the x values

                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]])
                }

                return res;
            }

            // Set up the control widget

            var updateInterval = 30;
            $("#updateInterval").val(updateInterval).change(function() {
                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    if (updateInterval < 1) {
                        updateInterval = 1;
                    } else if (updateInterval > 2000) {
                        updateInterval = 2000;
                    }
                    $(this).val("" + updateInterval);
                }
            });


            // statetics purchase start
            var plot = $.plot("#statetics-rate1", [getRandomData()], {
                series: {
                    shadowSize: 0, // Drawing is faster without shadows
                    color: '#e0e0e0',
                },
                lines: {
                    fill: true,
                    fillColor: '#f5f5f5',
                    borderWidth: 1,
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 0,
                    axisMargin: 0,
                    minBorderMargin: 0,
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    show: false,
                },
                xaxis: {
                    show: false,
                }
            });
            //STATETICS chart Ends
            function update() {

                plot.setData([getRandomData()]);

                // Since the axes don't change, we don't need to call plot.setupGrid()

                plot.draw();
                setTimeout(update, updateInterval);
            }

            update();

        });

        var chart = AmCharts.makeChart("last-week-sales", {
            "type": "serial",
            "theme": "light",
            "hideCredits": true,
            "marginRight": 0,
            "marginLeft": 0,
            "autoMarginOffset": 0,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "lineAlpha": 0,
                "gridAlpha": 0,
                "fontSize": 0,
                "position": "left",
                "ignoreAxisWidth": true
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                "id": "g1",
                "balloon": {
                    "drop": true,
                    "adjustBorderColor": false,
                    "color": "#FC6180",
                    "type": "smoothedLine"
                },
                "fillAlphas": 0,
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "type": "smoothedLine",
                "lineColor": "#fff",
                "title": "red line",
                "useLineColorForBulletBorder": true,
                "valueField": "value",
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            }],
            "chartCursor": {
                "valueLineEnabled": false,
                "valueLineBalloonEnabled": false,
                "cursorAlpha": 0,
                "cursorColor": "#fff",
                "color": "#FC6180",
                "zoomable": false,
                "valueZoomable": false,
                "valueLineAlpha": 0.5
            },
            "categoryField": "date",
            "categoryAxis": {
                "startOnAxis": true,
                "parseDates": false,
                "dashLength": 1,
                "minorGridEnabled": false,
                "axisAlpha": 0,
                "parseDates": true,
                "color": '#fff',
                "inside": true,
                "lineAlpha": 0,
                "gridAlpha": 0,
            },
            "dataProvider": [{
                "date": "2012-11-19",
                "value": 87
            }, {
                "date": "2012-11-20",
                "value": 83
            }, {
                "date": "2012-11-21",
                "value": 85
            }, {
                "date": "2012-11-22",
                "value": 81
            }, {
                "date": "2012-11-23",
                "value": 82
            }, {
                "date": "2012-11-24",
                "value": 79
            }, {
                "date": "2012-11-25",
                "value": 73
            }, {
                "date": "2012-11-26",
                "value": 75
            }, {
                "date": "2012-11-27",
                "value": 71
            }]
        });
    };
});



$(document).ready(function() {
    widgetChart();

    function widgetChart() {
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
                "lineAlpha": 0,
                "gridAlpha": 0,
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
var ctx = document.getElementById('total-value-graph-4').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: buildchartjs('#FFB64D', [25, 35, 45, 20, 25, 30, 15, 45, 15, 1], '#E99F36'),
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


$(document).ready(function() {

    widgetChart();

    /*Area chart*/
    function widgetChart() {

        var ctx = document.getElementById('stock-price-chart').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildchartjs('#FC6180', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10]),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('order-card-chart1').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildchartjs('#4680FE', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10]),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('order-card-chart2').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildchartjs('#FC6180', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45]),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('order-card-chart3').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildchartjs('#FFB64D', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10]),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('summary').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: buildchartjs('#93BE52', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25]),
            options: buildchartoption(),
        });
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

        //  viral Own js end


        // Fees collection
        var chart = AmCharts.makeChart("fees-collection", {
            "theme": "light",
            "type": "serial",
            "hideCredits": true,
            "startDuration": 2,
            "dataProvider": [{
                "country": "Collection",
                "visits": 4025,
                "color": " #4680ff"
            }, {
                "country": "Fees",
                "visits": 3782,
                "color": "#FC6180"

            }, {
                "country": "Expence",
                "visits": 3586,
                "color": "#FFB64D"

            }],
            "valueAxes": [{
                "position": "left",
                "axisAlpha": 0,
                "title": ""
            }],
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 1,
                "axisAlpha": 1,
                "lineAlpha": 0.1,
                "type": "column",
                "columnWidth": 0.5,
                "valueField": "visits"
            }],
            "depth3D": 0,
            "angle": 0,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "labelRotation": 0
            },
            "export": {
                "enabled": true
            }
        });

    

        // website Traffic
        var chart = AmCharts.makeChart("website-traffic", {
            "theme": "light",
            "type": "serial",
            "hideCredits": true,
            "startDuration": 2,
            "dataProvider": [{
                "country": "Collection",
                "visits": 3586,
                "color": " #4680ff"
            }, {
                "country": "Fees",
                "visits": 3782,
                "color": "#FC6180"

            }, {
                "country": "Expence",
                "visits": 4025,
                "color": "#FFB64D"

            }],
            "valueAxes": [{
                "position": "left",
                "gridAlpha": 0,
                "axisAlpha": 0,
                "labelsEnabled": false,
                "title": ""
            }],
            "graphs": [{
                "balloonText": "",
                "fillColorsField": "color",
                "fillAlphas": 1,
                "axisAlpha": 1,
                "lineAlpha": 0.1,
                "type": "column",
                "columnWidth": 0.5,
                "valueField": "visits"
            }],
            "depth3D": 0,
            "angle": 0,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "labelsEnabled": false,
                "gridAlpha": 0,
                "labelRotation": 0
            },
            "export": {
                "enabled": true
            }
        });

        var chart = AmCharts.makeChart("Servey-chart", {
            "type": "serial",
            "hideCredits": true,
            "theme": "light",
            "dataProvider": [{
                "name": "Mon",
                "points": 5,
                "color": "#cccccc",
            }, {
                "name": "Tue",
                "points": 8,
                "color": "#cccccc",
            }, {
                "name": "Wed",
                "points": 7,
                "color": "#cccccc",
            }, {
                "name": "Thu",
                "points": 6,
                "color": "#cccccc",
            }, {
                "name": "Fri",
                "points": 8,
                "color": "#cccccc",
            }, {
                "name": "Sat",
                "points": 9,
                "color": "#93BE52",
            }, {
                "name": "Sun",
                "points": 10,
                "color": "#93BE52",
            }],
            "valueAxes": [{
                "maximum": 10,
                "minimum": 0,
                "axisAlpha": 0,
                "gridAlpha": 0,
                "position": "left"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
                "bulletOffset": 10,
                "bulletSize": 52,
                "colorField": "color",
                "cornerRadiusTop": 12,
                "fillAlphas": 0.8,
                "columnWidth": 0.5,
                "lineAlpha": 0,
                "type": "column",
                "valueField": "points"
            }],
            "marginTop": 0,
            "marginRight": 0,
            "marginLeft": 0,
            "marginBottom": 20,
            "autoMargins": false,
            "categoryField": "name",
            "categoryAxis": {
                "axisAlpha": 0,
                "gridAlpha": 0,
                "inside": false,
                "tickLength": 0
            },
        });
        var gaugeChart = AmCharts.makeChart("solid-gauge1", {
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
                    "color": "#E5E5E5",
                    "startValue": -35,
                    "endValue": 35,
                    "radius": "100%",
                    "innerRadius": "92%"
                }, {
                    "color": "#93BE52",
                    "startValue": -35,
                    "endValue": 20,
                    "radius": "100%",
                    "innerRadius": "92%"
                }]
            }],
            "export": {
                "enabled": true
            }

        });

        var chart = AmCharts.makeChart("area-custom", {
            "type": "serial",
            "theme": "light",
            "hideCredits": true,
            "marginRight": 0,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "lineAlpha": 0,
                "gridAlpha": 0,
                "position": "left",
                "ignoreAxisWidth": true
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                "id": "g1",
                "balloon": {
                    "drop": true,
                    "adjustBorderColor": false,
                    "color": "#ffffff",
                    "type": "smoothedLine"
                },
                "fillAlphas": 0.2,
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "type": "smoothedLine",
                "lineColor": "#4680ff",
                "title": "red line",
                "useLineColorForBulletBorder": true,
                "valueField": "value",
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            }],
            "chartCursor": {
                "valueLineEnabled": false,
                "valueLineBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false,
                "valueZoomable": false,
                "valueLineAlpha": 0.5
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": false,
                "dashLength": 1,
                "minorGridEnabled": false,
                "axisAlpha": 0,
                "fontSize": 0,
                "lineAlpha": 0,
                "gridAlpha": 0,
            },
            "dataProvider": [{
                "date": "2012-07-27",
                "value": 13
            }, {
                "date": "2012-07-28",
                "value": 11
            }, {
                "date": "2012-07-29",
                "value": 15
            }, {
                "date": "2012-07-30",
                "value": 16
            }, {
                "date": "2012-07-31",
                "value": 18
            }, {
                "date": "2012-08-01",
                "value": 13
            }, {
                "date": "2012-08-02",
                "value": 22
            }, {
                "date": "2012-08-03",
                "value": 23
            }, {
                "date": "2012-08-04",
                "value": 20
            }, {
                "date": "2012-08-05",
                "value": 17
            }, {
                "date": "2012-08-06",
                "value": 16
            }, {
                "date": "2012-08-07",
                "value": 18
            }, {
                "date": "2012-08-08",
                "value": 21
            }, {
                "date": "2012-08-09",
                "value": 26
            }, {
                "date": "2012-08-10",
                "value": 24
            }, {
                "date": "2012-08-11",
                "value": 29
            }, {
                "date": "2012-08-12",
                "value": 32
            }, {
                "date": "2012-08-13",
                "value": 18
            }, {
                "date": "2012-08-14",
                "value": 24
            }, {
                "date": "2012-08-15",
                "value": 22
            }, {
                "date": "2012-08-16",
                "value": 18
            }, {
                "date": "2012-08-17",
                "value": 19
            }, {
                "date": "2012-08-18",
                "value": 14
            }, {
                "date": "2012-08-19",
                "value": 15
            }, {
                "date": "2012-08-20",
                "value": 12
            }, {
                "date": "2012-08-21",
                "value": 8
            }, {
                "date": "2012-08-22",
                "value": 9
            }, {
                "date": "2012-08-23",
                "value": 8
            }, {
                "date": "2012-08-24",
                "value": 7
            }, {
                "date": "2012-08-25",
                "value": 5
            }, {
                "date": "2012-08-26",
                "value": 11
            }, {
                "date": "2012-08-27",
                "value": 13
            }, {
                "date": "2012-08-28",
                "value": 18
            }, {
                "date": "2012-08-29",
                "value": 20
            }, {
                "date": "2012-08-30",
                "value": 29
            }, {
                "date": "2012-08-31",
                "value": 33
            }, {
                "date": "2012-09-01",
                "value": 42
            }, {
                "date": "2012-09-02",
                "value": 35
            }, {
                "date": "2012-09-03",
                "value": 31
            }, {
                "date": "2012-09-04",
                "value": 47
            }, {
                "date": "2012-09-05",
                "value": 52
            }, {
                "date": "2012-09-06",
                "value": 46
            }, {
                "date": "2012-09-07",
                "value": 41
            }, {
                "date": "2012-09-08",
                "value": 43
            }, {
                "date": "2012-09-09",
                "value": 40
            }, {
                "date": "2012-09-10",
                "value": 39
            }, {
                "date": "2012-09-11",
                "value": 34
            }, {
                "date": "2012-09-12",
                "value": 29
            }, {
                "date": "2012-09-13",
                "value": 34
            }, {
                "date": "2012-09-14",
                "value": 37
            }, {
                "date": "2012-09-15",
                "value": 42
            }, {
                "date": "2012-09-16",
                "value": 49
            }]
        });
        var chart = AmCharts.makeChart("area-custom-2", {
            "type": "serial",
            "theme": "light",
            "hideCredits": true,
            "marginRight": 0,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "lineAlpha": 0,
                "gridAlpha": 0,
                "position": "left",
                "ignoreAxisWidth": true
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                "id": "g1",
                "balloon": {
                    "drop": true,
                    "adjustBorderColor": false,
                    "color": "#ffffff",
                    "type": "smoothedLine"
                },
                "fillAlphas": 0.2,
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "type": "smoothedLine",
                "lineColor": "#FC6180",
                "title": "red line",
                "useLineColorForBulletBorder": true,
                "valueField": "value",
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            }],
            "chartCursor": {
                "valueLineEnabled": false,
                "valueLineBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false,
                "valueZoomable": false,
                "valueLineAlpha": 0.5
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": false,
                "dashLength": 1,
                "minorGridEnabled": false,
                "axisAlpha": 0,
                "fontSize": 0,
                "lineAlpha": 0,
                "gridAlpha": 0,
            },
            "dataProvider": [{
                "date": "2012-11-13",
                "value": 80
            }, {
                "date": "2012-11-14",
                "value": 81
            }, {
                "date": "2012-11-15",
                "value": 87
            }, {
                "date": "2012-11-16",
                "value": 82
            }, {
                "date": "2012-11-17",
                "value": 86
            }, {
                "date": "2012-11-18",
                "value": 80
            }, {
                "date": "2012-11-19",
                "value": 87
            }, {
                "date": "2012-11-20",
                "value": 83
            }, {
                "date": "2012-11-21",
                "value": 85
            }, {
                "date": "2012-11-22",
                "value": 84
            }, {
                "date": "2012-11-23",
                "value": 82
            }, {
                "date": "2012-11-24",
                "value": 73
            }, {
                "date": "2012-11-25",
                "value": 71
            }, {
                "date": "2012-11-26",
                "value": 75
            }, {
                "date": "2012-11-27",
                "value": 79
            }, {
                "date": "2012-11-28",
                "value": 70
            }, {
                "date": "2012-11-29",
                "value": 73
            }, {
                "date": "2012-11-30",
                "value": 61
            }, {
                "date": "2012-12-01",
                "value": 62
            }, {
                "date": "2012-12-02",
                "value": 66
            }, {
                "date": "2012-12-03",
                "value": 65
            }, {
                "date": "2012-12-04",
                "value": 73
            }, {
                "date": "2012-12-05",
                "value": 79
            }, {
                "date": "2012-12-06",
                "value": 78
            }, {
                "date": "2012-12-07",
                "value": 78
            }, {
                "date": "2012-12-08",
                "value": 78
            }, {
                "date": "2012-12-09",
                "value": 74
            }, {
                "date": "2012-12-10",
                "value": 73
            }, {
                "date": "2012-12-11",
                "value": 75
            }, {
                "date": "2012-12-12",
                "value": 70
            }, {
                "date": "2012-12-13",
                "value": 77
            }, {
                "date": "2012-12-14",
                "value": 67
            }, {
                "date": "2012-12-15",
                "value": 62
            }, {
                "date": "2012-12-16",
                "value": 64
            }, {
                "date": "2012-12-17",
                "value": 61
            }, {
                "date": "2012-12-18",
                "value": 59
            }, {
                "date": "2012-12-19",
                "value": 53
            }, {
                "date": "2012-12-20",
                "value": 54
            }, {
                "date": "2012-12-21",
                "value": 56
            }, {
                "date": "2012-12-22",
                "value": 59
            }, {
                "date": "2012-12-23",
                "value": 58
            }, {
                "date": "2012-12-24",
                "value": 55
            }, {
                "date": "2012-12-25",
                "value": 52
            }, {
                "date": "2012-12-26",
                "value": 54
            }, {
                "date": "2012-12-27",
                "value": 50
            }, {
                "date": "2012-12-28",
                "value": 50
            }, {
                "date": "2012-12-29",
                "value": 51
            }, {
                "date": "2012-12-30",
                "value": 52
            }, {
                "date": "2012-12-31",
                "value": 58
            }, {
                "date": "2013-01-01",
                "value": 60
            }, {
                "date": "2013-01-02",
                "value": 67
            }, {
                "date": "2013-01-03",
                "value": 64
            }, {
                "date": "2013-01-04",
                "value": 66
            }, {
                "date": "2013-01-05",
                "value": 60
            }, {
                "date": "2013-01-06",
                "value": 63
            }, {
                "date": "2013-01-07",
                "value": 61
            }, {
                "date": "2013-01-08",
                "value": 60
            }, {
                "date": "2013-01-09",
                "value": 65
            }, {
                "date": "2013-01-10",
                "value": 75
            }, {
                "date": "2013-01-11",
                "value": 77
            }, {
                "date": "2013-01-12",
                "value": 78
            }, {
                "date": "2013-01-13",
                "value": 70
            }, {
                "date": "2013-01-14",
                "value": 70
            }, {
                "date": "2013-01-15",
                "value": 73
            }, {
                "date": "2013-01-16",
                "value": 71
            }, {
                "date": "2013-01-17",
                "value": 74
            }, {
                "date": "2013-01-18",
                "value": 78
            }, {
                "date": "2013-01-19",
                "value": 85
            }, {
                "date": "2013-01-20",
                "value": 82
            }, {
                "date": "2013-01-21",
                "value": 83
            }, {
                "date": "2013-01-22",
                "value": 88
            }, {
                "date": "2013-01-23",
                "value": 85
            }, {
                "date": "2013-01-24",
                "value": 85
            }, {
                "date": "2013-01-25",
                "value": 80
            }, {
                "date": "2013-01-26",
                "value": 87
            }, {
                "date": "2013-01-27",
                "value": 84
            }, {
                "date": "2013-01-28",
                "value": 83
            }, {
                "date": "2013-01-29",
                "value": 84
            }, {
                "date": "2013-01-30",
                "value": 81
            }]
        });
    };
});
