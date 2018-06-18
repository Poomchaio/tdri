var job = [];
var skill = [];
var titleTable = {
  ONET_SOC: "Occupation",
  company: "Company",
  job_title: "Job"
};
function average(data) {
  var sum = data.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}
function standardDeviation(values) {
  var avg = average(values);

  var squareDiffs = values.map(function(value) {
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}
$(document).ready(function() {
  $("#applyBtn").click(function() {
    var startDate = $("#startDate")
      .val()
      .toString();
    var endDate = $("#endDate")
      .val()
      .toString();
    if (moment(startDate).isSameOrBefore(endDate)) {
      readFile();
    } else {
      alert("Invalid Output");
    }
  });
});

function readFile() {
  fetch("http://localhost:3000/", {
    method: "GET" // or 'PUT'
    // headers: {
    //   "Access-Control-Allow-Origin": "http://localhost:3000",
    //   "Access-Control-Allow-Credentials": "true"
    // }
  }) // Call the fetch function passing the url of the API as a parameter
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      for (i in data) {
        for (j in data[i]) {
          job[data[i]["O*NET-SOC Code"]] = data[i]["Title"];
        }
      }
      fetch("http://localhost:3000/getdata", {
        method: "GET" // or 'PUT'
        // headers: {
        //   "Access-Control-Allow-Origin": "http://localhost:3000",
        //   "Access-Control-Allow-Credentials": "true"
        // }
      }) // Call the fetch function passing the url of the API as a parameter
        .then(function(res) {
          return res.json();
        })
        .then(data => {
          console.log(data);
          processData(data);
        });
    })
    .catch(function(err) {
      console.log(err);
    });
}

function processData(excel) {
  var startDate = $("#startDate")
    .val()
    .toString();
  var endDate = $("#endDate")
    .val()
    .toString();
  var data = [];
  for (var i = 0; i < excel.length; i++) {
    var dataDate = JSON.stringify(excel[i]["date_posted"])
      .toString()
      .substring(1, 8);
    if (moment(dataDate).isBetween(startDate, endDate, "month", "[]")) {
      data.push(excel[i]);
    }
  }
  console.log("fetch");

  renderGraph(data, "ONET_SOC", "no_position", "date_posted", "chart_left");
  renderGraph(data, "company", "no_position", "date_posted", "chart_left2");
  renderGraph(data, "job_title", "no_position", "date_posted", "chart_right");
  renderPie(data, "company", "pie");

  // fetch("https://localhost:3000/log", {
  //   method: "POST",
  //   headers: {
  //     'Accept': "application/json",
  //     'Content-Type': "application/json"
  //   },
  //   body: JSON.stringify(dat1a)
  // }).then(function(response) {
  //   return response.json();
  // });
  var payload = {
    a: 1,
    b: 2
  };

  var dat2a = new FormData();
  dat2a.append("json", JSON.stringify(payload));
  console.log(dat2a);
  fetch("http://localhost:3000/log", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ a: 1, b: "Textual content" })
  }).then(function(res) {
    console.log(res);
  });
  // .then(function(data) {
  //   alert(JSON.stringify(data));
  // });

  // renderPie(data, 'company', 'pie2');
  // renderPie(data, 'location', 'pie3');
}

function renderGraph(lines, x, y, z, graphID) {
  var array = []; // datasource
  var data = {};
  var dict = {};
  var array_year = [];
  var values = [];

  for (var i = 1; i < lines.length; i++) {
    var y_value = parseInt(lines[i][y]);
    if (x == "ONET_SOC") {
      var x_value = job[lines[i][x]];
    } else {
      var x_value = lines[i][x];
    }
    if (x_value in data) {
      data[x_value]["value"] += y_value;
    } else {
      dict["value"] = y_value;
      dict[x] = x_value;
      data[x_value] = dict;
      dict = {};
    }
  }
  for (i in data) {
    array.push(data[i]);
    values.push(data[i].value);
  }

  array.sort(function(a, b) {
    return a.value - b.value;
  });
  var n = array.length / 4;
  for (i in array) {
    if (i < array.length / 4) {
      array[i]["class"] = 1;
    } else if (i < array.length / 2) {
      array[i]["class"] = 2;
    } else if (i < (array.length * 3) / 4) {
      array[i]["class"] = 3;
    } else {
      array[i]["class"] = 4;
    }
  }
  console.log(array);
  var dataAvg = average(values);
  var dataSD = standardDeviation(values);

  const title = titleTable[x];
  dataSource = array;
  $("#" + graphID).dxChart({
    palette: "soft",
    dataSource: dataSource,
    barWidth: 0.5,
    series: {
      argumentField: x,
      valueField: "value",
      name: "a",
      type: "bar",
      color: "#fffff"
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    },
    customizePoint: function(arg) {
      console.log(arg);
      if (arg.index < array.length / 4) {
        // console.log(1);

        return { color: "#a10020", hoverStyle: { color: "#a10020" } };
      } else if (arg.index < array.length / 2) {
        // console.log(2);

        return { color: "#fc7335", hoverStyle: { color: "#fc7335" } };
      } else if (arg.index < (array.length * 3) / 4) {
        // console.log(3);

        return { color: "#abb868", hoverStyle: { color: "#abb868" } };
      } else {
        // console.log(4);

        return { color: "#6c804b", hoverStyle: { color: "#6c804b" } };
      }

      // if (this.class == 1) {
      //   return { color: '#a10020', hoverStyle: { color: '#a10020' } };
      // } else if (this.value < dataAvg) {
      //   return { color: '#fc7335', hoverStyle: { color: '#fc7335' } };
      // } else if (this.value < this.value < dataAvg + 0.675 * dataSD) {
      //   return { color: '#abb868', hoverStyle: { color: '#abb868' } };
      // } else {
      //   return { color: '#6c804b', hoverStyle: { color: '#6c804b' } };
      // }
    },
    export: {
      enabled: true
    },
    title: {
      text: title
    },
    tooltip: {
      enabled: true,
      customizeTooltip: function(arg) {
        return {
          text: arg.argumentText + " - " + arg.valueText
        };
      }
    }
  });
}

function renderPie(lines, type, graphID) {
  var data = {};

  for (var i = 1; i < lines.length; i++) {
    var title = lines[i][type];
    var count = parseInt(lines[i][2]);
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
  console.log(arr2);
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
