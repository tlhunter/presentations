const redis = require('redis').createClient();

const now = Date.now();
redis.batch()
  .zrangebyscore('jobs', 0, now) // get jobs
  .zremrangebyscore('jobs', 0, now) // delete jobs
  .exec((error, data) => {
    let jobList = data[0];
    console.log('jobs', jobList); // perform work
  });
