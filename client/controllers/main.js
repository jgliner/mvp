angular.module('pocket-bonanza.mainPage', ['pocket-bonanza.socket'])

.controller('mainCtrl', ['$scope', 'socket', 'userFactory', function($scope, socket, userFactory) {
  $scope.answerIn = false;

  $scope.submitAnswer = function(answer) {
    $scope.answerIn = true;
    $scope.answer = answer;
    socket.socketEmit('answer in', answer);
  }

  socket.socketOn('send prompt', function(prompt) {
    $scope.prompt = prompt;
  });
}])