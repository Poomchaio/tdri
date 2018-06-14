var xlsx = require('node-xlsx').default;

const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  if (typeof require !== 'undefined') XLSX = require('xlsx');
  var workbook = XLSX.readFile('Occupation Data.xlsx');
  var sheet_name_list = workbook.SheetNames;

  sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var data = [];
    for (z in worksheet) {
      if (z.includes('C')) continue;
      if (z[0] === '!') continue;
      //parse out the column, row, and value
      var tt = 0;
      for (var i = 0; i < z.length; i++) {
        if (!isNaN(z[i])) {
          tt = i;
          break;
        }
      }
      var col = z.substring(0, tt);
      var row = parseInt(z.substring(tt));
      var value = worksheet[z].v;
      //store header names
      if (row == 1 && value) {
        headers[col] = value;
        continue;
      }
      // console.log(row)
      // console.log(headers)
      if (!data[row]) data[row] = {};
      //   data[row] = value;
      data[row][headers[col]] = value;
    }
    //drop those first two rows which are empty
    data.shift();
    data.shift();
    res.send(data);
  });
});
app.get('/getdata', (req, res) => {
  var XLSX = require('xlsx');
  var workbook = XLSX.readFile('sample_table_20180610_wee.xlsx');
  var sheet_name_list = workbook.SheetNames;
  sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var data = [];
    for (z in worksheet) {
      if (z[0] === '!') continue;
      //parse out the column, row, and value
      var tt = 0;
      for (var i = 0; i < z.length; i++) {
        if (!isNaN(z[i])) {
          tt = i;
          break;
        }
      }
      var col = z.substring(0, tt);
      var row = parseInt(z.substring(tt));
      var value = worksheet[z].v;

      //store header names
      if (row == 1 && value) {
        headers[col] = value;
        continue;
      }

      if (!data[row]) data[row] = {};
      data[row][headers[col]] = value;
    }
    //drop those first two rows which are empty
    data.shift();
    data.shift();
    res.send(data);
  });
});
app.get('/getdata2', (req, res) => {
  var XLSX = require('xlsx');
  var workbook = XLSX.readFile('sample_table_20180610_wee.xlsx');
  var sheet_name_list = workbook.SheetNames;
  sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    headers['A'] = 'OccupationData';
    var data = {};
    for (z in worksheet) {
      if (z[0] === '!') continue;
      //parse out the column, row, and value

      var tt = 0;
      for (var i = 0; i < z.length; i++) {
        if (!isNaN(z[i])) {
          tt = i;
          break;
        }
      }
      var col = z.substring(0, tt);
      var row = parseInt(z.substring(tt));
      var value = worksheet[z].v;

      //store header names
      if (row == 1 && value) {
        headers[col] = value;
        continue;
      }
      console.log(headers);
      if (!data[row]) data[row] = {};
      data[headers[col]] = value;
    }
    //drop those first two rows which are empty

    res.send(data);
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
