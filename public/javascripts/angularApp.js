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
	//changing the angular material color scheme to light-bule
	$mdThemingProvider.theme('default').primaryPalette('light-blue');
}]);