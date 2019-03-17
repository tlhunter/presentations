#!/usr/bin/env node

sendMessage(12, {data: true}).then(function(message) {
  console.log(message);
});

async function sendMessage(userId, message) {
  var user = await getUser(userId);
  var able = await canSend(user);

  if (!able) {
    return null;
  }

  var level = await writeMessage(user, message);

  return level;
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
