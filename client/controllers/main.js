angular.module('pocket-bonanza.mainPage', ['pocket-bonanza.socket'])

.controller('mainCtrl', ['$scope', 'socket', function($scope, socket) {
  socket.socketOn('send prompt', function(prompt) {
    $scope.prompt = prompt;
  });
}])