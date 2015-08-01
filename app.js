var https = require('https'),
    CronJob = require('cron').CronJob;

var TEL_API_KEY = /*Telegram API key here*/;

new CronJob('* * * * * *', function (){
  requestBot();
}, null, true);

function requestBot(method, fn){

}
