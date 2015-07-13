angular.module('weather.city', [])

.controller('CityController', function ($scope){
	$scope.city = {};

	$scope.print = function (){
		console.log('controller is printing');
	}
});