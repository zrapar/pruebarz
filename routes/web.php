<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['namespace' => 'User','as' => 'user'], function() {

     require __DIR__ . '/user/user.php';

    

});

Route::group(['namespace' => 'Admin','prefix'=>'admin','as' => 'admin'], function() {

  require __DIR__ . '/admin/admin.php';

});



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
