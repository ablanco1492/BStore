// todo directive

(function() {
  'use strict';

  angular
    .module('testApp')
    .directive('todoItem', todoItem);

  function todoItem() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'common/directives/todo/todo.tpl.html',
      scope: {
        'val'       : '=',
        'removetodo': '&'
      }
    };

    return directive;
  }
})();