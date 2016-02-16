angular.module('pocket-bonanza.waitingPage', ['pocket-bonanza.socket'])

.controller('waitingCtrl', ['$scope', '$state', 'socket', function($scope, $state, socket) {
  $scope.connect = socket.socketEmit('client connected');

  socket.socketOn('user joined', function(count) {
    $scope.userCount = count;
    $scope.$apply(function() {
      $scope.players = 2-count === 1 ? 'Player' : 'Players';
      $scope.userCountLabel = 2-count === 1 ? 'Other Waiting' : 'Others Waiting';
    })
  });

  socket.socketOn('start round', function() {
    $state.go('/main');
  });
}])