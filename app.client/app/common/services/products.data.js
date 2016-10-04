// home controller

(function() {
  'use strict';

  angular
    .module('testApp')
    .service('productsData', productsData);

  function productsData($http) {

    var getAllProducts = function () {
			return $http.get('/api/products');
		};
  
    const public_api = {
      getAllProducts: getAllProducts
    }

    return public_api;

  }

})();