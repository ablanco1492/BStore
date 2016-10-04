// header directive

(function() {
  'use strict';

  angular
    .module('testApp')
    .directive('headerDirective', headerDirective);

  function headerDirective() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'common/directives/header/header.tpl.html',
      controller: HeaderController,
      controllerAs: 'header'
    };

    return directive;

    function HeaderController() {
      var vm = this;

    }
  }
})();