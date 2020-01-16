import { inherits } from 'util';

const request = require('request');
const fs = require('fs');
const path = require('path');

const req = request.post(url, (err, resp, body) => {
  if (err) {
    console.log('Error!');
  } else {
    console.log(`URL: ${body}`);
  }
});
const form = req.form();
const filepath = path.resolve(__dirname, './where-is-the-love.wav');

form.append('file', fs.createReadStream(filepath));
