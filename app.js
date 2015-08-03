var api = require('./tel_api.js'),
    handlers = require('./handlers.js');

api.getUpdates();

handlers(api);
