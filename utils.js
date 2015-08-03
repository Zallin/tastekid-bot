exports.parseQuery = function (text){
  var reg = /\/(\w+\b)\s?(.+)/;

  var res = text.match(reg);

  return res ? {command : res[1], text : res[2]} : null;
}

exports.buildResponse = function (arr){
  
}
