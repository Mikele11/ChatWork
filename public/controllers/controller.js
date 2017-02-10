var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("I am in controller");


var refresh = function() {
  $http.get('/bookday').success(function(response) {
    console.log("Geter");
    $scope.bookday = response;
    $scope.contact = "";
  });
};

refresh();

$scope.addContact = function() {
  console.log($scope.contact);
  //---------------
    d0 = new Date($scope.contact.dataB);
	d1 = new Date();
	dt = (d1.getTime() - d0.getTime()) / (1000*60*60*24);
	dtRound = Math.round(dt);
	$scope.contact.change=dtRound;
	//--
  $http.post('/bookday', $scope.contact).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/bookday/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/bookday/' + id).success(function(response) {
    $scope.contact = response;
  });
};  

$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/bookday/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.contact = "";
}

}]);﻿