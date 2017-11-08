<?php

$spa = function() {
  return view('app');
};

Route::fallback($spa);
