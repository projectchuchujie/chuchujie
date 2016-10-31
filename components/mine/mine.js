var app=angular.module('mineModule',[]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when('/mine', {
		templateUrl: 'components/mine/mine.html',
//		controller:'mineCtrl',
		css:'components/mine/mine.css'
	})
}]);

//app.service("mineService",["$http",function($http){
//	this.get=function(){
//		return $http.get('json/classifyman.json');
//	}
//}]);
//
//app.controller("mineCtrl",["$scope","mineService",function($scope,mineService){
//	mineService.get().success(function(res){
//		$scope.minearr=res.data;
//	})
//}])