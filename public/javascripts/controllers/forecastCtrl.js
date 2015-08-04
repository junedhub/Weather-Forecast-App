angular.module('weatherApp')
.controller('forecastCtrl',['$scope','weatherAPI', 'cityService',function($scope,weatherAPI,cityService){
	$scope.weatherForecasts = [];
		for(var i = 0;  i < cityService.cities.length; i++){
			$scope.weatherForecasts.push(weatherAPI.get({q: cityService.cities[i], cnt: '14'}));
		}	
	$scope.convertToCelsius = function(degK){
		return Math.round(degK - 273.15);
	};	
}]);