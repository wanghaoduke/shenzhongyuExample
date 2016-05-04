<!doctype html>
<html lang="en" data-ng-app="adminApp" data-page="@{{ webAdmin.mainUrl }}">
<head>
    <meta charset="UTF-8">
    <base href="/backstage/">
    <link rel="stylesheet" href="/admin/css/dev.css">
    <title ng-bind="$state.current.name"></title>
</head>
<body>
<div class="container" ng-init="navCheck = true">
    <div class="row-md-12">
        <nav class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
                <a class="navbar-brand" ui-sref="Dashboard">LaravelAngular</a>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <li ng-class="{active:$state.current.name.split('-')[0]=='Dashboard'}"><a ui-sref="Dashboard">Dashboard</a></li>
                    <li ng-class="{active:$state.current.name.split('-')[0]=='Articles'}"><a ui-sref="Articles">Articles</a></li>
                    <li ng-class="{active:$state.current.name=='java'}" class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            Java
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">jmeter</a></li>
                            <li><a href="#">EJB</a></li>
                            <li><a href="#">Jasper Report</a></li>
                            <li class="divider"></li>
                            <li><a href="#">分离的链接</a></li>
                            <li class="divider"></li>
                            <li><a href="#">另一个分离的链接</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <div ui-view></div>
</div>
<script type="text/javascript" src="/admin/js/dev.js"></script>
<script type="text/javascript" src="/admin/js/admin.min.js"></script>
</body>
</html>