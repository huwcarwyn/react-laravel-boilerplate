<?php

namespace App\Services;

use Illuminate\Contracts\Routing\ResponseFactory as Response,
    Illuminate\Contracts\Auth\Factory as Auth,
    Illuminate\Contracts\Validation\Factory as Validator,
    Laravel\Passport\ApiTokenCookieFactory,
    App\Services\OauthService;

class LoginService
{
  private $auth;
  private $validator;
  private $cookie;
  private $oAuthService;
  private $response;

  public function __construct(
    Auth $auth,
    Validator $validator,
    OauthService $oAuthService,
    ApiTokenCookieFactory $cookie,
    Response $response)
  {
    $this->auth = $auth;
    $this->validator = $validator;
    $this->oAuthService = $oAuthService;
    $this->response = $response;
  }

  public function validateLoginInfo($data) {
    $this->validator->make([
      'email' => 'required|email',
      'password' => 'required'
    ]);
  }

  public function login($username, $password)
  {
    $validateLoginInfo = $this->validateLoginInfo([
      'email' => $email,
      'password' => $password
    ]);

    if($validateLoginInfo->fails()) {
      return $this->response->json(
        $status = 422,
        $data = $validateLoginInfo->errors()->all()
      );
    }

    if($this->auth->attempt(['email' => $email, 'password' => $password])) {
      $credentials = $this->oAuthService->passwordGrantAuth($email, $password);

      $apiCookie = $this->cookie->make($this->auth->user()->getKey(), $request->header('X-CSRF-TOKEN'));

      return $this->response->json($credentials)->withCookie($apiCookie);
    }

    else {
      return $this->response->api_error('Invalid Login Details');
    }
  }
}
