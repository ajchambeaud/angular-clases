var app = angular.module("app", []);

app.controller("MainController", function($scope){

  /*
  *   $scope.main = {}:
  *   this = $scope.main
  */
  
  this.mainTitle = "Clase 1";

});

app.controller("ParentController", function($scope){

  this.name = "Parent Panel";
  this.title = "Parent Value";
  
});

app.controller("ChildController", function($scope){

  this.name = "Child Panel";
  this.title = "Child Value";

});
