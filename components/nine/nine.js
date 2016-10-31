var app=angular.module('nineModule',[]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when('/nine', {
		templateUrl: 'components/nine/nine.html',
		controller:'nineCtrl',
		css:'components/nine/nine.css'
	})
}]);

app.service("nineService",["$http",function($http){
	this.get=function(){
		return $http.get('json/nineman.json');
	}
}]);

app.controller("nineCtrl",["$scope","nineService",function($scope,nineService){
	nineService.get().success(function(res){
		$scope.ninearr=res.data;
	})
}])