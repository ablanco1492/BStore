// main app module


(function() {
  'use strict';
// const bootstrap = require ('bootstrap-sass');
  angular
    .module('testApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/home/home.tpl.html',
          controller: 'HomeCtrl',
          controllerAs: 'home' 
        });
    
      // use the HTML5 History API
      $locationProvider.html5Mode(true);

    });


})();