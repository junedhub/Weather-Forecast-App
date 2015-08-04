angular.module('weatherApp')
.controller('forecastCtrl',['$scope','weatherAPI','$state', 'cityService',function($scope,weatherAPI,$state,cityService){
	$scope.weatherForecasts = [];
	$scope.cities = cityService;
	for(var i = 0;  i < $scope.cities.length; i++)
		$scope.weatherForecasts.push(weatherAPI.get({q: $scope.cities[i], cnt: '14'}));
	$scope.convertToCelsius = function(degK){
		return Math.round(degK - 273.15);
	};	
}]);