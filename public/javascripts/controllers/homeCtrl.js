angular.module('weatherApp')
.controller('homeCtrl',['$scope','weatherAPI','cityService','notify','$state',function($scope,weatherAPI,cityService,notify,$state){
	$scope.cities = cityService;
	$scope.$watch('cities',function(){
		cityService.cities = $scope.cities;
	})
	$scope.getForecast = function(){
		if(cityService.cities != ''){
			$state.go('forecast');
		}else{
			notify({
            	message: 'Error! Field cant be blank',
            	classes: 'alert-danger',
            	position: 'center',
            	duration: 3000
        	});
        }
	};
}]);