<?php

namespace App\Api\Controllers;

use Illuminate\Validation\ValidationException,
    App\Services\User\UpdateUserService,
    App\Services\User\SignUpService,
    App\Services\User\ChangePasswordService,
    Illuminate\Http\Request;

class UserController
{
  private $signUpService;
  private $updateUserService;
  private $changePasswordService;

  public function __construct(
    SignUpService $signUpService,
    UpdateUserService $updateUserService,
    ChangePasswordService $changePasswordService)
  {
    $this->signUpService = $signUpService;
    $this->updateUserService = $updateUserService;
    $this->changePasswordService = $changePasswordService;
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
      'email'
    ]);

    return $this->updateUserService->updateUser($userData);
  }

  public function changePassword(Request $request)
  {
    $data = $request->only([
      'user_id',
      'old_password',
      'new_password',
      'new_password_confirmation'
    ]);

    return $this->changePasswordService->changePassword($data);
  }
}
