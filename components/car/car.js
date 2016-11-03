var app=angular.module('carModule',[]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when('/car', {
		templateUrl: 'components/car/car.html',
		controller:'carCtrl',
		css:'components/car/car.css'
	})
}]);

app.service("carService",["$http",function($http){
	this.get=function(){
		return $http.get('json/testeone.json');
	}
}]);

app.controller("carCtrl",["$scope","carService",function($scope,carService){
	carService.get().success(function(res){
		$scope.cararr=res.data.productList;
	})
	
	$scope.count=1;
	$scope.ifh=function(){
		$scope.count=$("#num").text();
		$scope.count=$scope.count-1;
		console.log($scope.count)
		if($scope.count<=0){
			$scope.count=1;
		}
		$("#num").text($scope.count);
	}
	$scope.add=function(){
		$scope.count=$("#num").text();
		$scope.count=$scope.count*1+1;
		$("#num").text($scope.count);
	}
}])
