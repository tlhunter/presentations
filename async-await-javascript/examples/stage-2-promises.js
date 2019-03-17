#!/usr/bin/env node

sendMessage(12, {data: true}).then(function(result) {
  console.log(result);
});

function sendMessage(userId, message, cb) {
  var user = null;
  return getUser(userId).then(function(_user) {
    user = _user;
    return canSend(_user);
  }).then(function(able) {
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
