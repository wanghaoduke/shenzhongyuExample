<h4>@{{ article.title }}</h4>
<a ui-sref="Articles-edit({id:article.id})" class="btn btn-default" role="button">编辑</a>
<hr>
<div ng-bind-html="article.content|parse_html"></div>

<blockquote class="blockquote-reverse">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer>@{{ article.created_at }} Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>