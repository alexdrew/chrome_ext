const apiToken = '17e5a4fb0168aa8970bd5d18624211cb';
const fs = require('fs');
// // const fetch = require('fetch');

const request = require('request');

const data = {
  file: fs.createReadStream('/Users/alex/cs/_Hackathon/where-is-the-love.mp3'),
  return: 'timecode,spotify',
  api_token: apiToken,
};

request({
  uri: 'https://api.audd.io/',
  formData: data,
  method: 'POST',
}, (err, res, body) => {
  console.log(JSON.parse(body));
});

// const fileRead = fs.readFileSync('/Users/alex/cs/_Hackathon/chrome_ext/example1.mp3');
// const data = {

//   file: fileRead,
//   return: 'timecode,apple_music,deezer,spotify',
//   api_token: apiToken,
// };


// const req = request({
//   uri: 'https://api.audd.io/',
//   formData: data,
//   method: 'POST',
// }, (err, res, body) => {
//   if (err) console.log(err);
//   else {
//     console.log(JSON.parse(body));
//   }
// });


// ~~~~~~~

// const data = {
//   url: 'https://audd.tech/example1.mp3',
//   return: 'timecode,apple_music,deezer,spotify',
//   api_token: 'test',
// };

// $.getJSON('https://api.audd.io/?jsonp=?', data, (result) => {
//   console.log(result);
// });

// fetch('https://api.audd.io/', {
//   method: 'POST',
//   form: {
//     url: 'https://audd.tech/example1.mp3',
//     return: 'timecode,apple_music,deezer,spotify',
//     api_token: 'test',
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
