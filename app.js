var api = require('./tel_api.js'),
    handlers = require('./handlers.js'),
    http = require('https');

api.getUpdates();

handlers(api);

var server = http.createServer(function (req, res) {
  res.end();
});

server.listen(3000, function (){
  console.log('server is up');
});
