#!/usr/bin/env node

sendMessage('tlhunter', 'hi').then(result => {
  console.log(result)
}).catch(err => {
  console.error(err)
})

function sendMessage(userId, message) {
  return Promise.reject(new Error('Bad Stuff'))
}
