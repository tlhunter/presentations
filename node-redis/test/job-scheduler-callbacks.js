#!/usr/bin/env node

var redis = require('redis').createClient();
var JOB_QUEUE = 'jobs';

setInterval(function() {
  var now = Date.now();
  redis.zrangebyscore(JOB_QUEUE, 0, now, function(err, jobList) {
    redis.zremrangebyscore(JOB_QUEUE, 0, now, function(err) {
      console.log('jobs', jobList.length ? jobList : 'N/A', process.pid)
    });
  });
}, 1 * 1000);
