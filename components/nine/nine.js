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
	this.getA=function(){
		return $http.get('json/ninewomen.json');
	}
	this.getB=function(){
		return $http.get('json/nineman.json');
	}
}]);

app.controller("nineCtrl",["$scope","nineService",function($scope,nineService){
	nineService.getA().success(function(res){
		$scope.ninearr=res.data.groupList[1];
	})
	$scope.click=function(sex){
		if(sex==1){
			$('#ninehead span').removeClass('hspan');
			$('#s2').addClass('hspan');
			nineService.getA().success(function(res){
				$scope.ninearr=res.data.groupList[1];
			})
		}else if(sex==0){
			$('#ninehead span').removeClass('hspan');
			$('#s1').addClass('hspan');
			nineService.getB().success(function(res){
				$scope.ninearr=res.data.groupList[1];
			})
		}
	}
	$scope.flag=true;
	$scope.nine=function(e){
		$scope.flag=false;
		console.log(e);
		$('#ninedetail img').attr('src',e.imgUrl);
		$("#ninedetail p").eq(0).html('￥<span>'+e.newPrice+'</span>');
		$("#ninedetail p").eq(1).text('￥'+e.oldPrice);
		$("#ninedetail p").eq(2).text(e.saleCount+'个人购买');
		$("#ninedetail p").eq(3).text(e.title);
	}
	
	$scope.pageClass='page-nine'
}])