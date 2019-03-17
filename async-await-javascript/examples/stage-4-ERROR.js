#!/usr/bin/env node

(async () => {
  try {
    var result = await sendMessage('tlh', 'hi');
  } catch(err) {
    return console.error(err);
  }

  console.log(result);
})()

async function sendMessage(userId, message) {
  throw new Error('Bad Stuff');
}
