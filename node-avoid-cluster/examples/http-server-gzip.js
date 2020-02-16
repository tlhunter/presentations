#!/usr/bin/env node

// npm install fastify@2 fastify-compress@2
const server = require('fastify')();
const compress = require('fastify-compress');
server.register(compress);

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 4080;
const DATA = require('./data.json');

server.get('/', async (req, reply) => {
  // console.log(req.headers);
  return DATA;
});

server.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});
