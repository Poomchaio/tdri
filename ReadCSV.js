var job = [];
var tool = [
  {
    name: 'Document management software',
    value: 9,
  },
  {
    name: 'Content workflow software',
    value: 9,
  },
  {
    name: 'Customer relationship management CRM software',
    value: 3,
  },
  {
    name: 'Enterprise resource planning ERP software',
    value: 8,
  },
  {
    name: 'Enterprise application integration software',
    value: 3,
  },
  {
    name: 'Accounting software',
    value: 5,
  },
  {
    name: 'Data base user interface and query software',
    value: 7,
  },
  {
    name: 'Spreadsheet software',
    value: 5,
  },
  {
    name: 'Electronic mail software',
    value: 6,
  },
  {
    name: 'Presentation software',
    value: 2,
  },
  {
    name: 'Project management software',
    value: 4,
  },
  {
    name: 'Desktop publishing software',
    value: 5,
  },
  {
    name: 'Word processing software',
    value: 8,
  },
  {
    name: 'Web platform development software',
    value: 9,
  },
  {
    name: 'Data base management system software',
    value: 6,
  },
  {
    name: 'Graphics or photo imaging software',
    value: 5,
  },
  {
    name: 'Video creation and editing software',
    value: 9,
  },
  {
    name: 'Computer aided design CAD software',
    value: 9,
  },
  {
    name: 'Access software',
    value: 8,
  },
  {
    name: 'Computer aided manufacturing CAM software',
    value: 9,
  },
  {
    name: 'Transaction server software',
    value: 7,
  },
  {
    name: 'Web page creation and editing software',
    value: 5,
  },
  {
    name: 'Sales and marketing software',
    value: 7,
  },
  {
    name: 'Data mining software',
    value: 3,
  },
  {
    name: 'Human resources software',
    value: 8,
  },
  {
    name: 'Business intelligence and data analysis software',
    value: 7,
  },
  {
    name: 'Communications server software',
    value: 8,
  },
  {
    name: 'Enterprise system management software',
    value: 6,
  },
  {
    name: 'Analytical or scientific software',
    value: 9,
  },
  {
    name: 'Operating system software',
    value: 5,
  },
  {
    name: 'Information retrieval or search software',
    value: 10,
  },
  {
    name: 'Transaction security and virus protection software',
    value: 4,
  },
  {
    name: 'Development environment software',
    value: 8,
  },
  {
    name: 'Network monitoring software',
    value: 9,
  },
  {
    name: 'Financial analysis software',
    value: 4,
  },
  {
    name: 'Object oriented data base management software',
    value: 12,
  },
  {
    name: 'Configuration management software',
    value: 7,
  },
  {
    name: 'Object or component oriented development software',
    value: 8,
  },
  {
    name: 'Data base reporting software',
    value: 6,
  },
  {
    name: 'Backup or archival software',
    value: 8,
  },
  {
    name: 'Portal server software',
    value: 6,
  },
  {
    name: 'Metadata management software',
    value: 7,
  },
  {
    name: 'Application server software',
    value: 5,
  },
  {
    name: 'Requirements analysis and system architecture software',
    value: 7,
  },
  {
    name: 'Network security and virtual private network VPN equipment software',
    value: 9,
  },
  {
    name: 'Medical software',
    value: 6,
  },
  {
    name: 'Program testing software',
    value: 4,
  },
  {
    name: 'Map creation software',
    value: 13,
  },
  {
    name: 'File versioning software',
    value: 8,
  },
  {
    name: 'Network security or virtual private network VPN management software',
    value: 5,
  },
  {
    name: 'Tax preparation software',
    value: 6,
  },
  {
    name: 'Computer based training software',
    value: 3,
  },
  {
    name: 'Digital pen',
    value: 12,
  },
];

var knowledge = [
  {
    name: 'Administration and Management',
    value: 5,
  },
  {
    name: 'Clerical',
    value: 8,
  },
  {
    name: 'Economics and Accounting',
    value: 5,
  },
  {
    name: 'Sales and Marketing',
    value: 11,
  },
  {
    name: 'Customer and Personal Service',
    value: 6,
  },
  {
    name: 'Personnel and Human Resources',
    value: 8,
  },
  {
    name: 'Production and Processing',
    value: 10,
  },
  {
    name: 'Food Production',
    value: 7,
  },
  {
    name: 'Computers and Electronics',
    value: 3,
  },
  {
    name: 'Engineering and Technology',
    value: 11,
  },
  {
    name: 'Design',
    value: 11,
  },
  {
    name: 'Building and Construction',
    value: 8,
  },
  {
    name: 'Mechanical',
    value: 5,
  },
  {
    name: 'Mathematics',
    value: 10,
  },
  {
    name: 'Physics',
    value: 9,
  },
  {
    name: 'Chemistry',
    value: 10,
  },
  {
    name: 'Biology',
    value: 9,
  },
  {
    name: 'Psychology',
    value: 12,
  },
  {
    name: 'Sociology and Anthropology',
    value: 7,
  },
  {
    name: 'Geography',
    value: 6,
  },
  {
    name: 'Medicine and Dentistry',
    value: 3,
  },
  {
    name: 'Therapy and Counseling',
    value: 7,
  },
  {
    name: 'Education and Training',
    value: 3,
  },
  {
    name: 'English Language',
    value: 8,
  },
  {
    name: 'Foreign Language',
    value: 6,
  },
  {
    name: 'Fine Arts',
    value: 12,
  },
  {
    name: 'History and Archeology',
    value: 6,
  },
  {
    name: 'Philosophy and Theology',
    value: 9,
  },
  {
    name: 'Public Safety and Security',
    value: 8,
  },
  {
    name: 'Law and Government',
    value: 4,
  },
  {
    name: 'Telecommunications',
    value: 7,
  },
  {
    name: 'Communications and Media',
    value: 4,
  },
  {
    name: 'Transportation',
    value: 4,
  },
];

