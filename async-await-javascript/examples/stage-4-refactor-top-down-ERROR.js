#!/usr/bin/env node

(async () => {
  try {
    var result = await sendMessage('tlh', 'hi');
  } catch(err) {
    return console.error(err);
  }
  console.log(result);
})()

function sendMessage(userId, message) {
  return Promise.reject(new Error('Bad Stuff'));
}
