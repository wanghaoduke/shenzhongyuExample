var elixir = require('laravel-elixir');

require('laravel-elixir-ng-annotate');

elixir.config.sourcemaps = false;


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var cssPlugins = [
    '../bower_components/bootstrap/dist/css/bootstrap-paper.min.css',
    '../bower_components/animate.css/animate.min.css',
    '../bower_components/textAngular/dist/textAngular.css',
    '../bower_components/font-awesome/css/font-awesome.min.css'
];

var scriptPlugins = [
    '../bower_components/jquery/dist/jquery.min.js',
    '../bower_components/bootstrap/dist/js/bootstrap.min.js',
    '../bower_components/angular/angular.js',
    '../bower_components/angular-ui-router/release/angular-ui-router.min.js',
    '../bower_components/angular-resource/angular-resource.min.js',
    '../bower_components/textAngular/dist/textAngular-rangy.min.js',
    '../bower_components/textAngular/dist/textAngular-sanitize.min.js',
    '../bower_components/textAngular/dist/textAngular.min.js',
    '../bower_components/textAngular/dist/textAngular.min.js',
];

var adminScripts = [
    'admin/**/*.js'
];

elixir(function(mix) {
    mix.styles(cssPlugins,'public/admin/css/dev.css');
    mix.scripts(scriptPlugins,'public/admin/js/dev.js');
    mix.annotate(adminScripts,'public/admin/js/annotate.js');
    mix.scripts('../../../public/admin/js/annotate.js','public/admin/js/admin.min.js');
});
