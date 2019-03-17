#!/usr/bin/env node

var co = require('co');

sendMessage(12, {data: true}).then(function(message) {
  console.log(message);
});

function sendMessage(userId, message) {
  return co(function * sendMessageGen() {
    var user = yield getUser(userId);
    var able = yield canSend(user);

    if (!able) {
      return null;
    }

    return writeMessage(user, message);
  });
}

function getUser(userId) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        id: userId,
        nickname: 'tlhunter'
      });
    }, 100);
  });
}

function canSend(user) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(user.id === 12);
    }, 100);
  });
}

function writeMessage(user, data) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        id: 100,
        owner: user.nickname,
        data: data
      });
    }, 100);
  });
}
