#!/usr/bin/env node

sendMessage('tlhunter', 'hi', (err, result) => {
  if (err) {
    return console.error(err)
  }
  console.log(result)
})

function sendMessage(userId, message, cb) {
  setImmediate(() => cb(new Error('Bad Stuff')))
}
