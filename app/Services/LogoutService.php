<?php

namespace App\Services;

use Illuminate\Contracts\Auth\Factory as Auth;

class LogoutService
{
  private $auth;

  public function __construct(Auth $auth)
  {
    $this->auth = $auth;
  }

  public function logout()
  {
    /**
     * Since the API determines whether or not the user is logged in via
     * the presence of the JWT, we log the user out by revoking this
     * token.
     */
    $this->auth->user()->token()->revoke();
  }
}
