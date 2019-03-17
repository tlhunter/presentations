#!/usr/bin/env node

const redis = require('redis').createClient();
const Lured = require('lured');
const fs = require('fs');
const KEY_CITY = 'geo-city';
const KEY_DATA = 'hash-city';

const scripts = {
  find: {
    script: fs.readFileSync(`${__dirname}/get-cities.lua`, {encoding:'utf8'}),
    sha: null
  }
};

var BERKELEY = {lat: 37.869103, lon: -122.273412};

var lured = Lured.create(redis, scripts);

redis.geoadd(KEY_CITY, -122.419103, 37.777068, 'san-francisco');
redis.hset(KEY_DATA, 'san-francisco', JSON.stringify({name: 'San Francisco', temp: 65}));
redis.geoadd(KEY_CITY, -122.272938, 37.807235, 'oakland');
redis.hset(KEY_DATA, 'oakland', JSON.stringify({name: 'Oakland', temp: 72}));
lured.load(function(err) {
  redis.evalsha(scripts.find.sha, 2, KEY_CITY, KEY_DATA, BERKELEY.lon, BERKELEY.lat, function(err, data) {
    console.log('cities by Berkeley', data.map(JSON.parse)); // [ {name:"Oakland",temp:72} ]
    redis.quit();
  });
});
