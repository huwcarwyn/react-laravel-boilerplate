<?php

namespace App\Services\Session;

use Illuminate\Contracts\Routing\ResponseFactory as Response,
    Illuminate\Contracts\Validation\Factory as Validator,
    App\Contracts\Repository\UserRepositoryContract,
    Illuminate\Contracts\Auth\Factory as Auth,
    Laravel\Passport\ApiTokenCookieFactory;

class LoginService
{
  private $auth;
  private $validator;
  private $cookie;
  private $response;
  private $userRepo;

  public function __construct(
    Auth $auth,
    Validator $validator,
    ApiTokenCookieFactory $cookie,
    Response $response,
    UserRepositoryContract $userRepo)
  {
    $this->auth = $auth;
    $this->cookie = $cookie;
    $this->response = $response;
    $this->validator = $validator;
    $this->userRepo = $userRepo;
  }

  public function validateLoginInfo($data)
  {
    return $this->validator->make($data, [
      'email' => 'required|email',
      'password' => 'required'
    ]);
  }

  public function attemptLogin($loginInfo, $csrfToken)
  {
    $validateLoginInfo = $this->validateLoginInfo($loginInfo);

    if($validateLoginInfo->fails()) {
      return $this->response->validateError($validateLoginInfo->failed());
    }

    if($this->auth->attempt($loginInfo)) {
      $apiCookie = $this->cookie->make($this->auth->user()->getKey(), $csrfToken);

      return $this->response->success($this->userRepo->currentUser())->withCookie($apiCookie);
    }
    else {
      return $this->response->error('Incorrect login details');
    }
  }
}
