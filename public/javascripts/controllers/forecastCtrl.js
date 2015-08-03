angular.module('weatherApp')
.controller('forecastCtrl',['$scope','weatherAPI','$state', 'cityService',function($scope,weatherAPI,$state,cityService){
	$scope.weatherForecasts = [];
	$scope.cities = cityService;
	if($scope.cities != ''){
		for(var i = 0;  i < $scope.cities.length; i++){
			$scope.weatherForecasts.push(weatherAPI.get({q: $scope.cities[i], cnt: '14'}));
		}
	}else{
		$state.go('home');
	}
	$scope.convertToCelsius = function(degK){
		return Math.round(degK - 273.15);
	};	
}]);