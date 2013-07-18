var express = require('express');
var fs = require('fs');
var buffer;

var app = express.createServer(express.logger());

app.use(express.static(__dirname+"/static"));

app.get('/', function(request, response) {
//  response.send('Hello World2!');
    buffer = fs.readFileSync('index.html');
    response.send(buffer.toString());
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
