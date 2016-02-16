angular.module('pocket-bonanza.startPage', [])

.controller('startCtrl', ['$scope', 'userFactory', function($scope, userFactory) {
  $scope.user = {name: ''};
  $scope.submitName = function(user) {
    userFactory(user);
  }
}])

.factory('userFactory', [function(userObj) {
  return function(userObj) {
    console.log(userObj.name);
  }
}])