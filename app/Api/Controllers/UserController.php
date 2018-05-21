<?php

namespace App\Api\Controllers;

use Illuminate\Validation\ValidationException,
    App\Services\User\SignUpService,
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
      $userInfo = $request->only(['first_name', 'last_name', 'email', 'password']);
      $csrfToken = $request->header('X-CSRF-TOKEN');

      return $this->signUpService->signUp($userInfo, $csrfToken);
  }

  public function update(Request $request)
  {
    $userData = $request->only([
      'first_name',
      'last_name',
      'email',
      'old_password',
      'new_password',
      'new_password_repeat'
    ]);

    $this->createUserService->create($userData);
  }
}
