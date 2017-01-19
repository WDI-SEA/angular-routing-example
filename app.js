angular.module('App', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/cool.html',
      controller: 'CoolCtrl'
    })
    .state('sean', {
      url: '/sean/:message',
      templateUrl: 'views/sean.html',
      controller: 'SeanCtrl'
    })
  }]);