'use strict';

angular.module('myApp.view1', ['ngRoute','ngResource','myApp'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','Contact',function($scope, Contact) {
    $scope.contacts = Contact.query(function(){
        console.log('all categories - ', $scope.contacts.length);
    });
    $scope.fields = ['firstName', 'lastName'];
    $scope.sort = function(field){
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    };

    /* default values */
    $scope.sort.field = 'firstName';
    $scope.sort.order = false;
}]);