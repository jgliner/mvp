angular.module('pocket-bonanza.startPage', [])

.controller('startCtrl', ['$scope', 'userFactory', function($scope, userFactory) {
  $scope.user = '';
  $scope.submitName = function(user) {
    userFactory(user);
  }
}])

.factory('userFactory', ['$http', function($http, user) {
  return function(user) {
    console.log(user)
    $http({
      method: 'POST',
      url: '/api/users/',
      data: {"username": user}
    })
  }
}])