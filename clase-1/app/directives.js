angular.module("tienda")

	.directive("selectAllButton", function(){

		return {
			
			restrict : "E",
			
			templateUrl : "app/templates/selectAllButton.html",
			
			scope : {
				lista : "=",
				toggle : "&"
			}
		
		}

	})

	.directive("boxList", function(){

		return {
			
			restrict : "E",
			
			templateUrl : "app/templates/boxList.html",
			
			scope : {
				lista : "=",
				toggle : "=",
				filtro : "="
			}
		
		}

	})