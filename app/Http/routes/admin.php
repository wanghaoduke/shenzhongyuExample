<?php
/*
|--------------------------------------------------------------------------
| Application Routes Of Admin
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'backstage', 'namespace' => 'Admin'], function(){

    Route::group(['middleware' => 'auth.admin:2'], function(){

        Route::group(['prefix' => 'api'], function(){

            Route::resource('articles','ArticlesController');

        });

        Route::get('views/{name?}', function($name){
            return view($name);
        });

        Route::any('/{path?}', function(){
            return view('admin.layouts.main');
        })->where('path','.+');


    });

});