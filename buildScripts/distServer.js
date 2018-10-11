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

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  } else {
    open('http://localhost:' + port);
  }
});
