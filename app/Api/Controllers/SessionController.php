<?php

namespace App\Api\Controllers;

use Illuminate\Contracts\Auth\Factory as Auth,
    App\Services\Session\LoginService,
    App\Services\Session\LogoutService,
    Illuminate\Http\Request;

class SessionController {

  private $loginService;
  private $logoutService;
  private $auth;

  public function __construct(
    LoginService $loginService,
    LogoutService $logoutService,
    Auth $auth) {
    $this->loginService = $loginService;
    $this->logoutService = $logoutService;
    $this->auth = $auth;
  }

  public function currentUser()
  {
    return $this->auth->user()->toJson();
  }

  public function login(Request $request)
  {
    $loginInfo = $request->only(['email', 'password']);
    $csrfToken = $request->header('X-CSRF-TOKEN');

    return $this->loginService->attemptLogin($loginInfo, $csrfToken);
  }

  public function logOut()
  {
    return $this->logoutService->logOut();
  }
}
