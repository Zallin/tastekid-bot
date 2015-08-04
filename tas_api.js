var https = require('https'),
    querystring = require('querystring'),
    config = require('./config.json');

function request(query, type, fn){

  var params = {
    q : query,
    k : config.tastekid_api_key
  }

  if(type) params.type = type;

  var string = querystring.stringify(params);

  var reqOpts = {
    hostname : 'www.tastekid.com',
    path : '/api/similar?' + string,
    method : 'GET'
  }

  var req = https.request(reqOpts, function (res){

    var bufs = [];

    res.on('data', function (chunk){
      bufs.push(chunk);
    });

    res.on('end', function (){
      var buf = Buffer.concat(bufs);

      fn(JSON.parse(buf));
    });
  });

  req.end();
}

exports.request =  request;
