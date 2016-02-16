angular.module('pocket-bonanza.mainPage', ['pocket-bonanza.socket'])

.controller('mainCtrl', ['$scope', 'socket', 'userFactory', function($scope, socket, userFactory) {
  $scope.submitAnswer = function(answer) {
    console.log(answer, userFactory);
    socket.socketEmit('answer in', answer, userFactory);
  }

  socket.socketOn('send prompt', function(prompt) {
    $scope.prompt = prompt;
  });
}])