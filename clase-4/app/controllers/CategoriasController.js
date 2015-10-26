var backendEcommerce = angular.module("backendEcommerce");

backendEcommerce.controller("CategoriasController", function(CategoriaService){

	var self = this;
	this.categorias = [];
	this.selected = false;
	this.categoria = {};
	this.formLabel = "Nueva Categoria";
	
	this.select = function(categoria){
		this.selected = categoria;
	};
	
	this.isSelected = function(categoria){
		return this.selected && this.selected.categoria_id == categoria.categoria_id;
	};
	
	CategoriaService.get().then(function(data){
		self.categorias = data;
	});
	
});