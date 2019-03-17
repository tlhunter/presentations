#!/usr/bin/env node

var generator = sendMessage(12, {data: true});

generator.next().value.then(function(user) {
   return generator.next(user).value.then(function(able) {
     return generator.next(able).value.then(function(result) {
       console.log(result);
     });
   });
 });

function * sendMessage(userId, message) {
  var user = yield getUser(userId);
  var able = yield canSend(user);

  if (!able) {
    return null;
  }

  return writeMessage(user, message);
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
