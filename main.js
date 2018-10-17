/***
* Title: main.js
* Author: Franklin Ludgood
* Date Created: 10-17-2018
****/

// Includes objects.
var http = require('http');
var url  = require('url');
var port = 30003;

var server = http.createServer(function(req, res){

});

server.listen(port, function(){
  console.log('The server is up and running on port: ' + port);
});
