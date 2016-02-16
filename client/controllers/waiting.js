angular.module('pocket-bonanza.waitingPage', ['pocket-bonanza.socket'])

.controller('waitingCtrl', ['$scope', 'socket', function($scope, socket) {
  $scope.connect = socket.socketEmit('client connected');
  socket.socketOn('user joined', function(count) {
    $scope.userCount = count;
  })
}])