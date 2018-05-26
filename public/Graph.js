$(function () {
    $("#chart_left").dxChart({
        palette: "soft",
        dataSource: dataSource,
        barWidth: 0.5,
        commonSeriesSettings: {
            argumentField: "state",
            type: "bar"
        },
        series: [

            { valueField: "year1980", name: "1980", color: "#646464" },
            { valueField: "year1990", name: "1990", color: "#646464" },
            { valueField: "year2000", name: "2000", color: "#646464" },
            { valueField: "year2008", name: "2008", color: "#646464" },
            { valueField: "year2009", name: "2009", color: "#ef7e50" }
        ],
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        },
        "export": {
            enabled: true
        },
        title: {
            text: "Oil Production",
            subtitle: {
                text: "(in millions tonnes)"
            }
        }
    });
    $("#chart_right").dxChart({
        palette: "soft",
        dataSource: dataSource,
        barWidth: 0.5,
        commonSeriesSettings: {
            argumentField: "state",
            type: "bar"
        },
        series: [
            { valueField: "year1970", name: "1970", color: "#646464" },
            { valueField: "year1980", name: "1980", color: "#646464" },
            { valueField: "year1990", name: "1990", color: "#646464" },
            { valueField: "year2000", name: "2000", color: "#646464" },
            { valueField: "year2008", name: "2008", color: "#646464" },
            { valueField: "year2009", name: "2009", color: "#ef7e50" }
        ],
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        },
        "export": {
            enabled: true
        },
        title: {
            text: "Oil Production",
            subtitle: {
                text: "(in millions tonnes)"
            }
        }
    });
    $("#chart_left2").dxChart({
        palette: "soft",
        dataSource: dataSource,
        barWidth: 0.5,
        commonSeriesSettings: {
            argumentField: "state",
            type: "bar"
        },
        series: [
            { valueField: "year1970", name: "1970", color: "#646464" },
            { valueField: "year1980", name: "1980", color: "#646464" },
            { valueField: "year1990", name: "1990", color: "#646464" },
            { valueField: "year2000", name: "2000", color: "#646464" },
            { valueField: "year2008", name: "2008", color: "#646464" },
            { valueField: "year2009", name: "2009", color: "#ef7e50" }
        ],
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        },
        "export": {
            enabled: true
        },
        title: {
            text: "Oil Production",
            subtitle: {
                text: "(in millions tonnes)"
            }
        }
    }); $("#chart_right2").dxChart({
        palette: "soft",
        dataSource: dataSource,
        barWidth: 0.5,
        commonSeriesSettings: {
            argumentField: "state",
            type: "bar"
        },
        series: [
            { valueField: "year1970", name: "1970", color: "#646464" },
            { valueField: "year1980", name: "1980", color: "#646464" },
            { valueField: "year1990", name: "1990", color: "#646464" },
            { valueField: "year2000", name: "2000", color: "#646464" },
            { valueField: "year2008", name: "2008", color: "#646464" },
            { valueField: "year2009", name: "2009", color: "#ef7e50" }
        ],
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        },
        "export": {
            enabled: true
        },
        title: {
            text: "Oil Production",
            subtitle: {
                text: "(in millions tonnes)"
            }
        }
    });
});

$(function () {
    $("#pie").dxPieChart({
        size: {
            width: 500
        },
        palette: "bright",
        dataSource: dataSource1,
        series: [
            {
                argumentField: "country",
                valueField: "area",
                label: {
                    visible: true,
                    connector: {
                        visible: true,
                        width: 1
                    }
                }
            }
        ],
        title: "Area of Countries",
        "export": {
            enabled: true
        },
        onPointClick: function (e) {
            var point = e.target;

            toggleVisibility(point);
        },
        onLegendClick: function (e) {
            var arg = e.target;

            toggleVisibility(this.getAllSeries()[0].getPointsByArg(arg)[0]);
        }
    });

    function toggleVisibility(item) {
        if (item.isVisible()) {
            item.hide();
        } else {
            item.show();
        }
    }
});



