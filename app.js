var app=angular.module('ccj',['ngRoute','angularCSS','homeModule','mineModule','nineModule','classifyModule','searchModule','carModule'])
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.otherwise({
		redirectTo: '/home'
	});
}]);
