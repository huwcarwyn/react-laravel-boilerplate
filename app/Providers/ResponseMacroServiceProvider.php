<?php

namespace App\Providers;

use Illuminate\Contracts\Routing\ResponseFactory,
    Illuminate\Support\ServiceProvider;

class ResponseMacroServiceProvider extends ServiceProvider
{
  public function boot(ResponseFactory $response)
  {
    $response->macro('success', function($data) use ($response) {
      $responseData = array_merge($data, ['errors' => false]);

      return $response->json($responseData, 200);
    });

    $response->macro('validateError', function($messages) use ($response) {
      return $response->json([
        'errors' => true,
        'messages' => $messages
      ], 422);
    });

    $response->macro('unauthorized', function($message) use ($response) {
      return $response->json([
        'errors' => true,
        'message' => $message
      ], 401);
    });


    $response->macro('error', function($message) use ($response) {
      return $response->json([
        'errors' => true,
        'message' => $message
      ], 400);
    });
  }
}
