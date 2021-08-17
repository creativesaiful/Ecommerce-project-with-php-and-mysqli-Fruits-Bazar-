'use strict';
$(document).ready(function() {

    // chart js function start
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
                    top: 0,
                    bottom: 0
                }
            }
        };
    }
    // chart js function end



    // statustic start
    $(function() {
        var ctx = document.getElementById('Statistics-chart').getContext("2d");
        var greenline = ctx.createLinearGradient(500, 0, 100, 0);
        greenline.addColorStop(0, '#fd93a8');
        greenline.addColorStop(1, '#FC6180');
        var blueline = ctx.createLinearGradient(500, 0, 100, 0);
        blueline.addColorStop(1, '#56CCF2');
        blueline.addColorStop(0, '#2F80ED');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
                datasets: [{
                        label: "Data",
                        borderColor: blueline,
                        pointBorderColor: blueline,
                        pointBackgroundColor: blueline,
                        pointHoverBackgroundColor: blueline,
                        pointHoverBorderColor: blueline,
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 4,
                        data: [20, 50, 30, 50, 20, 70, 30]
                    },
                    {
                        label: "Data",
                        borderColor: greenline,
                        pointBorderColor: greenline,
                        pointBackgroundColor: greenline,
                        pointHoverBackgroundColor: greenline,
                        pointHoverBorderColor: greenline,
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 4,
                        data: [40, 30, 50, 15, 50, 50, 80]
                    }
                ]
            },
            options: {
                legend: {
                    position: "top"
                },
                tooltips: {
                    enabled: true,
                    intersect: !1,
                    mode: "nearest",
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold",
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 20,
                        },
                        gridLines: {
                            drawTicks: false,
                            display: false
                        }

                    }],
                    xAxes: [{
                        gridLines: {
                            drawTicks: false,
                            display: false
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold"
                        }
                    }]
                }
            }
        });
    });
    // statustic end

    // feedback chart start
    var ctx = document.getElementById("feedback-chart").getContext("2d");
    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    83, 17,
                ],
                backgroundColor: [
                    "#4099ff",
                    "#81c1fd"
                ],
                label: 'Dataset 1',
                borderWidth: 0
            }],
            labels: [
                "Positive",
                "Negative"
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
    window.myDoughnut = new Chart(ctx, config);
    // feedback chart end

    // seo card start
    function seojs(a, b, f) {
        if (f == null) {
            f = "rgba(0,0,0,0)";
        }
        return {
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            datasets: [{
                label: "",
                borderColor: a,
                borderWidth: 2,
                hitRadius: 0,
                pointHoverRadius: 0,
                pointRadius: 3,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: Chart.helpers.color("#fff").alpha(1).rgbString(),
                pointBorderColor: Chart.helpers.color(a).alpha(1).rgbString(),
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                fill: true,
                backgroundColor: f,
                data: b,
            }]
        };
    }
    var ctx = document.getElementById('seo-card1').getContext("2d");
    var gradientFill = ctx.createLinearGradient(300, 0, 0, 300);
    gradientFill.addColorStop(1, "#b9fdef");
    gradientFill.addColorStop(0, "#2ed8b6");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: seojs('#2ed8b6', [100, 80, 100, 150, 190, 200, 160], gradientFill),
        options: buildchartoption(),
    });
    var gradientFill = ctx.createLinearGradient(300, 0, 0, 300);
    gradientFill.addColorStop(1, "#b5d8ff");
    gradientFill.addColorStop(0, "#4099ff");
    var ctx = document.getElementById('seo-card2').getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: seojs('#4099ff', [100, 80, 100, 150, 190, 200, 160], gradientFill),
        options: buildchartoption(),
    });
    // seo cardunction end

});
