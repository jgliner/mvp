var userCount = 0;

module.exports = function(socket) {
  socket.on('client connected', function() {
    userCount+=1;
    socket.broadcast.emit('user joined', userCount);
    console.log('TO CLIENT: ', userCount);
  })
}