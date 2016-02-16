angular.module('pocket-bonanza.socket', [])

.factory('socket', function($rootScope) {
  var socket = io.connect();

  return {
    socketEmit: function(toServer) {
      socket.emit(toServer);
    },

    socketOn: function(fromServer, cb) {
      socket.on(fromServer, function(data) {
        console.log(data)
        $rootScope.$apply(cb(data));
      });
    }
  }

})