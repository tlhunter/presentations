#!/usr/bin/env node

var redis = require('redis').createClient();
var JOB_QUEUE = 'jobs';

setInterval(function() {
  var now = Date.now();
  redis.multi()
    .zrangebyscore(JOB_QUEUE, 0, now)
    .zremrangebyscore(JOB_QUEUE, 0, now)
    .exec(function(error, data) {
      var jobList = data[0];
      console.log('jobs', jobList.length ? jobList : 'N/A', process.pid)
    });
}, 1 * 1000);
