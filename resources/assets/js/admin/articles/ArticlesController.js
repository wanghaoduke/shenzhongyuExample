adminController.controller('ArticlesController', function($rootScope,$scope,$stateParams,$window,$location,Article){

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


});