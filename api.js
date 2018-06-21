let xlsx = require('node-xlsx').default;
var fs = require('fs');
var http = require('http');

const express = require('express');
let cors = require('cors');
const test = require('./test');

const app = express();
const data = test;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
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
app.post('/getdata', (req, res) => {
  console.log(req.body);
  res.send(data);
});
app.get('/export', (req, res) => {
  // var fileName = 'test.js';
  // var filePath = '/home/files/' + fileName;
  // console.log('export');
  // fs.writeFile(filePath, data, function(err) {
  //   if (err) {
  //     //Error handling
  //   } else {
  //     console.log('Done');
  //     res.download(filePath, fileName, function(err) {
  //       console.log('download callback called');
  //       res.send('complete');
  //       if (err) {
  //         console.log('something went wrong');
  //       }
  //     }); // pass in the path to the newly created file
  //   }
  // });
  console.log(req.body);
  var file = __dirname + '/test.js';
  res.download(file);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
