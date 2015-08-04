var config = require('./config.json');

exports.parseQuery = function (text){
  var reg = /\/(r|\w+)(\w+)?\s?(.*)/;

  var res = text.match(reg);

  if(res && res[2] && config.types.indexOf(res[2]) < 0) res = null;

  return res ? {
    command : res[1],
    type : res[2],
    text : res[3]
  } : null;
}

exports.buildResponse = function (arr, limit){
  arr = arr.slice(0, limit);

  var msgArr = [];

  for(var i = 0; i < arr.length; i++){
    var item = arr[i].Name + ' | ' + arr[i].Type + '\n';
    msgArr.push(item);
  }

  return msgArr.join(' ');
}
