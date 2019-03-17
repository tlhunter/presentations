#!/usr/bin/env node

const cluster = require('cluster');
const http = require('http');
const redis = require('redis').createClient();

if (cluster.isMaster) {
  for (var i = 0; i < 2; i++) { cluster.fork(); }
} else {
  http.createServer(function(req, res) {
    redis.incr('counter', function(error, data) {
      res.end(JSON.stringify({counter: data, pid: process.pid}));
    });
  }).listen(9999);
}
