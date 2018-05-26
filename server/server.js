var mysql = require('mysql');
var express = require('express')
var app = express()
var path = require('path');


var pool = mysql.createPool({
    connectionLimit: 10, // default = 10
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registra'
});
app.use('/css', express.static('/Users/poomchai/Desktop/jQuery/test/css'));
app.use(express.static('public'))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.sendFile(path.join('/Users/poomchai/Desktop/jQuery/test/index.html'));
})


app.listen(8080, () => console.log('Example app listening on port 8080!'))



