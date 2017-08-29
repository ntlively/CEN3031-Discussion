var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', function($scope) {
    console.log("Hello World from controller");
    
var tempContact = null;

$scope.contactlist = [
  {
    name: "Bryan",
    email: "something@ufl.edu",
    number: "123-456-7890"
  },
  {
    name: "Chris",
    email: "chrissomething@ufl.edu",
    number: "321-456-7890"
  },
  {
    name: "TOM",
    email: "tomsomething@ufl.edu",
    number: "321-456-7890"
  }
];

$scope.addContact = function() {
};

$scope.remove = function(id) {
};

$scope.edit = function(id) {
};  

$scope.update = function() {
};

$scope.deselect = function() {
}

}]);