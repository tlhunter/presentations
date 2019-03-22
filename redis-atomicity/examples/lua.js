const redis = require('redis').createClient();
const GEO = 'geo-city-locations', HASH = 'hash-city-data';
const script = require('fs').readFileSync(`./get-cities.lua`)

redis.geoadd(GEO, -122.419103, 37.777068, 'san-francisco');
redis.hset(HASH, 'san-francisco', JSON.stringify({name: 'SF', temp: 65}));

redis.geoadd(GEO, -122.272938, 37.807235, 'oakland');
redis.hset(HASH, 'oakland', JSON.stringify({name: 'Oakland', temp: 72}));

const BERKELEY = {lon: -122.273412, lat: 37.869103};
redis.eval(script, 2, GEO, HASH, BERKELEY.lon, BERKELEY.lat, (e, data) => {
  console.log('cities near Berkeley', data.map(JSON.parse));
  // [ {name:"Oakland",temp:72} ]
});
