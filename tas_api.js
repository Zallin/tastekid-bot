var https = require('https'),
    querystring = require('querystring'),
    config = require('./config.json');

function request(query, fn){
  // add type search support somehow
  
  var string = querystring.stringify({
    q : query,
    k : config.tastekid_api_key
  });

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
