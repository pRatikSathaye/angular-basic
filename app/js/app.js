var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/login', {
    templateUrl: 'pages/login.html',
    controller: 'loginController'
  })
  .otherwise({
    templateUrl: 'pages/not-found.html',
    controller: 'notFoundController'
  });
  
});