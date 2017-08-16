var express = require('express');
var fs = require('fs');
var request = require('request');
var app = express();

// Adds the following headers to the response when a request to /api/videos is made
app.all('/api/videos', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// GETs data from the demo API and sends the response from the API in the GET response body
app.get('/api/videos', function(req, res) {
  request('https://demo2697834.mockable.io/movies', function(err, response, body) {
    res.send(body);
  });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
