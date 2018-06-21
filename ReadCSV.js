var titleTable = {
  ONET_SOC: 'Occupation',
  company: 'Company',
  job_title: 'Job',
};
function sum(data) {
  var sum = data.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  return sum;
}
function average(data) {
  var avg = sum(data) / data.length;
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
  $('#exportBtn').click(function() {
    fetch('http://localhost:3000/export', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(function(res) {
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
  });
  $('#applyBtn').click(function() {
    var startDate = $('#startDate')
      .val()
      .toString();
    var endDate = $('#endDate')
      .val()
      .toString();
    if (moment(startDate).isSameOrBefore(endDate)) {
      getData(startDate, endDate);
    } else {
      alert('Invalid Output');
    }
  });
});

function getData(startDate, endDate) {
  let information = '';
  // $.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
  let payload = {
    startDate: startDate,
    endDate: endDate,
    information: 'data',
    currentTime: Date(),
  };

  var dat2a = new FormData();
  dat2a.append('json', JSON.stringify(payload));
  fetch('http://localhost:3000/getdata', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(function(res) {
      return res.json();
    })
    .then(data => {
      processData(data);
    });
  // });
}

function processData(data) {
  renderGraph(data.job, 'ONET_Title', 'no_position', 'chart_job');
  renderGraph(data.knowledge, 'name', 'value', 'chart_knowledge', 'Knowledge');
  renderGraph(data.skill, 'name', 'value', 'chart_skill', 'Skill');
  renderGraph(data.tool, 'name', 'value', 'chart_tool', 'Tool & Tech');
  renderPie(data.job, 'Region', 'pie_region');
  renderPie(data.job, 'Facullty', 'pie_faculty');
  renderPie(data.job, 'industry', 'pie_industry');
}

function renderGraph(lines, x, y, graphID, name) {
  let array = []; // datasource
  let data = {};
  let dict = {};
  let array_year = [];
  let values = [];

  for (let i = 0; i < lines.length; i++) {
    const y_value = parseInt(lines[i][y]);
    const x_value = lines[i][x];

    if (x_value in data) {
      data[x_value]['value'] += y_value;
    } else {
      dict['value'] = y_value;
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
  const n = array.length / 4;
  for (i in array) {
    if (i < array.length / 4) {
      array[i]['class'] = 1;
    } else if (i < array.length / 2) {
      array[i]['class'] = 2;
    } else if (i < (array.length * 3) / 4) {
      array[i]['class'] = 3;
    } else {
      array[i]['class'] = 4;
    }
  }
  const dataSum = sum(values);
  const dataAvg = average(values);
  const dataSD = standardDeviation(values);
  const title = titleTable[x];
  dataSource = array;
  $('#' + graphID).dxChart({
    palette: 'soft',
    dataSource: dataSource,
    barWidth: 0.5,
    series: {
      argumentField: x,
      valueField: 'value',
      name: ' ',
      type: 'bar',
      color: '#fffff',
    },
    legend: {
      verticalAlignment: 'bottom',
      horizontalAlignment: 'center',
    },
    customizePoint: function(arg) {
      if (arg.index < array.length / 4) {
        // console.log(1);

        return { color: '#a10020', hoverStyle: { color: '#a10020' } };
      } else if (arg.index < array.length / 2) {
        // console.log(2);

        return { color: '#fc7335', hoverStyle: { color: '#fc7335' } };
      } else if (arg.index < (array.length * 3) / 4) {
        // console.log(3);

        return { color: '#abb868', hoverStyle: { color: '#abb868' } };
      } else {
        // console.log(4);

        return { color: '#6c804b', hoverStyle: { color: '#6c804b' } };
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
      enabled: true,
    },
    title: {
      text: title || name,
    },
    tooltip: {
      enabled: true,
      customizeTooltip: function(arg) {
        return {
          text: `${((parseInt(arg.valueText) / dataSum) * 100).toFixed(2)}% ${arg.argumentText} - ${
            arg.valueText
          }`,
        };
      },
    },
  });
}

function renderPie(lines, type, graphID) {
  let data = {};
  for (let i = 0; i < lines.length; i++) {
    const title = lines[i][type];
    const count = parseInt(lines[i]['no_position']);
    if (title in data) {
      data[title] += count;
    } else {
      data[title] = count;
    }
  }
  const arr1 = Object.keys(data);
  const arr2 = arr1.map(function(k) {
    return { title: k, count: data[k] };
  });
  console.log(arr2);
  const graphIitle = type.charAt(0).toUpperCase() + type.slice(1);
  dataSource1 = arr2;
  $('#' + graphID).dxPieChart({
    size: {
      width: 500,
    },
    palette: 'bright',
    dataSource: dataSource1,
    legend: {
      orientation: 'horizontal',
      itemTextPosition: 'right',
      horizontalAlignment: 'right',
      verticalAlignment: 'bottom',
      columnCount: 4,
    },
    series: [
      {
        argumentField: 'title',
        valueField: 'count',
        label: {
          visible: true,
          connector: {
            visible: true,
            width: 1,
          },
        },
        label: {
          visible: true,
          connector: {
            visible: true,
            width: 0.5,
          },
          position: 'columns',
          customizeText: function(arg) {
            return arg.valueText + ' (' + arg.percentText + ')';
          },
        },
      },
    ],
    title: graphIitle,
    export: {
      enabled: true,
    },
    onPointClick: function(e) {
      var point = e.target;

      toggleVisibility(point);
    },
    onLegendClick: function(e) {
      var arg = e.target;

      toggleVisibility(this.getAllSeries()[0].getPointsByArg(arg)[0]);
    },
  });
  function toggleVisibility(item) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }
}
