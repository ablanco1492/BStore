// main app module

(function() {
  'use strict';

  angular
    .module('testApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home/home.tpl.html',
          controller: 'HomeCtrl',
          controllerAs: 'home' 
        })
        .when('/about', {
          templateUrl: 'about/about.tpl.html',
          controller: 'AboutCtrl',
          controllerAs: 'about' 
        });
    
      // use the HTML5 History API
      $locationProvider.html5Mode(true);

    });


})();