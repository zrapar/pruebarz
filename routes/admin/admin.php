<?php 
 Route::get('/','AdminController@index');
 Route::get('/data','AdminController@getDataTable');
 Route::get('/badcontrol','AdminController@badwords');
 Route::get('/bad','AdminController@getDataTableBad');
 Route::post('/badup','AdminController@addWord');

 
