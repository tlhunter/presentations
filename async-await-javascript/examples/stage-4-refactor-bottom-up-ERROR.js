#!/usr/bin/env node

sendMessage('tlhunter', 'hi').then(result => {
  console.log(result);
}).catch(err => {
  console.error(err);
})

async function sendMessage(userId, message) {
  throw new Error('Bad Stuff');
}
