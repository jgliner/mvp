var app = angular.module('pocket-bonanza', [
  'ui.router',
  'pocket-bonanza.startPage',
  'pocket-bonanza.waitingPage'
  ])

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
  });

  $urlRouterProvider.otherwise('/');
})