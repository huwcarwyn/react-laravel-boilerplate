<?php

namespace App\Api\Controllers;

use Illuminate\Contracts\Routing\ResponseFactory as Response,
		Illuminate\Contracts\Auth\Factory as Auth,
		App\Services\LoginService,
		App\Services\OauthService,
		Illuminate\Http\Request;

class SessionController {

	private $oAuthService;
	private $auth;

	public function __construct(OauthService $oAuthService, Auth $auth) {
		$this->oAuthService = $oAuthService;
		$this->auth = $auth;
	}

	public function currentUser()
	{
		return $this->auth->user()->toJson();
	}

	public function login(Request $request)
	{
		try {
			$oAuthCredentialsResponse = $this->oAuthService->passwordGrantAuthResponse($request->only('email', 'password'));

			return $oAuthCredentialsResponse;
		}

		catch (Exception $e) {
			return false;
		}
	}

	public function logOut()
	{

	}
}
