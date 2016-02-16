angular.module('pocket-bonanza.resultsPage', ['pocket-bonanza.socket'])

.controller('resultsCtrl', ['$scope', '$rootScope', 'socket', function($scope, $rootScope, socket) {
  $scope.notOwnUsername = function(sub) {
    return sub.username !== $rootScope.username;
  }
}])
.directive('answer', function() {
  return {
    template:
    `
    <div ng-repeat="ans in ansObj | filter:notOwnUsername">
      <h2>{{ans.username}}</h2>
      <h3>{{ans.submission}}</h3>
    </div>

    `
  }
})