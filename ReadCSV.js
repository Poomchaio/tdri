var column = [];
var job = [];
$(document).ready(function() {
  $("#applyBtn").click(function() {
    var startDate = $("#startDate").val().toString();
    var endDate = $("#endDate").val().toString();
    if (moment(startDate).isSameOrBefore(endDate)) {
      readFile();
    } else {
      alert("Invalid Output");
    }
  });
});

function readFile() {
  // var promise1 = new Promise(function(resolve, reject) {
  //     var xhttp = new XMLHttpRequest();
  //     xhttp.onreadystatechange = function () {
  //         if (this.readyState == 4 && this.status == 200) {
  //             processOccupation(this.response);
  //         }
  //     };
  //     xhttp.open("GET", "Occupation Data.xlsx", true);
  //     xhttp.send();
  //     resolve('Success!');

  //   });

  //   promise1.then(function(value) {
  //     var xhttp = new XMLHttpRequest();

  //     xhttp.onreadystatechange = function () {
  //         if (this.readyState == 4 && this.status == 200) {
  //             processData(this.response);
  //         }
  //     };
  //     xhttp.open("GET", "sample_table_20180525.csv", true);
  //     xhttp.send();
  //   });
  fetch("http://localhost:3000/", {
    method: "GET", // or 'PUT'
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true"
    }
  }) // Call the fetch function passing the url of the API as a parameter
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          processData(this.response);
        }
      };
      xhttp.open("GET", "sample_table_20180525.csv", true);
      xhttp.send();
      for (i in data) {
        for (j in data[i]) {
          job[data[i]["O*NET-SOC Code"]] = data[i]["Title"];
        }
      }
      console.log(job);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function processData(csv) {
  var allTextLines = csv.split(/\r\n|\n/);
  var lines = [];
  while (allTextLines.length) {
    lines.push(allTextLines.shift().split(","));
  }
  drawOutput(lines);
}

function drawOutput(lines) {
  //Clear previous data
  for (i in lines[0]) {
    column[lines[0][i]] = i;
  }
  var startDate = $("#startDate")
    .val()
    .toString();
  var endDate = $("#endDate")
    .val()
    .toString();
  var data = [];
  console.log(lines)
  for (var i = 1; i < lines.length ; i++) {
    var dataDate = JSON.stringify(lines[i][column["date_posted"]]).toString().substring(1, 8);
    console.log(dataDate, startDate , endDate)
    if (moment(dataDate).isBetween(startDate, endDate, "month", "[]")) {
      data.push(lines[i]);
    }
  }
  console.log(data);

  renderGraph(data, "ONET_SOC", "no_position", "date_posted", "chart_left");
    renderGraph(data, "Company", "No. of Vacancy", "date_posted", "chart_left2");
    renderGraph(data, "Actor", "No. of Vacancy", "date_posted", "chart_right");
  renderPie(lines, 1, "pie")
  renderPie(lines, COMPANY, "pie2")
  renderPie(lines, LOCATION, "pie3")
}

function graphOne(lines) {
  var array = []; // datasource
  var data = {};
  var dict = {};
  var array_year = [];
  var serie2 = [];
  for (var i = 1; i < lines.length; i++) {
    var num = parseInt(lines[i][2]);
    var year = lines[i][7];
    var pos = lines[i][1];
    if (pos in data && year in data[pos]) {
      data[pos][year] += num;
    } else if (pos in data && !(year in data[pos])) {
      data[pos][year] = num;
    } else {
      dict["state"] = pos;
      //dict['vacancyNo' + year] = num
      dict[year] = num;
      data[pos] = dict;
      dict = {};
    }

    if (array_year.indexOf(year) == -1) {
      array_year.push(year);
    }
  }
  array_year.sort();
  dict = {};
  for (var i = 0; i < array_year.length; i++) {
    year = array_year[i];
    if (i != array_year.length - 1) {
      // dict['valueField'] = "vacancyNo" + year
      dict["valueField"] = year;
      dict["name"] = year;
      dict["color"] = "#646464";
      serie2.push(dict);
    } else {
      // dict['valueField'] = "vacancyNo" + year
      dict["valueField"] = year;
      dict["name"] = year;
      dict["color"] = "#ef7e50";
      serie2.push(dict);
    }
    dict = {};
  }
  for (i in data) {
    array.push(data[i]);
  }

  for (i in array_year) {
    for (j in array) {
      if (!(array_year[i] in array[j])) {
        array[j][array_year[i]] = 0;
      }
    }
  }
  dataSource = array;
  $("#chart_left").dxChart({
    palette: "soft",
    dataSource: dataSource,
    barWidth: 0.5,
    commonSeriesSettings: {
      argumentField: "state",
      type: "bar"
    },
    series: serie2,
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    },
    customizeLabel: function() {
      if (this.seriesName == "2017") {
        return {
          visible: true,
          backgroundColor: "#ff7c7c",
          customizeText: function() {
            return this.valueText;
          }
        };
      } else if (this.value == 0) {
        return {
          visible: true,
          backgroundColor: "#ff7c7c",
          customizeText: function() {
            return 0;
          }
        };
      }
    },
    export: {
      enabled: true
    },
    title: {
      text: "Oil Production",
      subtitle: {
        text: "(in millions tonnes)"
      }
    }
  });
}

