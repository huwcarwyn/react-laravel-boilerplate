<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider,
    App\Services\SignUpService,
    App\Services\OauthService;

class ServiceLayerServiceProvider extends ServiceProvider
{
  public function register() {
    /**
     * Resolve Services as application singletons
     */
    $this->app->singleton(
      'App\Services\SignUpService', function($app) {
        return new SignUpService(
          $app->make('Illuminate\Contracts\Auth\Factory'),
          $app->make('Illuminate\Contracts\Validation\Factory'),
          $app->make('App\Contracts\Repository\UserRepositoryContract'),
          $app->make('Illuminate\Contracts\Routing\ResponseFactory'),
          $app->make('Laravel\Passport\ApiTokenCookieFactory')
        );
      }
    );

    $this->app->singleton(
      'App\Services\OauthService', function($app) {
        return new OauthService(
          $app->make('Illuminate\Contracts\Routing\ResponseFactory')
        );
      }
    );
  }
}
