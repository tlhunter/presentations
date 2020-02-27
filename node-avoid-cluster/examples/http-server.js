#!/usr/bin/env node

// npm install fastify@2
const server = require('fastify')();

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 4080;
const DATA = require(process.env.BIG ? './data-170kb.json' : './data-17kb.json');

server.get('/', async (req, reply) => DATA);

server.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});
