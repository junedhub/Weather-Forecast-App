angular.module('weatherApp')
	.factory('cityService',function() {
		var cities = ['Pune'];
		return cities;
	});