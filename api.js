let xlsx = require('node-xlsx').default;

const express = require('express');
let cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  if (typeof require !== 'undefined') XLSX = require('xlsx');
  let workbook = XLSX.readFile('Occupation Data.xlsx');
  let sheet_name_list = workbook.SheetNames;

  sheet_name_list.forEach(function(y) {
    let worksheet = workbook.Sheets[y];
    let headers = {};
    let data = [];
    for (z in worksheet) {
      if (z.includes('C')) continue;
      if (z[0] === '!') continue;
      //parse out the column, row, and value
      let tt = 0;
      for (let i = 0; i < z.length; i++) {
        if (!isNaN(z[i])) {
          tt = i;
          break;
        }
      }
      let col = z.substring(0, tt);
      let row = parseInt(z.substring(tt));
      let value = worksheet[z].v;
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
  let XLSX = require('xlsx');
  let workbook = XLSX.readFile('sample_table_20180610_wee.xlsx');
  let sheet_name_list = workbook.SheetNames;
  sheet_name_list.forEach(function(y) {
    let worksheet = workbook.Sheets[y];
    let headers = {};
    let data = [];
    for (z in worksheet) {
      if (z[0] === '!') continue;
      //parse out the column, row, and value
      let tt = 0;
      for (let i = 0; i < z.length; i++) {
        if (!isNaN(z[i])) {
          tt = i;
          break;
        }
      }
      let col = z.substring(0, tt);
      let row = parseInt(z.substring(tt));
      let value = worksheet[z].v;

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
  let XLSX = require('xlsx');
  let workbook = XLSX.readFile('sample_table_20180610_wee.xlsx');
  let sheet_name_list = workbook.SheetNames;
  sheet_name_list.forEach(function(y) {
    let worksheet = workbook.Sheets[y];
    let headers = {};
    headers['A'] = 'OccupationData';
    let data = {};
    for (z in worksheet) {
      if (z[0] === '!') continue;
      //parse out the column, row, and value

      let tt = 0;
      for (let i = 0; i < z.length; i++) {
        if (!isNaN(z[i])) {
          tt = i;
          break;
        }
      }
      let col = z.substring(0, tt);
      let row = parseInt(z.substring(tt));
      let value = worksheet[z].v;

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
