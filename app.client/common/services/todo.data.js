// home controller

(function() {
  'use strict';

  angular
    .module('testApp')
    .service('todoData', todoData);

  function todoData($http) {

    var getAllTodos = function () {
			return $http.get('/todos');
		};
  
    const public_api = {
      getAllTodos: getAllTodos
    }

    return public_api;

  }

})();