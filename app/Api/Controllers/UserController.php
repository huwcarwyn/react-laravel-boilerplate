<?php

namespace App\Api\Controllers;

use Illuminate\Contracts\Routing\ResponseFactory as Response,
    Illuminate\Validation\ValidationException,
    App\Services\SignUpService,
    App\Services\OauthService,
    Illuminate\Http\Request;

class UserController
{
  private $signUpService;
  private $oAuthService;
  private $response;

  public function __construct(SignUpService $signUpService, OauthService $oAuthService, Response $response)
  {
    $this->signUpService = $signUpService;
    $this->oAuthService = $oAuthService;
		$this->response = $response;
	}

  public function signUp(Request $request)
  {
    $data = $request->only(['first_name', 'last_name', 'email', 'password']);

    try {
      $this->signUpService->signUp($data);
      $oAuthCredentials = $this->oAuthService->passwordGrantAuth($data['email'], $data['password']);
      return $this->response->json($oAuthCredentials);
    }
		catch (ValidationException $e) {

		}
  }
}
