/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const Express = require('express');
const fs = require('fs');
const request = require('request');
const cors = require('cors');

const app = Express();
// // const fetch = require('fetch');
// app.use(cors());
const controller = {
  getSongInfo: (req, res, next) => {
    const apiToken = '17e5a4fb0168aa8970bd5d18624211cb';

    const data = {
      file: fs.createReadStream('/Users/alex/cs/_Hackathon/where-is-the-love.mp3'),
      return: 'timecode,spotify',
      api_token: apiToken,
    };

    request({
      uri: 'https://api.audd.io/',
      formData: data,
      method: 'POST',
    }, (error, response, body) => {
      res.locals.text = body;
      res.locals.songInfo = JSON.parse(body);
      // console.log(res.locals.songInfo);
      next();
    });
  },
};

app.use('/',
  controller.getSongInfo,
  (req, res) => {
    console.log('Call got invoked');
    // res.set({
    //   'Access-Control-Allow-Origin': '*',
    // });
    // res.status(234);
    // console.log(res.locals.text);
    // res.json(res.locals.text);
    res.send('hello');
  });

app.listen(3000, () => {
  console.log('listening on 3000');
});
