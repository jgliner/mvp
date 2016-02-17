var app = angular.module('pocket-bonanza', [
  'ui.router',
  'pocket-bonanza.startPage',
  'pocket-bonanza.waitingPage',
  'pocket-bonanza.mainPage',
  'pocket-bonanza.resultsPage',
  'pocket-bonanza.socket'
]);

app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('/', { // Start screen
      url: '/',
      templateUrl: './templates/start.html',
      controller: 'startCtrl'
  })
  .state('/waiting', { // Waiting screen
      url: '/',
      templateUrl: './templates/waiting.html',
      controller: 'waitingCtrl'
  })
  .state('/main', { // Main screen
      url: '/',
      templateUrl: './templates/main.html',
      controller: 'mainCtrl'
  })
  .state('/results', { // Results screen
      url: '/',
      templateUrl: './templates/results.html',
      controller: 'resultsCtrl'
  });

  $urlRouterProvider.otherwise('/');
})

.controller('persistentCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.heading = $rootScope.username || 'Pocket Bonanza'
}])