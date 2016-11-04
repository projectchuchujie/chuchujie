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
	this.getA=function(){
		return $http.get('json/classifywomen.json');
	}
	this.getB=function(){
		return $http.get('json/classifyman.json');
	}
}]);

app.controller("classifyCtrl",["$scope","classifyService",function($scope,classifyService){
	classifyService.getA().success(function(res){
		$scope.classifyarr=res.data;
	})
	$scope.click=function(sex){
		if(sex==1){
			$('#classifyhead span').removeClass('hspan');
			$('#s2').addClass('hspan');
			classifyService.getA().success(function(res){
				$scope.classifyarr=res.data;
			})
		}else if(sex==0){
			$('#classifyhead span').removeClass('hspan');
			$('#s1').addClass('hspan');
			classifyService.getB().success(function(res){
				$scope.classifyarr=res.data;
			})
		}
	}
	$scope.sort='collection';
	$scope.desc=true;
	$scope.sel=function(type){
			$scope.sort=type;
			$scope.desc=!$scope.desc;
//			console.log(select);
		if(type=='collection'){
			$('#classifylist ul li span').removeClass('a1');
			$('#classifylist ul #l1 span').addClass('a1');
		}else if(type=='saleCount'){
			$('#classifylist ul li span').removeClass('a1');
			$('#classifylist ul #l2 span').addClass('a1');
		}else if(type=='sort'){
			$('#classifylist ul li span').removeClass('a1');
			$('#classifylist ul #l3 span').addClass('a1');
		}else if(type=='newPrice'){
			$('#classifylist ul li span').removeClass('a1');
			$('#classifylist ul #l4 span').addClass('a1');
		}
	}
	$.fn.smartFloat = function() { 
	    var position = function(element) { 
	        var top = 620; //当前元素对象element距离浏览器上边缘的距离 
	        var pos = element.css("position"); //当前元素距离页面document顶部的距离 
	        $(window).scroll(function() { //侦听滚动时 
	            var scrolls = $(this).scrollTop(); 
	            if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度 
	                if (window.XMLHttpRequest) { //如果不是ie6 
	                    element.css({ //设置css 
	                        position: "fixed", //固定定位,即不再跟随滚动 
	                        top: 0 //距离页面顶部为0 
	                    }).addClass("shadow"); //加上阴影样式.shadow 
	                } else { //如果是ie6 
	                    element.css({ 
	                        top: scrolls  //与页面顶部距离 
	                    });     
	                } 
	            }else { 
	                element.css({ //如果当前元素element未滚动到浏览器上边缘，则使用默认样式 
	                    position: pos, 
	                    top: top 
	                }).removeClass("shadow");//移除阴影样式.shadow 
	            } 
	        }); 
	    }; 
	    return $(this).each(function() { 
	        position($(this));                          
	    }); 
	}; 
	
	$("#classifylist").smartFloat();  
	$("#classifylist ul li").css({
		width: "25%",
		height: "1.6rem",
     	background:'white',
		textAlign: "center",
		float: "left"
	})
	
}])