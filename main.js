/***
* Title: main.js
* Author: Franklin Ludgood
* Date Created: 10-17-2018
****/

// Includes objects.
var http = require('http');
var url  = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var port = 30003;
var hello = 'hello';
var welcome = 'Welcome to my server.';

// Configure the server to respond to request with a json.
var server = http.createServer(function(req, res){

// Parse the url
var parsedUrl = url.parse(req.url, true);

// Get the path
var path = parsedUrl.pathname;
var trimmedPath = path.replace(/^\/+|\/+$/g, '');

// Get the query string as an object.
var queryStringObject = parsedUrl.query;

// Get the HTTP method
var method = req.method.toLowerCase();

// Get the payload
var decoder = new StringDecoder('utf-8');
  var buffer = '';
  req.on('data', function(data) {
      buffer += decoder.write(data);
  });

  req.on('end', function() {
      buffer += decoder.end();


  // Use the payload returned from the handler, or set the default payload to an empty object
  var payload = { };

  if (method === 'post' && trimmedPath === hello)
  {
    payload = {
      'hello' : hello,
      'welcome' : welcome
    };
  }



  // Convert the payload to a string
  var payloadString = JSON.stringify(payload);

  // Return the response
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(payloadString);
  console.log("Returning this response: ", 200, payloadString);
  });
});

server.listen(port, function(){
  console.log('The server is up and running on port: ' + port);
});
