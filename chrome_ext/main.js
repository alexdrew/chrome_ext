console.log('Hello world');
// const btn = document.getElementById('submit-button');
const input = document.getElementById('input-btn').files[0];
// console.log(btn);
// btn.addEventListener('click', (event) => {
//   console.log(input.value);
// });

// const req = fetch('http://localhost:3000/', {
//   method: 'GET',
//   // body: input.files[0], /* or aFile[0] */
// }); // returns a promise

// req.then((response) => {
//   // returns status + response headers
//   // but not yet the body,
//   // for that call `response[text() || json() || arrayBuffer()]` <-- also promise
//   console.log(response);
// })
//   .catch((xhr) => {
//     console.error(xhr);
//   });

// requires jQuery
const data = {
  file: input,
  return: 'timecode,spotify',
  api_token: '17e5a4fb0168aa8970bd5d18624211cb',
};

$.post('https://api.audd.io/', data, (response) => {
  const result = jQuery.parseJSON(response);
  console.log(result);
});
