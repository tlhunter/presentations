#!/usr/bin/env node

/**
 * Why does this code work?
 * Redis is single threaded
 * Node is single threaded
 * Commands are queued even when a connection is no yet established
 */
var redis = require('redis').createClient();
redis.set('hello', 'world');
redis.get('hello', function(err, data) {
  console.log('hello', data);
});
redis.quit();
