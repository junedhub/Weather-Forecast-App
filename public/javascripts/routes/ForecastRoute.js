angular.module('weatherApp')
	.config(['$stateProvider',function($stateProvider){
		$stateProvider.state('forecast',{
			url: '/forecast',
			templateUrl: '/templates/forecast.hjs',
			controller: 'forecastCtrl'
		});
	}]);