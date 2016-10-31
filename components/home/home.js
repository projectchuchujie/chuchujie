var app=angular.module('homeModule',[]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when('/home', {
		templateUrl: 'components/home/home.html',
		controller:'homeCtrl',
		css:'components/home/home.css'
	})
}]);

app.service("homeService",["$http",function($http){
	this.get=function(){
		return $http.get('json/homeman.json');
	}
}]);

app.controller("homeCtrl",["$scope","homeService",function($scope,homeService){
	homeService.get().success(function(res){
		$scope.homearr=res.data.groupList[2].dataList;
	})
}])
