angular.module('pocket-bonanza.mainPage', ['pocket-bonanza.socket'])

.controller('mainCtrl', ['$scope', '$rootScope', '$state', 'socket', 'userFactory', function($scope, $rootScope, $state, socket, userFactory) {
  $scope.answerIn = false;
  $scope.allIn = false;

  $scope.submitAnswer = function(answer) {
    $scope.answerIn = true;
    $scope.answer = answer;
    if (answer.match(/(youtube)/igm)) {
      var vidId = answer.slice(answer.indexOf('?v=')+3)
      window.searchYoutube(answer, function(data) {
        console.log(data)
      })
    }
    else {
      socket.socketEmit('answer in', answer, $rootScope.username);
    }
  }

  $scope.promptOrCountdown = 'Get Ready!';
  $scope.prompt = 3;

  socket.socketOn('send prompt', function(prompt) {
    $scope.prompt = prompt;
    if (prompt.length > 1) {
      $scope.promptOrCountdown = 'The Category is...';
      $rootScope.prompt = prompt
    }
  });

  socket.socketOn('all in', function(ansObj) {
    $rootScope.ansObj = ansObj;
    $state.go('/results');
  })
}])