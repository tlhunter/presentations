#!/usr/bin/env node

'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator');

sendMessage(12, { data: true }).then(function (message) {
  console.log(message);
});

function sendMessage(userId, message) {
  var user, able, level;
  return _regeneratorRuntime.async(function sendMessage$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(getUser(userId));

      case 2:
        user = context$1$0.sent;
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(canSend(user));

      case 5:
        able = context$1$0.sent;

        if (able) {
          context$1$0.next = 8;
          break;
        }

        return context$1$0.abrupt('return', null);

      case 8:
        context$1$0.next = 10;
        return _regeneratorRuntime.awrap(writeMessage(user, message));

      case 10:
        level = context$1$0.sent;
        return context$1$0.abrupt('return', level);

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function getUser(userId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({
        id: userId,
        nickname: 'tlhunter'
      });
    }, 100);
  });
}

function canSend(user) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(user.id === 12);
    }, 100);
  });
}

function writeMessage(user, data) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({
        id: 100,
        owner: user.nickname,
        data: data
      });
    }, 100);
  });
}
