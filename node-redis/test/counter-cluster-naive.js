#!/usr/bin/env node

const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  for (var i = 0; i < 2; i++) { cluster.fork(); }
} else {
  var counter = 0;
  http.createServer(function(req, res) {
    res.end(JSON.stringify({counter: ++counter, pid: process.pid}));
  }).listen(9999);
}
