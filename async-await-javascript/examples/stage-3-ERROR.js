#!/usr/bin/env node

const co = require('co');

sendMessage('tlhunter', 'hi').then(result => {
  console.log(result);
}).catch(err  => {
  console.error(err);
})

function sendMessage(userId, message) {
  return co(function * sendMessageGen() {
    yield Promise.reject(new Error('Bad Stuff'));
  })
}
