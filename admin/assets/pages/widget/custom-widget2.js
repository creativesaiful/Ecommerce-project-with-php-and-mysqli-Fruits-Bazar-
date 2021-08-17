'use strict';

$(document).ready(function() {

    widgetChart();

    /*Area chart*/
    function widgetChart() {
        $("#stacked-transactions-graph").peity("bar", {
            fill: ["#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180"],
            padding: 0.3,
        });

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
                    enabled: !1,
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
        $("#visitor").peity("bar", {
            fill: ["#92b4fe"],
            padding: 0.3,
        });

        // Email sent start
        var chart = AmCharts.makeChart("email-sent", {
            "type": "serial",
            "theme": "light",
            "hideCredits": true,
            "dataDateFormat": "YYYY-MM-DD",
            "precision": 2,
            "valueAxes": [{
                "id": "v1",
                "title": "Sales",
                "position": "left",
                "autoGridCount": false,
                "labelFunction": function(value) {
                    return Math.round(value);
                }
            }, {
                "id": "v2",
                "title": "",
                "gridAlpha": 0,
                "fontSize": 0,
                "axesAlpha": 0,
                "position": "left",
                "autoGridCount": false
            }],
            "graphs": [{
                "id": "g3",
                "valueAxis": "v1",
                "lineColor": "#4680ff",
                "fillColors": "#4680ff",
                "fillAlphas": 1,
                "type": "column",
                "title": "Actual Sales",
                "valueField": "sales2",
                "clustered": true,
                "columnWidth": 0.2,
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
            }, {
                "id": "g4",
                "valueAxis": "v1",
                "lineColor": "#FC6180",
                "fillColors": "#FC6180",
                "fillAlphas": 1,
                "type": "column",
                "title": "Target Sales",
                "valueField": "sales1",
                "clustered": true,
                "columnWidth": 0.2,
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
            }, {
                "id": "g1",
                "valueAxis": "v2",
                "bullet": "round",
                "bulletBorderAlpha": 0,
                "bulletColor": "transparent",
                "bulletSize": 0,
                "hideBulletsCount": 50,
                "lineThickness": 3,
                "dashLength": 10,
                "lineColor": "#93BE52",
                "type": "smoothedLine",
                "title": "Market Days",
                "useLineColorForBulletBorder": true,
                "valueField": "market1",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
            }, {
                "id": "v3",
                "valueAxis": "v1",
                "lineColor": "#FFB64D",
                "fillColors": "#FFB64D",
                "fillAlphas": 1,
                "type": "column",
                "title": "Actual Sales",
                "valueField": "sales2",
                "clustered": true,
                "columnWidth": 0.2,
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
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
                "dashLength": 0,
                "axisAlpha": 0,
                "GridAlpha": 0,
                "minorGridEnabled": true
            },
            "legend": {
                "useGraphSettings": true,
                "position": "top"
            },
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "export": {
                "enabled": true
            },
            "dataProvider": [{
                "date": "2013-01-16",
                "market1": 91,
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
                "market1": 78,
                "market2": 92,
                "sales1": 5,
                "sales2": 7
            }]
        });
        // Email sent Ends

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

        //world-map-vititors
        /**
         * Define SVG path for target icon
         */
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

        /**
         * Create the map
         */
        var map = AmCharts.makeChart("world-map-vititors", {
            "type": "map",
            "projection": "winkel3",
            "hideCredits": true,
            "theme": "light",
            "imagesSettings": {
                "rollOverColor": "#FC6180",
                "rollOverScale": 3,
                "selectedScale": 3,
                "selectedColor": "#FC6180",
                "color": "#FC6180"
            },

            "areasSettings": {
                "unlistedAreasColor": "#dfdfdf",
                "outlineThickness": 0.1
            },

            "dataProvider": {
                "map": "worldLow",
                "zoomLevel": 1,
                "zoomLongitude": 130,
                "zoomLatitude": -20,
                "images": [{
                    "svgPath": targetSVG,
                    "zoomLevel": 3,
                    "scale": 1,
                    "title": "United State",
                    "latitude": 10.6353,
                    "longitude": 220.2250
                }]
            },
            "zoomControl": {
                "panControlEnabled": false,
                "zoomControlEnabled": false,
                "homeButtonEnabled": false
            },
            "export": {
                "enabled": true
            }
        });
        var chartData = [{
            "date": "2012-01-01",
            "distance": 327,
            "townName": "New York",
            "townName2": "New York",
            "townSize": 25,
            "latitude": 40.71,
            "duration": 408
        }, {
            "date": "2012-01-02",
            "distance": 371,
            "townName": "Washington",
            "townSize": 14,
            "latitude": 38.89,
            "duration": 582
        }, {
            "date": "2012-01-03",
            "distance": 433,
            "townName": "Wilmington",
            "townSize": 6,
            "latitude": 34.22,
            "duration": 282
        }, {
            "date": "2012-01-04",
            "distance": 345,
            "townName": "Jacksonville",
            "townSize": 7,
            "latitude": 30.35,
            "duration": 379
        }, {
            "date": "2012-01-05",
            "distance": 480,
            "townName": "Miami",
            "townName2": "Miami",
            "townSize": 10,
            "latitude": 25.83,
            "duration": 501
        }, {
            "date": "2012-01-06",
            "distance": 386,
            "townName": "Tallahassee",
            "townSize": 7,
            "latitude": 30.46,
            "duration": 343
        }, {
            "date": "2012-01-07",
            "distance": 348,
            "townName": "New Orleans",
            "townSize": 10,
            "latitude": 29.94,
            "duration": 405
        }, {
            "date": "2012-01-08",
            "distance": 298,
            "townName": "Houston",
            "townName2": "Houston",
            "townSize": 16,
            "latitude": 29.76,
            "duration": 309
        }, {
            "date": "2012-01-09",
            "distance": 318,
            "townName": "Dalas",
            "townSize": 17,
            "latitude": 32.8,
            "duration": 287
        }, {
            "date": "2012-01-10",
            "distance": 349,
            "townName": "Oklahoma City",
            "townSize": 11,
            "latitude": 35.49,
            "duration": 485
        }, {
            "date": "2012-01-11",
            "distance": 603,
            "townName": "Kansas City",
            "townSize": 10,
            "latitude": 39.1,
            "duration": 390
        }, {
            "date": "2012-01-12",
            "distance": 534,
            "townName": "Denver",
            "townName2": "Denver",
            "townSize": 18,
            "latitude": 39.74,
            "duration": 450
        }, {
            "date": "2012-01-13",
            "townName": "Salt Lake City",
            "townSize": 12,
            "distance": 425,
            "duration": 270,
            "latitude": 40.75,
            "alpha": 0.4
        }, {
            "date": "2012-01-14",
            "latitude": 36.1,
            "duration": 460,
            "townName": "Las Vegas",
            "townName2": "Las Vegas",
            "bulletClass": "lastBullet"
        }];
        var chart = AmCharts.makeChart("monthly-graph", {
            "type": "serial",
            "theme": "light",
            "hideCredits": true,
            "dataDateFormat": "YYYY-MM-DD",
            "dataProvider": chartData,
            "addClassNames": true,
            "startDuration": 1,
            //"color": "#FFFFFF",
            "marginLeft": 0,

            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "minPeriod": "DD",
                "autoGridCount": false,
                "gridCount": 50,
                "gridAlpha": 0.1,
                "gridColor": "#FFFFFF",
                "axisColor": "#555555",
                "dateFormats": [{
                    "period": 'DD',
                    "format": 'DD'
                }, {
                    "period": 'WW',
                    "format": 'MMM DD'
                }, {
                    "period": 'MM',
                    "format": 'MMM'
                }, {
                    "period": 'YYYY',
                    "format": 'YYYY'
                }]
            },

            "valueAxes": [{
                "id": "a1",
                "title": "distance",
                "gridAlpha": 0,
                "axisAlpha": 0
            }, {
                "id": "a2",
                "position": "right",
                "gridAlpha": 0,
                "axisAlpha": 0,
                "labelsEnabled": false
            }, {
                "id": "a3",
                "title": "",
                "position": "left",
                "gridAlpha": 0,
                "axisAlpha": 0,
                "lineAlpha": 0,
                "fontSize": 0,
                "inside": true,
            }],
            "graphs": [{
                "id": "g1",
                "valueField": "distance",
                "title": "distance",
                "type": "column",
                "fillAlphas": 0.9,
                "cornerRadiusTop": 5,
                // "columnWidth": 0.3,
                "valueAxis": "a1",
                "balloonText": "[[value]] miles",
                "legendValueText": "[[value]] mi",
                "legendPeriodValueText": "total: [[value.sum]] mi",
                "lineColor": "#4680ff",
                "alphaField": "alpha"
            }, {
                "id": "g2",
                "valueField": "latitude",
                "classNameField": "bulletClass",
                "title": "latitude/city",
                "type": "line",
                // "type": "smoothedLine",
                "valueAxis": "a2",
                "lineColor": "#303549",
                "lineThickness": 2,
                "dashLength": 8,
                "legendValueText": "[[value]]/[[description]]",
                "descriptionField": "townName",
                "bullet": "round",
                "bulletSizeField": "townSize",
                "bulletBorderColor": "#4680ff",
                "bulletBorderAlpha": 1,
                "bulletBorderThickness": 2,
                "bulletColor": "#B5CDFF",
                "labelText": "[[townName2]]",
                "labelPosition": "right",
                "balloonText": "latitude:[[value]]",
                "showBalloon": true,
                "animationPlayed": true,
            }, {
                "id": "g3",
                "title": "duration",
                "valueField": "duration",
                "type": "line",
                "type": "smoothedLine",
                "valueAxis": "a3",
                "lineColor": "#FC6180",
                "balloonText": "[[value]]",
                "lineThickness": 2,
                "legendValueText": "[[value]]",
                "bullet": "round",
                "bulletBorderColor": "#FC6180",
                "bulletBorderThickness": 1,
                "bulletBorderAlpha": 1,
                "dashLengthField": "dashLength",
                "animationPlayed": true
            }],
            // "legend": {
            //     "bulletType": "round",
            //     "equalWidths": false,
            //     "valueWidth": 120,
            //     // "position": "top",
            //     "useGraphSettings": true,
            // }
        });

        // counter up
        $('.countdown_dashboard').countdown({
            diff: null,
            min: 25,
            sec: 47,
            refresh: 1000,
            easing: 'linear',
            dash: [{
                    key: 'min',
                    duration: 999
                },
                {
                    key: 'sec',
                    duration: 949
                }
            ],
            // you may provide callback capabilities
            onEnd: $.noop
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

        /*donut chart*/
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

        var gaugeChart = AmCharts.makeChart("drills-solid-gauge", {
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
                    "color": "transparent",
                    "startValue": 55,
                    "endValue": 155,
                    "radius": "100%",
                    "innerRadius": "97%"
                }, {
                    "color": "#4680ff",
                    "startValue": 55,
                    "endValue": 105,
                    "radius": "100%",
                    "innerRadius": "97%"
                }, {
                    "color": "transparent",
                    "startValue": 35,
                    "endValue": 135,
                    "radius": "80%",
                    "innerRadius": "77%"
                }, {
                    "color": "#FC6180",
                    "startValue": 35,
                    "endValue": 95,
                    "radius": "80%",
                    "innerRadius": "77%"
                }, {
                    "color": "transparent",
                    "startValue": 30,
                    "endValue": 130,
                    "radius": "60%",
                    "innerRadius": "57%"
                }, {
                    "color": "#FFB64D",
                    "startValue": 25,
                    "endValue": 105,
                    "radius": "60%",
                    "innerRadius": "57%"
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
        //  reconded change chart
        $(".dial").knob({
            draw: function() {
                // "tron" case
                if (this.$.data('skin') == 'tron') {
                    this.cursorExt = 0.3;
                    var a = this.arc(this.cv) // Arc
                        ,
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
