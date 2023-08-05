#!/usr/bin/node

const args = require('process').argv;
/*
require('process').argv returns an array:
[javascript location (shebang), called function/file, user arguments]
*/
const urlToRequest = "https://swapi-api.hbtn.io/api/films/" + args[2] + "/";

const request = require('request');

request.get(urlToRequest, function (error, response) {
  if (error) {
    console.log(error.message);
  } else {
    console.log('body: ' + response.body);
    console.log('type: ' + typeof response.body)
    const objectified = JSON.parse(response.body);
    console.log('type of objectified: ' + typeof objectified)
    console.log("objectified: " + objectified["title"])
  }
}
);
