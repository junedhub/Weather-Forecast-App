angular.module('weatherApp')
	.config(['$stateProvider',function($stateProvider){
		$stateProvider.state('home',{
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'homeCtrl'
		});
	}]);