'use strict';

angular.module('myApp.view1', ['ngRoute','ngResource','myApp'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/offices', {
        templateUrl: 'offices/list.html',
        controller: 'ListCtrl'
    })
      .when('/offices/:id',{
        templateUrl: 'offices/single.html',
        controller: 'SingleCtrl'
    });
}])

.controller('ListCtrl', ['$scope','Office','$location',function($scope, Office, $location) {

    $scope.offices = Office.query(function(){
        console.log('all categories - ', $scope.offices.length);
    });
    $scope.sort = function(){
        $scope.sort.order = !$scope.sort.order;
    };

    /* default values */
    $scope.sort.order = false;
    $scope.sort.field = 'DisPlz';
    $scope.show = function (id) {
        $location.url('/offices/' + id);
    };
}])
.controller('SingleCtrl', ['$scope','Office','$routeParams',function ($scope, Office, $routeParams) {
    $scope.office = Office.get({ id: $routeParams.id });

}]);