<div class="col-lg-14">
    <div class="panel panel-default">
        <div class="form-group">
             <input type="text" class="form-control" ng-model="article.title" placeholder="输入文章标题！！">
        </div>
        <div class="form-group">
            <div class="input-group">
                <text-angular ng-model="article.content" placeholder="Description"></text-angular>
            </div>
        </div>
        <div class="form-group">
            <div class="form_submit pull-right">
                <button  ng-click="update()" class="btn btn-submit">更新</button>
            </div>
         </div>
    </div>
</div>
