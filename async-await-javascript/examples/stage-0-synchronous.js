#!/usr/bin/env node

var result = sendMessage(12, {data: true});
console.log(result);

function sendMessage(userId, message) {
  var user = getUser(userId);
  var able = canSend(user);

  if (!able) {
    return null;
  }

  var level = writeMessage(user, message);

  return level;
}

function getUser(userId) {
  return {
    id: userId,
    nickname: 'tlhunter'
  };
}

function canSend(user) {
  return user.id === 12;
}

function writeMessage(user, data) {
  return {
    id: 100,
    owner: user.nickname,
    data: data
  };
}
