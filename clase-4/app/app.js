angular.module("backendEcommerce", [
  "backendEcommerce.categorias",
  "backendEcommerce.productos",
  "ui.router"
])

  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state("categorias", {
        url : "/categorias",
        templateUrl : "app/categorias/view/CategoriasTemplate.html",
        controller : "CategoriasController",
        controllerAs : "cat"
      })
      .state("productos", {
        url : "/productos",
        templateUrl : "app/productos/view/ProductosTemplate.html",
        controller : "ProductosController",
        controllerAs : "prod"
      });
  
    $urlRouterProvider.otherwise("/categorias");
  
  })

  .controller("MainController", function(){
      this.brand = "Angular Services";
  });

