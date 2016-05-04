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

adminModule.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

}).config(function($stateProvider,$urlRouterProvider,$locationProvider){
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
});

