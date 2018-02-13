<?php

namespace App\Services;

use Illuminate\Contracts\Routing\ResponseFactory as Response,
	Illuminate\Foundation\Validation\ValidatesRequests,
	Illuminate\Foundation\Auth\ResetsPasswords,
	Illuminate\Contracts\Auth\PasswordBroker;

class ResetPasswordService
{
	private $response;
	private $passwordBroker;

	use ResetsPasswords, ValidatesRequests;

	public function __construct(Response $response, PasswordBroker $passwordBroker)
	{
		$this->response = $response;
		$this->passwordBroker = $passwordBroker;
	}

	/**
	 * Since we hash the user's password when setting it on the model itself, we don't
	 * want to hash it here.
	 */
    protected function resetPassword($user, $password)
    {
        $user->password = $password;

        $user->save();
    }

	public function sendResetResponse($message)
	{
		return $this->response->success($message);
	}

	public function sendResetFailedResponse($message)
	{
		return $this->sendResetResponse($message);
	}

	public function broker()
	{
		return $this->passwordBroker;
	}

}