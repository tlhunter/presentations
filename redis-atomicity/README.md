## Talk Title

Atomicity in Redis (with examples in Node.js)

Originally given at [RedisConf '19](https://redislabs.com/redisconf19/#speakers) in April, 2019.

## Abstract

This would be a more focused version of my 2017 talk. It would focus on running Redis commands atomically from an application. Example code would be written in Node.js.

- Basics of Redis It's single threaded (like Node.js)
- Many clients can be connected at once and intersperce commands
- Race conditions can occur
- Can't do GET + SET, should do GETSET
- Can't do EXISTS + SET, should do SETNX
- Include diagram visualizing a race condition
- Using Multi
  - The MULTI/EXEC commands allow for basic, non-chainable atomicity
  - Can do previous MULTI + GET + SET + EXEC
  - Include diagram visualizing command grouping
  - Commands are queued up, per client, then run all at once
  - Technically other commands can be run while commands are queueing
  - But commands will always run as a group
  - Explain why it's different from pipelining
- Using Lua Scripting
  - The ultimate form of atomicity, but with CPU overhead
  - Include sample operation impossible with MULTI

- 2017 RedisConf talk: [Node, Redis, and You! v2](https://thomashunter.name/presentations/node-redis-v2)

## Outline

TODO

## Biography

Thomas is the author of Advanced Microservices and a prolific public speaker with a passion for reducing complex problems into simple language and diagrams. His career includes working at Fortune 50's in the Midwest, co-founding a successful startup, and everything in between.

## Other Talks

<https://thomashunter.name/talks/>
