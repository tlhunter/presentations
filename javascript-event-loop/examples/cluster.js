var cluster = require('cluster');
var http = require('http');

if (cluster.isMaster) {
  cluster.fork(); cluster.fork(); cluster.fork();
} else {
  http.createServer(function(req, res) {
    res.end("Hello World from " + process.pid);
  }).listen(8000);
}
