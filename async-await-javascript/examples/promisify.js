#!/usr/bin/env node

const util = require('util')
const pifall = require('pifall')
const fs = require('fs')
const readFile = util.promisify(fs.readFile)
pifall(fs)

;(async () => {
  let stuff = await readFile('stuff.txt')
  let data = await fs.readFileAsync('data.txt')
  console.log(`${stuff}, ${data}`)
})()
