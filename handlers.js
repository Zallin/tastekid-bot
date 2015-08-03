var tas_api = require('./tas_api.js'),
    config = require('./config.json');

module.exports = function (tel_api){

  tel_api.on('r', function (req){
    if(!req.text) return tel_api.sendMessage(config.badquery, req);

    tas_api.request(req.query.text, function (res){

      if(res.Similar.Results.length > 0){
        // allow user to set limits
        var limit = 5, arr = res.Similar.Results.slice(0, limit);

        var msgArr = ['If you like', req.query.text, 'you will probably like', '\n\n'];

        for(var i = 0; i < arr.length; i++){
          var item = arr[i].Name + ' | ' + arr[i].Type + '\n';
          msgArr.push(item);
        }

        var text = msgArr.join(' ');

        tel_api.sendMessage(text, req);
      } else {
        tel_api.sendMessage(config.notFound, req);
      }
    });
  });

  tel_api.on('start', function(req){
    tel_api.sendMessage(config.greetings, req);
  });
}
