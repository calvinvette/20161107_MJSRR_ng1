'use strict';

/**
 * @ngdoc overview
 * @name yoDemoApp
 * @description
 * # yoDemoApp
 *
 * Main module of the application.
 */
angular
  .module('yoDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/CustomerRegistration', {
        templateUrl: 'views/CustomerRegistration.html',
        controller: 'CustomerRegistrationController'
      })
      .when('/CustomerTable', {
        templateUrl: 'views/CustomerTable.html',
        controller: 'CustomerRegistrationController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
