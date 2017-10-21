<?php

Route::any('{all}', function () {
    return view('app');
})
->where(['all' => '.*']);
