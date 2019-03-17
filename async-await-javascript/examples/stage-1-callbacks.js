#!/usr/bin/env node

sendMessage(12, {data: true}, function(err, result) {
  if (err) {
    return void console.error(err);
  }

  console.log(result);
});

function sendMessage(userId, message, cb) {
  getUser(userId, function(err, user) {
    if (err) return void cb(err); // err check
    canSend(user, function(err, able) {
      if (err) return void cb(err); // err check
      if (!able) {
        return cb(null);
      }
      writeMessage(user, message, function(err, level) {
        if (err) return void cb(err); // err check
        cb(null, level);
      });
    });
  });
}

function getUser(userId, cb) {
  setTimeout(function() {
    cb(null, {
      id: userId,
      nickname: 'tlhunter'
    });
  }, 100);
}

function canSend(user, cb) {
  setTimeout(function() {
    cb(null, user.id === 12);
  }, 100);
}

function writeMessage(user, data, cb) {
  setTimeout(function() {
    cb(null, {
      id: 100,
      owner: user.nickname,
      data: data
    });
  }, 100);
}
