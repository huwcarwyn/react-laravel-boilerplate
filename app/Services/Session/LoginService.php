<?php

namespace App\Services\Session;

use App\Contracts\Repository\UserRepositoryContract as UserRepository,
    Illuminate\Contracts\Routing\ResponseFactory as Response,
    Illuminate\Contracts\Validation\Factory as Validator,
    Illuminate\Contracts\Auth\Factory as Auth,
    Laravel\Passport\ApiTokenCookieFactory;

class LoginService
{
  private $auth;
  private $validator;
  private $cookie;
  private $response;
  private $repository;

  public function __construct(
    Auth $auth,
    Validator $validator,
    UserRepository $repository,
    ApiTokenCookieFactory $cookie,
    Response $response)
  {
    $this->auth = $auth;
    $this->cookie = $cookie;
    $this->response = $response;
    $this->validator = $validator;
    $this->repository = $repository;
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

      return $this->response->success($this->repository->currentUser())->withCookie($apiCookie);
    }
    else {
      return $this->response->error('Incorrect login details');
    }
  }
}
