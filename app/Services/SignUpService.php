<?php

namespace App\Services;

use App\Contracts\Repository\UserRepositoryContract as UserRepository,
    Illuminate\Contracts\Routing\ResponseFactory as Response,
    Illuminate\Contracts\Validation\Factory as Validator,
    Illuminate\Validation\ValidationException,
    Laravel\Passport\ApiTokenCookieFactory,
    App\Services\OauthService,
    Illuminate\Http\Request;

class SignUpService {
  private $validator;
  private $response;
  private $cookie;
  private $user;
  private $oAuthService;

  public function __construct(
    Validator $validator,
    UserRepository $user,
    Response $response,
    ApiTokenCookieFactory $cookie,
    OauthService $oAuthService)
  {
    $this->user = $user;
    $this->cookie = $cookie;
    $this->response = $response;
    $this->validator = $validator;
    $this->oAuthService = $oAuthService;
  }

  public function validateUserData($data)
  {
    return $this->validator->make($data, [
      'first_name' => 'required',
      'last_name' => 'required',
      'email' => 'required|email',
      'password' => 'required'
    ]);
  }

  public function createUser($data)
  {
    $this->user->create($data);

    return $this->user;
  }

  public function apiSignUp(Request $request)
  {
    $data = $request->only(['first_name', 'last_name', 'email', 'password']);

    if ($this->validateUserData($data)->fails()) {
      return $this->response->json(
        $status = 422,
        $validateSignupData->errors()->all()
      );
    }

    $newUser = $this->createUser($data);

    // We need to call the password grant endpoint here so that our token is saved in
    // the database.
    $apiCookie = $this->cookie->make($newUser->getModel()->getKey(), $request->header('X-CSRF-TOKEN'));

    return $this->oAuthService->passwordGrantWithResponse($data['email'], $data['password'])->withCookie($apiCookie);
  }
}
