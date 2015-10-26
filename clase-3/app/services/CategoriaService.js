var backendEcommerce = angular.module("backendEcommerce");

backendEcommerce.service("CategoriaService", function($http){

	var URI_BASE = "api/categorias.php?action=";
	var URI = {
		LIST : URI_BASE + "list",
		CREATE : URI_BASE + "create"
	};
	
	this.get = function(){
		return $http.get(URI.LIST).then(function(res){
			return res.data.data.categorias;
		});
	};
	
	this.create = function(data){
		return $http.post(URI.CREATE, data).then(function(res){
			return res.data.data;
		});
	};	
	
});