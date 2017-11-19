<?php

namespace App\Api\Controllers;

use Illuminate\Validation\ValidationException,
    App\Services\SignUpService,
    Illuminate\Http\Request;

class UserController
{
  private $signUpService;

  public function __construct(SignUpService $signUpService)
  {
    $this->signUpService = $signUpService;
	}

  public function signUp(Request $request)
  {
    try {
      return $this->signUpService->apiSignUp($request);
    }

		catch (ValidationException $e) {

		}

  }
}
