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
    <div ng-repeat="ans in ansObj | filter:notOwnUsername" class="col-xs-4 answer">
      <h2>{{ans.username}}</h2>
      <a href={{ans.submission}}><h3 class="sub">X</h3></a>
    </div>

    `
  }
})