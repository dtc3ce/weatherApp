angular.module('weather', [
  'weather.city',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('index');
  $stateProvider
    .state('index', {
    	url: "/index",
    	templateUrl: "index.html"
    })
    .state('city', {
    	url: "/city",
    	templateUrl: "app/city/city.html",
    	controller: 'CityController'
    })
})
