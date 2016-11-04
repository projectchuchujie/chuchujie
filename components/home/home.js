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
	this.getA=function(){
		return $http.get('json/homewomen.json');
	}
	this.getB=function(){
		return $http.get('json/homeman.json');
	}
}]);

app.controller("homeCtrl",["$scope","homeService",function($scope,homeService){
	homeService.getA().success(function(res){
		$scope.homearr=res.data.groupList[2];
	})
	$scope.click=function(sex){
		if(sex==1){
			$('#homehead span').removeClass('hspan');
			$('#s2').addClass('hspan');
			homeService.getA().success(function(res){
				$scope.homearr=res.data.groupList[2];
			})
		}else if(sex==0){
			$('#homehead span').removeClass('hspan');
			$('#s1').addClass('hspan');
			homeService.getB().success(function(res){
				$scope.homearr=res.data.groupList[2];
			})
		}
	}
	$scope.detail=function(path){
		location.href=path;
	}
	$scope.pageClass='page-home';
	
}])
