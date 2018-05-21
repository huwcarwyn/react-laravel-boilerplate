<?php

namespace App\Api\Controllers;

use App\Services\PasswordReset\ForgotPasswordLinkService,
    App\Services\PasswordReset\ResetPasswordService,
    Illuminate\Http\Request;

class PasswordResetController
{
  private $resetPasswordService;
  private $forgotPasswordLinkService;

  public function __construct(
    ResetPasswordService $resetPasswordService,
    ForgotPasswordLinkService $forgotPasswordLinkService)
  {
    $this->resetPasswordService = $resetPasswordService;
    $this->forgotPasswordLinkService = $forgotPasswordLinkService;
	}

  public function forgotPassword(Request $request)
  {
    return $this->forgotPasswordLinkService->sendResetLinkEmail($request);
  }

  public function resetPassword(Request $request)
  {
    return $this->resetPasswordService->reset($request);
  }
}
