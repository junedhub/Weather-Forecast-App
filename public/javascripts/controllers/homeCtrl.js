angular.module('weatherApp')
.controller('homeCtrl',['$scope','weatherAPI','cityService',function($scope,weatherAPI,cityService){
	$scope.cities = cityService;
	$scope.$watch('cities',function(){
		cityService.cities = $scope.cities;
	})
}]);