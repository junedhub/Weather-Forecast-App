// Angular App initialization and configuration file

var weatherApp = angular.module('weatherApp',[
	'ui.router',
	'ngMaterial',
	'ngResource',
	'ui.bootstrap'
	]);

// Angular configuration goes here
weatherApp.config(['$urlRouterProvider','$mdThemingProvider', function($urlRouterProvider,$mdThemingProvider){
	$urlRouterProvider.otherwise('/');
	$mdThemingProvider.theme('default').primaryPalette('light-blue');
}]);