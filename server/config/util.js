var userCount = 0;

module.exports = function(io) {
  io.on('connection', function(client) {
    userCount+=1
    console.log('Client conencted. Users in room: ', userCount);
    client.once('client connected', function() {
      io.emit('user joined', userCount);
    });
  });


}