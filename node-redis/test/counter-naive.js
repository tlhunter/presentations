#!/usr/bin/env node

var http = require('http');

var counter = 0;

http.createServer(function(req, res) {
  res.end(JSON.stringify({counter: ++counter, pid: process.pid}));
}).listen(9999);
