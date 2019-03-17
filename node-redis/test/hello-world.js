#!/usr/bin/env node

var redis = require('redis').createClient();
redis.set('hello', 'world', function(err) {
  if (err) { throw err; }
  redis.get('hello', function(err, data) {
    if (err) { throw err; }
    console.log('hello', data);
    redis.quit();
  });
});
