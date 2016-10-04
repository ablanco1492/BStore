// home controller

(function() {
  'use strict';

  angular
    .module('testApp')
    .controller('HomeCtrl', HomeCtrl);
  
  function HomeCtrl(todoData) {
    var vm = this;

    // vm.todoList = [
    //   {'id': 1, 'val': 'Ir al super' },
    //   {'id': 2, 'val': 'Hacer la tarea de Brainstation' },
    //   {'id': 3, 'val': 'No dormir' },
    //   {'id': 4, 'val': 'Tomar café con donas' },
    //   {'id': 5, 'val': 'Ir a la Unión por unaS birra' }
    // ];

    vm.title = 'TODO List';
    vm.todoList;

    todoData.getAllTodos()
      .then(function(data) {
        vm.todoList = data;
      });
    
    vm.addTodo = function() {
      var newTodo = {
        'id'  : vm.todoList.length + 1,
        'val' : vm.newTodo
      };    
      vm.todoList.push(newTodo);
    };

    vm.removeTodo = function(id) {
      vm.todoList.forEach(function(obj, i) {
        if(obj.id === id) {
          var removed = vm.todoList.splice(i, 1);
        }
      });
    };

  }

})();