<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ServiceLayerServiceProvider extends ServiceProvider
{
  public function register() {
    /**
     * Resolve Services as application singletons
     */
    $this->app->singleton(
      'App\Services\SignUpService', function($app) {
        return new \App\Services\SignUpService(
          $app->make('Illuminate\Contracts\Validation\Factory'),
          $app->make('App\Contracts\Repository\UserRepositoryContract'),
          $app->make('App\Services\OauthService')
        );
      }
    );

    $this->app->singleton(
      'App\Services\OauthService', function($app) {
        return new \App\Services\OauthService(
          $app->make('Illuminate\Contracts\Cookie\Factory'),
          $app->make('Illuminate\Contracts\Encryption\Encrypter'),
          $app->make('Illuminate\Contracts\Routing\ResponseFactory')
        );
      }
    );
  }
}
