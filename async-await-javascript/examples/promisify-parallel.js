#!/usr/bin/env node

const util = require('util')
const pifall = require('pifall')
const fs = require('fs')
const readFile = util.promisify(fs.readFile)
pifall(fs)

;(async () => {
  let [stuff, data] = await Promise.all([
    readFile('stuff.txt'),
    fs.readFileAsync('data.txt')
  ]);
  console.log(`${stuff}, ${data}`)
})()
