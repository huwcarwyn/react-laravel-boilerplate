<?php

namespace App\Providers;

use Illuminate\Contracts\Routing\ResponseFactory,
    Illuminate\Support\ServiceProvider;

class ResponseMacroServiceProvider extends ServiceProvider
{
  public function boot(ResponseFactory $response)
  {
    $response->macro('api_success', function($value) use ($response) {
      return $response->json([
        'success' => $value
      ]);
    });

    $response->macro('api_error', function($value) use ($response) {
      return $response->json($status=400, $data = [
        'error' => $value
      ]);
    });
  }
}
