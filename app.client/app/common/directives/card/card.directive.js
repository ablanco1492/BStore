// card directive

(function() {
  'use strict';

  angular
    .module('testApp')
    .directive('cardItem', todoItem);

  function todoItem() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'common/directives/card/card.tpl.html',
      scope: {
        'product'       : '=',
        selected: false
      }
    };

    return directive;
  }
})();