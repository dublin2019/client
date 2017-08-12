#! /usr/bin/env babel-node --presets node6

import split from 'split';

import MD5 from './src/lib/md5';

const salt = 'Salted!';
const truncateTo = 12; // max 32 chars in a hex MD5 hash
const trailing = false;

const keys = {};

let separator = `export default
{`;

process.stdin.pipe(split(null, null, { trailing }))
  .on('data', function processCSVLine(line) {
    let [email, key] = line.trim().split(/\s*,\s*/g);
    if (!email || !key) {
      console.warn(`missing email or key in line: ${JSON.stringify(line)}`);
      return;
    }
    const hash = MD5.hex(`${salt}${email.toLowerCase()}`).slice(0, truncateTo);
    if (1 !== (keys[hash] = 1 + (keys[hash] || 0))) {
      console.warn(`Duplicate key ${key} for email ${email}`);
    }
    console.log(`${separator} "${hash}": "${key}"`);
    separator = ',';
  })
  .on('end', function() {
    console.log('}');
  });
