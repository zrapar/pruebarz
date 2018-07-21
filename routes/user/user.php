<?php
Route::get('/','UserController@index');

Route::post('/send_quota','UserController@question');