'use strict'

var adminModule = angular.module('adminApp',[
    'admin.controllers',
    'ui.router',
    'admin.resources',
    'admin.filters',
    'textAngular'
]);
var adminController = angular.module('admin.controllers',[]);

var adminResource = angular.module('admin.resources',['ngResource']);

var adminFilters = angular.module('admin.filters',[]);

adminModule.run(["$rootScope", "$state", "$stateParams", function($rootScope,$state,$stateParams){
    console.log($state);
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

}]).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('Dashboard',{
        url:'/dashboard',
        description:'TheisThe Description',
        templateUrl:'/backstage/views/admin.dashboard.index',
        controller:'DashboardController'
    }).state('Articles',{
        url:'/articles',
        templateUrl:'/backstage/views/admin.articles.index',
        controller:'ArticlesController'
    }).state('Articles-show',{
        url:'/articles/:id',
        templateUrl:'/backstage/views/admin.articles.show',
        controller:'ArticlesController'
    }).state('Articles-edit',{
        url:'/articles/:id',
        templateUrl:'/backstage/views/admin.articles.edit',
        controller:'ArticlesController'
    });

    $locationProvider.html5Mode(true);
}]);


adminFilters.filter('parse_html',["$sce", function($sce){
    return function(text){
        return $sce.trustAsHtml(text);
    }
}]);
adminController.controller('ArticlesController', ["$rootScope", "$scope", "$stateParams", "$window", "$location", "Article", function($rootScope,$scope,$stateParams,$window,$location,Article){

    $rootScope.webAdmin = {
        title : 'Admin-Articles',
        mainUrl:$location.url().split('/')[1]
    };

    $scope.articles = [];
    $scope.article = {};

    if(!$stateParams.id){
        $scope.articles = Article.query();
    }else{
        $scope.article = Article.get({id:$stateParams.id},function(res){});
    }

    $scope.update = function(){
        Article.update({id:$scope.article.id},$scope.article,function(res){
            console.log(res);
            $window.location.href = '/backstage/articles/' + $scope.article.id;
        },function(){
            console.log(res);
        });
    }


}]);
adminResource.factory('Article',["$resource", function($resource){
    return $resource('/backstage/api/articles/:id',{id:'@_id'},{
        update:{method:'PUT',isArray:true}
    });
}]);
adminController.controller('DashboardController', ["$rootScope", function($rootScope){
    $rootScope.webTitle = 'This nwe Dashboiartdsfadkseni';
}]);