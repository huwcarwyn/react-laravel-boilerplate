<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/users/me', '\App\Api\Controllers\SessionController@currentUser');
    Route::get('/logout', '\App\Api\Controllers\SessionController@logout');

    Route::apiResource('/users', '\App\Api\Controllers\UserController');
    Route::put('/users/{userId}/update-password', '\App\Api\Controllers\UserController@changePassword');

    Route::get('/avatars', '\App\Api\Controllers\AvatarsController@get');
    Route::post('/avatars', '\App\Api\Controllers\AvatarsController@upload');
    Route::put('/avatars', '\App\Api\Controllers\AvatarsController@update');
    Route::delete('/avatars', '\App\Api\Controllers\AvatarsController@delete');
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
Route::group(['middleware' => ['encryptCookies']], function () {
    Route::post('/login', '\App\Api\Controllers\SessionController@login');
    Route::post('/signup', '\App\Api\Controllers\UserController@signup');
});
