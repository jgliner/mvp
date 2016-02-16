angular.module('pocket-bonanza.startPage', ['pocket-bonanza.socket'])

.controller('startCtrl', ['$scope', '$state', 'socket', 'userFactory', function($scope, $state, socket, userFactory) {
  $scope.user = '';
  $scope.submitName = function(user) {
    userFactory(user);
    $state.go('/waiting');
  }
}])

.factory('userFactory', ['$http', '$rootScope', function($http, $rootScope, user) {
  return function(user) {
    $http({
      method: 'POST',
      url: '/api/users/',
      data: {"username": user}
    })
    $rootScope.username = user;
  }
}])