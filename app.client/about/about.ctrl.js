// about controller

(function() {
  'use strict';

  angular
    .module('testApp')
    .controller('AboutCtrl', AboutCtrl);
  
  function AboutCtrl() {
    var vm = this;
    vm.title = 'About!';
  }

})();