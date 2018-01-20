<?php

namespace App\Services;

use Illuminate\Contracts\Validation\Factory as Validator,
		Illuminate\Contracts\Routing\ResponseFactory as Response,
		Illuminate\Contracts\Auth\PasswordBroker;

class ForgotPasswordService
{
	private $passwordBroker;
	private $validator;
	private $response;

	public function __construct(
		PasswordBroker $passwordBroker,
		Validator $validator,
		Response $response
	)
	{
		$this->passwordBroker = $passwordBroker;
		$this->validator = $validator;
		$this->response = $response;
	}

	public function passwordRequest($email)
	{
		if ($this->validateEmail($email)->fails()) {
			return $this->response->json($dataValidator->failed(), 422);
		} else {
			$this->passwordBroker->sendResetLink(['email' => $email]);
			return $this->response->apiSuccess('Password reset request successfully sent');
		}
	}

	public function validateEmail($email)
	{
		return $this->validator->make(['email' => $email], [
			'email' => 'required|email'
		]);
	}
}
