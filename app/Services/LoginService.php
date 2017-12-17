<?php

namespace App\Services;

use Illuminate\Contracts\Routing\ResponseFactory as Response,
    Illuminate\Contracts\Validation\Factory as Validator,
    Illuminate\Contracts\Auth\Factory as Auth,
    Laravel\Passport\ApiTokenCookieFactory,
    App\Services\OauthService,
    Illuminate\Http\Request;

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
    $this->cookie = $cookie;
    $this->response = $response;
    $this->validator = $validator;
    $this->oAuthService = $oAuthService;
  }

  public function validateLoginInfo($data)
  {
    return $this->validator->make($data, [
      'email' => 'required|email',
      'password' => 'required'
    ]);
  }

  public function attemptLogin(Request $request)
  {
    $data = $request->only('email', 'password');
    $email = $data['email'];
    $password = $data['password'];

    $validateLoginInfo = $this->validateLoginInfo($data);

    if($validateLoginInfo->fails()) {
      return $this->response->json($validateLoginInfo->errors()->all(), 422);
    }

    if($this->auth->attempt($data)) {
      $apiCookie = $this->cookie->make($this->auth->user()->getKey(), $request->header('X-CSRF-TOKEN'));

      return $this->oAuthService->passwordGrantWithResponse($email, $password)->withCookie($apiCookie);
    }
    else {
      return $this->response->api_error('Invalid Login Details');
    }
  }
}
