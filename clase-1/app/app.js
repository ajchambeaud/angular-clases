var app = angular.module("app", []);

app.controller("MainController", function($scope){

  /*
  *   $scope.main = {}:
  *   this = $scope.main
  */
  
  this.mainTitle = "Clase 1";
	
  this.popup = function(msg){
  	alert(msg);
  };

});

app.controller("ParentController", function($scope){

  this.name = "Parent Panel";
  this.title = "Parent Value";
  
});

app.controller("ChildController", function($scope){

  this.name = "Child Panel";
  this.title = "Child Value";

});

app.directive("myButton", function(){

	return {
		
		transclude : false,
	
		restrict : "AE",
		
		templateUrl : "app/templates/myButton.html",
		
		scope : {
			text : "=",
			action : "&"
		},
		
		link : function(scope, element, attrs){
			console.log(scope);
			console.log(attrs);
			
			element.on("mouseover", function(){
				element.find('button').addClass("my-button-hover");
			});
			
			element.on("mouseout", function(){
				element.find('button').removeClass("my-button-hover");
			});
		}
	
	}
	
});


















