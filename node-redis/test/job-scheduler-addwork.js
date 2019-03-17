#!/usr/bin/env node

var redis = require('redis').createClient();
var JOB_QUEUE = 'jobs';

redis.zadd(JOB_QUEUE, Date.now() + 5 * 1000, 'email user 1');
redis.zadd(JOB_QUEUE, Date.now() + 10 * 1000, 'email user 2');
