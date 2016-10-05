// card directive

(function() {
  'use strict';

  angular
    .module('testApp')
    .directive('cardItem', cardItem);

  function cardItem() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/common/directives/card/card.tpl.html',
      scope: {
        'product'   : '=',
        'lastone'   :'='
      }
    };

    return directive;
    
  }
})();