<?php

namespace App\Services;

use App\Contracts\Repository\UserRepositoryContract as UserRepository,
    Illuminate\Contracts\Validation\Factory as Validator,
    Illuminate\Contracts\Auth\Factory as Auth,
    Illuminate\Validation\ValidationException,
    Laravel\Passport\ApiTokenCookieFactory,
    Illuminate\Http\Request,
    Illuminate\Http\Response;

class SignUpService {
  private $validator;
  private $response;
  private $cookie;
  private $user;
  private $auth;

  public function __construct(
    Auth $auth,
    Validator $validator, 
    UserRepository $user, 
    Response $response,
    ApiTokenCookieFactory $cookie)
  {
    $this->auth = $auth;
    $this->user = $user;
    $this->cookie = $cookie;
    $this->response = $response;
    $this->validator = $validator;
  }

  public function createUser($data)
  {
    $validateSignupData = $this->validator->make($data, [
      'first_name' => 'required',
      'last_name' => 'required',
      'email' => 'required|email',
      'password' => 'required'
    ]);

    if($validateSignupData->fails()) {
      throw new ValidationException($validateSignupData);
    }

    $this->user->create($data);

    return $this->user;
  }

  public function apiSignUp(Request $request)
  {
    $data = $request->only(['first_name', 'last_name', 'email', 'password']);

    $newUser = $this->createUser($data);

    $this->auth->login($newUser);

    return $this->response->api_sucess('User Successfully Created')
      ->withCookie($this->cookie->make($newUser->getKey(), $request->session()->token()))
  }
}