function renderGraph(lines, x, y, z, graphID) {
  var array = []; // datasource
  var data = {};
  var dict = {};
  var array_year = [];
  var serie2 = [];
  console.log(job);
  for (var i = 1; i < lines.length; i++) {
    var y_axis = parseInt(lines[i][column[y]]);
    var z_axis = lines[i][column[z]].toString().substring(0, 4);
    if (x == "ONET_SOC") {
      console.log(lines[i][column[x]]);
      console.log(job["17-2072.0"]);
      var x_axis = job[lines[i][column[x]]];
    } else {
      var x_axis = lines[i][column[x]];
    }
    console.log(x_axis, y_axis, z_axis);
    if (x_axis in data && z_axis in data[x_axis]) {
      data[x_axis][z_axis] += y_axis;
    } else if (x_axis in data && !(z_axis in data[x_axis])) {
      data[x_axis][z_axis] = y_axis;
    } else {
      dict["state"] = x_axis;
      //dict['vacancyNo' + year] = num
      dict[z_axis] = y_axis;
      data[x_axis] = dict;
      dict = {};
    }

    if (array_year.indexOf(z_axis) == -1) {
      array_year.push(z_axis);
    }
  }
  console.log(data);
  array_year.sort();
  dict = {};
  for (var i = 0; i < array_year.length; i++) {
    z_axis = array_year[i];
    if (i != array_year.length - 1) {
      // dict['valueField'] = "vacancyNo" + year
      dict["valueField"] = z_axis;
      dict["name"] = z_axis;
      dict["color"] = "#646464";
      serie2.push(dict);
    } else {
      // dict['valueField'] = "vacancyNo" + year
      dict["valueField"] = z_axis;
      dict["name"] = z_axis;
      dict["color"] = "#ef7e50";
      serie2.push(dict);
    }
    dict = {};
  }
  for (i in data) {
    array.push(data[i]);
  }
  console.log(array);

  for (i in array_year) {
    for (j in array) {
      if (!(array_year[i] in array[j])) {
        array[j][array_year[i]] = 0;
      }
    }
  }
  dataSource = array;
  $("#" + graphID).dxChart({
    palette: "soft",
    dataSource: dataSource,
    barWidth: 0.5,
    commonSeriesSettings: {
      argumentField: "state",
      type: "bar"
    },
    series: serie2,
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    },
    customizeLabel: function() {
      if (this.seriesName == "2017") {
        return {
          visible: true,
          backgroundColor: "#ff7c7c",
          customizeText: function() {
            return this.valueText;
          }
        };
      } else if (this.value == 0) {
        return {
          visible: true,
          backgroundColor: "#ff7c7c",
          customizeText: function() {
            return 0;
          }
        };
      }
    },
    export: {
      enabled: true
    },
    title: {
      text: "Oil Production",
      subtitle: {
        text: "(in millions tonnes)"
      }
    }
  });
}

function renderPie(lines, type, graphID) {
  var data = {};

  for (var i = 1; i < lines.length; i++) {
    var title = lines[i][type];
    var count = parseInt(lines[i][2]);
    console.log(title);
    console.log(count);
    if (title in data) {
      data[title] += count;
    } else {
      data[title] = count;
    }
  }
  var arr1 = Object.keys(data);
  var arr2 = arr1.map(function(k) {
    return { title: k, count: data[k] };
  });

  dataSource1 = arr2;
  $("#" + graphID).dxPieChart({
    size: {
      width: 500
    },
    palette: "bright",
    dataSource: dataSource1,
    series: [
      {
        argumentField: "title",
        valueField: "count",
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
    export: {
      enabled: true
    },
    onPointClick: function(e) {
      var point = e.target;

      toggleVisibility(point);
    },
    onLegendClick: function(e) {
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
}
