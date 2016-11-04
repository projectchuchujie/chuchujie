var app=angular.module('goodsModule',[]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when('/goods', {
		templateUrl: 'components/goods/goods.html',
		controller:'goodsCtrl',
		css:'components/goods/goods.css'
	})
}]);


//app.factory('myService', function() {
//	 var savedData = {}
//	 function set(data) {
//	   savedData = data;
//	 }
//	 function get() {
//	  return savedData;
//	 }
//	
//	 return {
//	  set: set,
//	  get: get
//	 }
//
//})

app.controller("goodsCtrl",["$scope","myService",function($scope,myService){
	$scope.detail = myService.get();
	console.log(myService.get());
}])



