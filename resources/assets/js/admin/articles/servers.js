adminResource.factory('Article',function($resource){
    return $resource('/backstage/api/articles/:id',{id:'@_id'},{
        update:{method:'PUT',isArray:true}
    });
});