var app = angular.module('pocket-bonanza', [
  'ui.router',
  'pocket-bonanza.startPage'
  ])

app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('/', { // Start screen
      url: '/',
      templateUrl: './templates/start.html',
      controller: 'startCtrl'
  });

  $urlRouterProvider.otherwise('/');
})