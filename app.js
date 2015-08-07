var api = require('./tel_api.js'),
    handlers = require('./handlers.js'),
    http = require('http'),
    fs = require('fs');

api.getUpdates();

handlers(api);

var server = http.createServer(function (req, res) {
  var readable = fs.createReadStream('index.html');

  readable.on('data', function (chunk){
    res.write(chunk);
  });

  readable.on('end', function (){
    res.end();
  });

});

var port = process.env.PORT || 3000;

server.listen(port, function (){
  console.log('server is up');
});
