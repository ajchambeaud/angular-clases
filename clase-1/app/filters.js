angular.module("tienda")
	
	.filter("cut", function(){
		
		return function(text, max, separador){
			return text.substring(0, max) + separador;
		}
	
    })

    .filter("dolar", function(){
		
		return function(text){
			return "U$S " + text;
		}
	
    });