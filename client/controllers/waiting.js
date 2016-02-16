angular.module('pocket-bonanza.waitingPage', ['pocket-bonanza.socket'])

.controller('waitingCtrl', ['$scope', '$state', 'socket', function($scope, $state, socket) {
  $scope.connect = socket.socketEmit('client connected');
  socket.socketOn('user joined', function(count) {
    $scope.userCount = count;
  });
  socket.socketOn('start round', function(count) {
    $state.go('/main');
  });
}])