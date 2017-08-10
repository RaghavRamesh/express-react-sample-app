var express = require('express');
var fs = require('fs');
var request = require('request');
var app = express();

// TODO Implement your code here.
// You can use the sample data here: https://demo2697834.mockable.io/movies
// or use your own data
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "X-Requested-With"); // TODO
  next();
});

app.get('/api/videos', function(req, res) {
  request('https://demo2697834.mockable.io/movies', function(err, response, body) {
    res.send(body);
  });
});


app.listen(3000, function () {
	console.log('Server listening on port 3000');
});
