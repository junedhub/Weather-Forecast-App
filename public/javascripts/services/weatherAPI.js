angular.module('weatherApp')
	.factory('weatherAPI',['$resource',function($resource){
		return $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
		{callback: "JSON_CALLBACK"},{get:{method: "JSONP"}});
	}]);