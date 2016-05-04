<div class="list-group" ng-init="checked=false">
    <a ui-sref="Articles-show({id:article.id})" class="list-group-item"
       ng-repeat="article in articles | orderBy:article.created_at:true">
        <span class="badge">@{{article.created_at}}</span>
        @{{ article.title }}
    </a>
</div>