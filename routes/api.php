<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['auth:api']], function() {
	Route::get('/users/me', '\App\Api\Controllers\SessionController@currentUser');
	Route::get('/logout', '\App\Api\Controllers\SessionController@logout');
});

Route::post('/forgot-password', '\App\Api\Controllers\UserController@forgotPassword');

/**
 * These routes return JWT's, so make sure to wrap them in the encrypt cookies
 * middleware.
 */
Route::group(['middleware' => ['encryptCookies']], function() {
	Route::post('/login', '\App\Api\Controllers\SessionController@login');
	Route::post('/signup', '\App\Api\Controllers\UserController@signup');
});
