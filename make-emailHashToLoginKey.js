#! /usr/bin/env babel-node --presets node6

import split from 'split';

import MD5 from './src/lib/md5';

const salt = 'Salted!';
const truncateToChars = 12; // max 32

const keys = {};

process.stdin.pipe(split(null, null, { trailing: false }))
  .on('data', processCSVLine)
  .on('end', writeKeys);

function processCSVLine(line) {
  let [email, login] = line.trim().split(/\s*,\s*/g);
  if (!email || !login) {
    console.warn(`missing email or login in line: ${JSON.stringify(line)}`);
    return;
  }
  const hash = MD5.hex(`${salt}${email.toLowerCase()}`).slice(0, truncateToChars);
  keys[hash] = login;
}

function writeKeys() {
  console.log('export default');
  let separator = '{';
  for (let hash in keys) {
    console.log(`${separator} "${hash}": "${keys[hash]}"`);
    separator = ',';
  }
  console.log('};');
}
