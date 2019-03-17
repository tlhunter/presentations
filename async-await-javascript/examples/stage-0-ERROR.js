#!/usr/bin/env node

try {
  var result = sendMessage('tlhunter', 'hi')
} catch (e) {
  return console.error(e)
}
console.log(result)

function sendMessage(userId, message) {
  throw new Error('Bad Stuff')
}
