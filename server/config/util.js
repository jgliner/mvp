var db = require('../db/questionizerControllers.js');
var Promise = require('bluebird');

var userCount = 0;

module.exports = function(io) {
  // Socket events and emitters
  io.on('connection', function(client) {
    userCount+=1
    console.log('Client conencted. Users in room: ', userCount);

    client.once('client connected', function() {
      io.emit('user joined', userCount);
      if (userCount === 2) { // manually change for more/fewer players
        io.emit('start round');
        var countdown = 2;
        setInterval(function() {
          countdown--;
          console.log(countdown)
          if (countdown === 0) {
            console.log('GO!')
            db.selectPrompt(function(prompt) {
              console.log(prompt)
              io.emit('send prompt', prompt);
            })
            clearInterval(this);
          }
        }, 1000);
      }
    });

    client.on('disconnect', function (client) {
        userCount--;
        console.log('User left, count is now: ', userCount)
    });
  });

}