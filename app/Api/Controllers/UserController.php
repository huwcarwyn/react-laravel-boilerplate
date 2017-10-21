<?php

namespace App\Api\Controllers;

use App\Services\SignUpService,
		Illuminate\Http\Request;

class UserController
{
  private $signupService;

  public function __construct(SignUpService $signupService)
  {
    $this->signupService = $signupService;
  }

  public function signUp(Request $request)
  {
    $data = $request->only(['first_name', 'last_name', 'email', 'password']);

    try {
      $this->signUpService->signUp($data);
    }

    return $this->response->api_success('User successfully signed up.');
  }
}
