var app=angular.module('ccj',['ngRoute','angularCSS','homeModule','mineModule','nineModule','classifyModule'])
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.otherwise({
		redirectTo: '/home'
	});
}]);