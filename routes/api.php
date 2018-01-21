<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['auth:api']], function() {
	Route::get('/users/me', '\App\Api\Controllers\SessionController@currentUser');
	Route::get('/logout', '\App\Api\Controllers\SessionController@logout');
});

/**
 * Password reset endpoints
 */
Route::post('/forgot-password', '\App\Api\Controllers\PasswordResetController@forgotPassword');
Route::post('/reset-password', '\App\Api\Controllers\PasswordResetController@resetPassword');

/**
 * These endpoints return JWT's, so make sure to wrap them in the encrypt cookies
 * middleware.
 */
Route::group(['middleware' => ['encryptCookies']], function() {
	Route::post('/login', '\App\Api\Controllers\SessionController@login');
	Route::post('/signup', '\App\Api\Controllers\UserController@signup');
});
