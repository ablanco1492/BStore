// home controller

(function() {
  'use strict';

  angular
    .module('testApp')
    .controller('HomeCtrl', HomeCtrl);
  
  function HomeCtrl(productsData) {
    var vm = this;


    vm.title = 'Footwear';
    vm.cards;

    productsData.getAllProducts()
      .then(function(data) {
        vm.todoLicardsst = data;
      });
    
    // vm.addTodo = function() {
    //   var newTodo = {
    //     'id'  : vm.todoList.length + 1,
    //     'val' : vm.newTodo
    //   };    
    //   vm.todoList.push(newTodo);
    // };

    // vm.removeTodo = function(id) {
    //   vm.todoList.forEach(function(obj, i) {
    //     if(obj.id === id) {
    //       var removed = vm.todoList.splice(i, 1);
    //     }
    //   });
    // };

  }

})();