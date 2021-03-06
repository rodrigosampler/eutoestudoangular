'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
    $http.get("http://localhost:8080/jogadores/listar").then(function(response){
        console.log(response.data);
        $scope.jogador = response.data[0];
    });
}]);