var skill = [
  {
    name: 'Reading Comprehension',
    value: 4,
  },
  {
    name: 'Active Listening',
    value: 7,
  },
  {
    name: 'Writing',
    value: 10,
  },
  {
    name: 'Speaking',
    value: 5,
  },
  {
    name: 'Mathematics',
    value: 10,
  },
  {
    name: 'Science',
    value: 12,
  },
  {
    name: 'Critical Thinking',
    value: 9,
  },
  {
    name: 'Active Learning',
    value: 8,
  },
  {
    name: 'Learning Strategies',
    value: 7,
  },
  {
    name: 'Monitoring',
    value: 3,
  },
  {
    name: 'Social Perceptiveness',
    value: 5,
  },
  {
    name: 'Coordination',
    value: 8,
  },
  {
    name: 'Persuasion',
    value: 7,
  },
  {
    name: 'Negotiation',
    value: 8,
  },
  {
    name: 'Instructing',
    value: 5,
  },
  {
    name: 'Service Orientation',
    value: 7,
  },
  {
    name: 'Complex Problem Solving',
    value: 7,
  },
  {
    name: 'Operations Analysis',
    value: 6,
  },
  {
    name: 'Technology Design',
    value: 9,
  },
  {
    name: 'Equipment Selection',
    value: 8,
  },
  {
    name: 'Installation',
    value: 5,
  },
  {
    name: 'Programming',
    value: 7,
  },
  {
    name: 'Operation Monitoring',
    value: 8,
  },
  {
    name: 'Operation and Control',
    value: 11,
  },
  {
    name: 'Equipment Maintenance',
    value: 10,
  },
  {
    name: 'Troubleshooting',
    value: 9,
  },
  {
    name: 'Repairing',
    value: 2,
  },
  {
    name: 'Quality Control Analysis',
    value: 3,
  },
  {
    name: 'Judgment and Decision Making',
    value: 4,
  },
  {
    name: 'Systems Analysis',
    value: 9,
  },
  {
    name: 'Systems Evaluation',
    value: 8,
  },
  {
    name: 'Time Management',
    value: 8,
  },
  {
    name: 'Management of Financial Resources',
    value: 3,
  },
  {
    name: 'Management of Material Resources',
    value: 11,
  },
  {
    name: 'Management of Personnel Resources',
    value: 4,
  },
];

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
  $('#applyBtn').click(function() {
    $.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
      console.log(JSON.stringify(data, null, 2));
    });
    var startDate = $('#startDate')
      .val()
      .toString();
    var endDate = $('#endDate')
      .val()
      .toString();
    if (moment(startDate).isSameOrBefore(endDate)) {
      readFile();
    } else {
      alert('Invalid Output');
    }
  });
});

function readFile() {
  fetch('http://localhost:3000/', {
    method: 'GET', // or 'PUT'
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
          job[data[i]['O*NET-SOC Code']] = data[i]['Title'];
        }
      }
      fetch('http://localhost:3000/getdata', {
        method: 'GET', // or 'PUT'
        // headers: {
        //   Accept: 'application/json',
        //   'Content-Type': 'application/json',
        //   'Access-Control-Allow-Origin': '*',
        //   'Access-Control-Max-Age': '100000',
        //   'Access-Control-Allow-Credentials': 'true',
        // },
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
  var startDate = $('#startDate')
    .val()
    .toString();
  var endDate = $('#endDate')
    .val()
    .toString();
  var data = [];
  for (var i = 0; i < excel.length; i++) {
    var dataDate = JSON.stringify(excel[i]['date_posted'])
      .toString()
      .substring(1, 8);
    if (moment(dataDate).isBetween(startDate, endDate, 'month', '[]')) {
      data.push(excel[i]);
    }
  }
  const response = { job: data, skill: skill, tool: tool, knowledge: knowledge };
  console.log(response);
  renderGraph(response.job, 'ONET_SOC', 'no_position', 'chart_job');
  renderGraph(response.knowledge, 'name', 'value', 'chart_knowledge', 'Knowledge');
  renderGraph(response.skill, 'name', 'value', 'chart_skill', 'Skill');
  renderGraph(response.tool, 'name', 'value', 'chart_tool', 'Tool & Tech');
  renderPie(response.job, 'Region', 'pie_region');
  renderPie(response.job, 'Facullty', 'pie_faculty');
  renderPie(response.job, 'industry', 'pie_industry');

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
    b: 2,
  };

  var dat2a = new FormData();
  dat2a.append('json', JSON.stringify(payload));
  fetch('http://localhost:3000/log', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ a: 1, b: 'Textual content' }),
  }).then(function(res) {
    console.log(res);
  });
  // .then(function(data) {
  //   alert(JSON.stringify(data));
  // });

  // renderPie(data, 'company', 'pie2');
  // renderPie(data, 'location', 'pie3');
}

function renderGraph(lines, x, y, graphID, name) {
  var array = []; // datasource
  var data = {};
  var dict = {};
  var array_year = [];
  var values = [];

  for (var i = 0; i < lines.length; i++) {
    var y_value = parseInt(lines[i][y]);
    if (x == 'ONET_SOC') {
      var x_value = job[lines[i][x]];
    } else {
      var x_value = lines[i][x];
    }
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
  var n = array.length / 4;
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
