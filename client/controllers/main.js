angular.module('pocket-bonanza.mainPage', ['pocket-bonanza.socket'])

.controller('mainCtrl', ['$scope', '$rootScope', '$state', 'socket', 'userFactory', function($scope, $rootScope, $state, socket, userFactory) {
  $scope.answerIn = false;
  $scope.allIn = false;

  $scope.submitAnswer = function(answer) {
    $scope.answerIn = true;
    $scope.answer = answer;
    socket.socketEmit('answer in', answer, $rootScope.username);
  }

  socket.socketOn('send prompt', function(prompt) {
    $scope.prompt = prompt;
  });

  socket.socketOn('all in', function(ansObj) {
    $rootScope.ansObj = ansObj;
    $state.go('/results');
  })
}])