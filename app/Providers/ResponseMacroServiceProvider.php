<?php

namespace App\Providers;

use Illuminate\Contracts\Routing\ResponseFactory,
    Illuminate\Support\ServiceProvider;

class ResponseMacroServiceProvider extends ServiceProvider
{
  public function boot(ResponseFactory $response)
  {
    $response->macro('success', function($data) use ($response) {
      return $response->json([
        'errors' => false,
        'data' => $data
      ], 200);
    });

    $response->macro('validateError', function($messages) use ($response) {
      return $response->json([
        'errors' => true,
        'messages' => $messages
      ], 422);
    });

    $response->macro('error', function($messages) use ($response) {
      return $response->json([
        'errors' => true,
        'messages' => $messages
      ], 400);
    });
  }
}
