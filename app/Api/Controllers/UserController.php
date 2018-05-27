<?php

namespace App\Api\Controllers;

use Illuminate\Validation\ValidationException,
    App\Services\User\UpdateUserService,
    App\Services\User\SignUpService,
    Illuminate\Http\Request;

class UserController
{
  private $signUpService;
  private $updateUserService;

  public function __construct(
    SignUpService $signUpService,
    UpdateUserService $updateUserService)
  {
    $this->signUpService = $signUpService;
    $this->updateUserService = $updateUserService;
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
      'id',
      'first_name',
      'last_name',
      'email',
      'old_password',
      'new_password',
      'new_password_confirmation'
    ]);

    return $this->updateUserService->updateUser($userData);
  }
}
