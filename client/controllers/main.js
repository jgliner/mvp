angular.module('pocket-bonanza.mainPage', ['pocket-bonanza.socket'])

.controller('mainCtrl', ['$scope', '$rootScope', 'socket', 'userFactory', function($scope, $rootScope, socket, userFactory) {
  $scope.answerIn = false;

  $scope.submitAnswer = function(answer) {
    $scope.answerIn = true;
    $scope.answer = answer;
    socket.socketEmit('answer in', answer, $rootScope.username);
  }

  socket.socketOn('send prompt', function(prompt) {
    $scope.prompt = prompt;
  });
}])