angular.module("backendEcommerce.categorias", [
  "ui.router"
])
  
  .config(function($stateProvider){

    $stateProvider
    
      .state("categorias.nueva", {
        url : "/nueva",
        templateUrl : "app/categorias/view/CategoriasForm.html"
      })
    
      .state("categorias.editar", {
        url : "/editar/:id", 
        templateUrl : "app/categorias/view/CategoriasForm.html"
      });
  
  })