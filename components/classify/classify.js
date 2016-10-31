var app=angular.module('classifyModule',[]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when('/classify', {
		templateUrl: 'components/classify/classify.html',
		controller:'classifyCtrl',
		css:'components/classify/classify.css'
	})
}]);

app.service("classifyService",["$http",function($http){
	this.get=function(){
		return $http.get('json/classifyman.json');
	}
}]);

app.controller("classifyCtrl",["$scope","classifyService",function($scope,classifyService){
	classifyService.get().success(function(res){
		$scope.classifyarr=res.data;
	})
}])