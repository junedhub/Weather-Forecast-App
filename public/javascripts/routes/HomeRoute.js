angular.module('weatherApp')
	.config(['$stateProvider',function($stateProvider){
		$stateProvider.state('home',{
			url: '/',
			templateUrl: '/templates/home.hjs',
			controller: 'homeCtrl'
		});
	}]);