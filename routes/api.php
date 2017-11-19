<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['auth:api']], function() {
	Route::get('/users/me', '\App\Api\Controllers\SessionController@currentUser');
});

Route::post('/login', '\App\Api\Controllers\UserController@login');
Route::post('/signup', '\App\Api\Controllers\UserController@signup')->middleware('encryptCookies');
