var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var buffer=new Buffer(2828);
    fdr = fs.openSync('index.html','r')
    fs.readSync(fdr, buffer, 0, 2828);
    console.log(buffer.toString('utf-8'));
    fs.close(fdr);
    response.send( buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
