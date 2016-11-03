var app=angular.module('searchModule',[]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when('/search', {
		templateUrl: 'components/search/search.html',
		controller:'searchCtrl',
		css:'components/search/search.css'
	})
}]);

//app.service("searchService",["$http",function($http){
//	this.get=function(){
//		return $http.get('json/homeman.json');
//	}
//}]);
//
app.controller("searchCtrl",["$scope",function($scope){
		$scope.tiaozhuan=function(){
			window.location.href="http://127.0.0.1:8020/chuchujie/index.html#/home";
		}
}])
