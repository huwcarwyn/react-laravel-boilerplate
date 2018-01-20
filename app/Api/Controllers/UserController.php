<?php

namespace App\Api\Controllers;

use Illuminate\Validation\ValidationException,
    App\Services\ForgotPasswordService,
    App\Services\SignUpService,
    Illuminate\Http\Request;

class UserController
{
  private $signUpService;
  private $forgotPasswordService;

  public function __construct(SignUpService $signUpService, ForgotPasswordService $forgotPasswordService)
  {
    $this->signUpService = $signUpService;
    $this->forgotPasswordService = $forgotPasswordService;
	}

  public function signUp(Request $request)
  {
      $userInfo = $request->only(['first_name', 'last_name', 'email', 'password']);
      $csrfToken = $request->header('X-CSRF-TOKEN');

      return $this->signUpService->signUp($userInfo, $csrfToken);
  }

  public function forgotPassword(Request $request)
  {
    $data = $request->only('email');

    return $this->forgotPasswordService->passwordRequest($data['email']);
  }
}
