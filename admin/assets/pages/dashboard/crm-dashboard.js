'use strict';

$(document).ready(function() {

    widgetChart();

    function widgetChart() {
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
                "columnWidth": 0.4,
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
                "columnWidth": 0.4,
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
                "columnWidth": 0.4,
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

        // amount-spent start
        var updatingChart1 = $("#monthly-earning").peity("line", {
            fill: "#999",
            stroke: "#999"
        });
        // amount-spent start
        //real-time update- 1
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
        // REVENUE STATUS start
        $("#revenue-status-d-graph").peity("bar", {
            fill: ["#4680ff"],
            padding: 0.2,
        });
        // REVENUE STATUS daily Ends
        // REVENUE STATUS weekly start
        $("#revenue-status-w-graph").peity("bar", {
            fill: ["#FC6180"],
            padding: 0.2,
        });
        // REVENUE STATUS weekly Ends

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
        /*donut chart*/
        var chart = c3.generate({
            bindto: '#invoice',
            size: {
                height: 300,
                width:220,
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
    };
});
