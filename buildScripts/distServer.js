import express from 'express';
import compression from 'compression';

var path = require('path');
var open = require('open');

/*eslint-disable no-console*/

const port = 3000;
var app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  res.json([
    { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@gmail.com" },
    { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "ltina@gmail.com" },
  ]);
});

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  } else {
    open('http://localhost:' + port);
  }
});
