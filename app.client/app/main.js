// main app module
const bootstrap = require ('bootstrap');
const angular = require('angular');

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
        });
    
      // use the HTML5 History API
      $locationProvider.html5Mode(true);

    });


})();