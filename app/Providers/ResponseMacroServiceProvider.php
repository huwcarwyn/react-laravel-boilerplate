<?php

namespace App\Providers;

use Illuminate\Contracts\Routing\ResponseFactory,
    Illuminate\Support\ServiceProvider;

class ResponseMacroServiceProvider extends ServiceProvider
{
  public function boot(ResponseFactory $response)
  {
    $response->macro('apiSuccess', function($value) use ($response) {
      return $response->json([
        'success' => $value
      ], 200);
    });

    $response->macro('apiValidateError', function($value) use ($response) {
      return $response->json($value, 422);
    });

    $response->macro('apiError', function($value) use ($response) {
      return $response->json([
        'error' => $value
      ], 400);
    });
  }
}
