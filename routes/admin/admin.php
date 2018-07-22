<?php 
 Route::get('/index','AdminController@index');
 Route::get('/data','AdminController@getDataTable');
 Route::get('/badcontrol','AdminController@badwords');
 Route::get('/bad','AdminController@getDataTableBad');
 Route::post('/badup','AdminController@addWord');
 Route::post('/editbad','AdminController@editword');
 Route::post('/deletebad','AdminController@deleteword');

 
