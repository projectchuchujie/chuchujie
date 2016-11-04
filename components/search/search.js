var app=angular.module('searchModule',[]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when('/search', {
		templateUrl: 'components/search/search.html',
		controller:'searchCtrl',
		css:'components/search/search.css'
	})
}]);

app.service("searchService",["$http",function($http){
	this.get=function(){
		return $http.get('json/classifywomen.json');
	}
}]);


app.factory('myService', function() {
	 var savedData = {}
	 function set(data) {
	   savedData = data;
	 }
	 function get() {
	  return savedData;
	 }
	
	 return {
	  set: set,
	  get: get
	 }

})

app.controller("searchCtrl",["$scope","searchService",'myService',function($scope,searchService,myService){
	searchService.get().success(function(res){
		$scope.searcharr=res.data;
	})
	$scope.tiaozhuan=function(){
		window.location.href="http://127.0.0.1:8020/chuchujie/index.html#/home";
	}
	$scope.flag=true;
	$scope.search=function(){
		$scope.flag=false;
		$scope.select=$('#search-ip').val();
	}
	$scope.clickItem=function(obj){
		myService.set(obj);
	}
}])


 
