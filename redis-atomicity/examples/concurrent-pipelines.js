#!/usr/bin/env node

const redis = require('redis').createClient();
let keys = [];
for (let i = 0; i < 100000; i++) keys.push(i);
shuffle(keys);
let pipeline = redis.batch();
for (let key of keys) {
  pipeline = pipeline.hsetnx('pipeline', `k${key}`, process.pid);
}
console.log(`PID ${process.pid} START`);
pipeline.exec(() => {
  console.log(`PID ${process.pid} STOP`);
  redis.quit()
});

// https://stackoverflow.com/a/6274381/538646
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
