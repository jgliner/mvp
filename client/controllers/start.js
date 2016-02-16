angular.module('pocket-bonanza.startPage', [])

.controller('startCtrl', ['$scope', '$state', 'userFactory', function($scope, $state, userFactory) {
  $scope.user = '';
  $scope.submitName = function(user) {
    userFactory(user)
    $state.go('/waiting')
  }
}])

.factory('userFactory', ['$http', function($http, user) {
  return function(user) {
    $http({
      method: 'POST',
      url: '/api/users/',
      data: {"username": user}
    })
  }
}])