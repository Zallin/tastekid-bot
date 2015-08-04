var tas_api = require('./tas_api.js'),
    config = require('./config.json'),
    utils = require('./utils.js');

module.exports = function (tel_api){

  tel_api.on('r', function (req){
    if(!req.query.text) return tel_api.sendMessage(config.badquery, req);

    tas_api.request(req.query.text, req.query.type, function (res){

      if(res.Similar.Results.length > 0){
        // allow user to set limits
        var limit = 5;

        var text = utils.buildResponse(res.Similar.Results, limit);

        tel_api.sendMessage(text, req);
      } else {
        tel_api.sendMessage(config.notFound, req);
      }
    });
  });

  tel_api.on('start', function(req){
    tel_api.sendMessage(config.greetings + config.help, req);
  });

  tel_api.on('help', function (req){
    tel_api.sendMessage(config.help, req);
  });
}
