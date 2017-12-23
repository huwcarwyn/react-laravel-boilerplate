<?php

namespace App\Services;

use Illuminate\Contracts\Auth\Factory as Auth,
    Illuminate\Contracts\Cookie\Factory as Cookie,
    Illuminate\Contracts\Routing\ResponseFactory as Response;

class LogoutService
{
  private $auth;
  private $cookie;
  private $response;

  public function __construct(Auth $auth, Cookie $cookie, Response $response)
  {
    $this->auth = $auth;
    $this->cookie = $cookie;
    $this->response = $response;
  }

  public function logout()
  {    
    return $this->response->api_success('Successfully logged out')
                          ->withCookie($this->cookie->forget('laravel_token'));
  }
}
