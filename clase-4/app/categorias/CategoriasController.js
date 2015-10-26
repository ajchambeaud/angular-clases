angular.module("backendEcommerce.categorias")

  .controller("CategoriasController", function($state, CategoriaService, $window){

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
  
      this.nuevaCategoria = function(){
        this.selected = false;
        this.categoria = {};
        this.formLabel = "Nueva Categoria";
        $state.go("categorias.nueva");
      };
  
      this.editarCategoria = function(){
        this.categoria = JSON.parse(JSON.stringify(this.selected));
        this.formLabel = "Editar Categoria";
        $state.go("categorias.editar", { id : this.categoria.categoria_id });
      };
  
      this.guardarCategoria = function(){
        if(this.selected.categoria_id){
          this.actualizar(this.categoria);
        }else{
          this.crear(this.categoria);
        }
      };
  
      this.crear = function(categoria){
        CategoriaService.create(categoria)
          .then(function(data){
            self.getCategorias();
            self.nuevaCategoria();
          });
      };

      this.actualizar = function(categoria){
        CategoriaService.update(categoria)
          .then(function(data){
            self.getCategorias();
            self.nuevaCategoria();
          });
      };  
  
      this.eliminarCategoria = function(){
        if($window.confirm("Eliminar categoria " + this.selected.categoria_desc)){
          CategoriaService.delete(this.selected).then(function(){
            self.getCategorias();
            self.selected = false;
          });
        }
      };
  
      this.getCategorias = function(){
        return CategoriaService.get().then(function(data){
            self.categorias = data;
        });
      };

      this.init = function(){
        this.getCategorias().then(function(){
        
            if($state.is("categorias.editar")){
            
              self.selected = self.categorias.filter(function(item){
                return item.categoria_id == $state.params.id;
              })[0];
              self.categoria = JSON.parse(JSON.stringify(self.selected));
              self.formLabel = "Editar Categoria";
              
            }else if($state.is("categorias.nueva")){
              
              self.selected = false;
              self.categoria = {};
              self.formLabel = "Nueva Categoria";
              
            }
        });
      };
  
      this.init();
  
  });