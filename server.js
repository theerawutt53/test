'use strict';

const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', function (req, res) {
  while(true){
    console.log(1);
  }
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);