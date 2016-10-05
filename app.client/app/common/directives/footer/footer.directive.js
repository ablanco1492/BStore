// header directive

(function() {
  'use strict';

  angular
    .module('testApp')
    .directive('footerDirective', footerDirective);

  function footerDirective() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/common/directives/footer/footer.tpl.html',
      controller: FooterController,
      controllerAs: 'footer'
    };

    return directive;

    function FooterController() {
      var vm = this;

    }
  }
})();