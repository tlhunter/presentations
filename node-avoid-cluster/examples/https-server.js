#!/usr/bin/env node

// npm install fastify@2
const fs = require('fs');
const server = require('fastify')({ https: {
  key: fs.readFileSync(__dirname+'/private.key'),
  cert: fs.readFileSync(__dirname+'/public.cert'),
}});

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 4443;
const DATA = require('./data.json');

server.get('/', async (req, reply) => DATA);

server.listen(PORT, HOST, () => {
  console.log(`https://${HOST}:${PORT}`);
});
