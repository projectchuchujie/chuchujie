var app=angular.module('mineModule',[]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when('/mine', {
		templateUrl: 'components/mine/mine.html',
		controller:'mineCtrl',
		css:'components/mine/mine.css'
	})
}]);

//app.service("mineService",["$http",function($http){
//	this.get=function(){
//		return $http.get('json/classifyman.json');
//	}
//}]);
app.controller("mineCtrl",["$scope",function($scope){
	var tel = document.querySelector('#tel');
	tel.onfocus=function(){
		$(this).attr('placeholder',"");
	}
	tel.onblur=function(){
		$(this).attr('placeholder',"手机号");
	}
	
	var password = document.querySelector('#password');
	password.onfocus=function(){
		$(this).attr('placeholder',"");
	}
	password.onblur=function(){
		$(this).attr('placeholder',"密码");
	}
	
	var logins = document.querySelector('#logins');
		logins.onclick=function(){
			$('#mine-wrap1').hide();
			$('#mine-wrap2').show();
		}
}])

