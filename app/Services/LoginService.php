<?php

namespace App\Services;

use App\Exceptions\FailedAuthAttemptException,
    Illuminate\Contracts\Auth\Factory as Auth,
    Illuminate\Contracts\Validation\Factory as Validator,
    Illuminate\Validation\ValidationException;

class LoginService
{
  protected $auth;
  protected $validator;

  public function __construct(Auth $auth, Validator $validator)
  {
    $this->auth = $auth;
    $this->validator = $validator;
  }

  public function login($username, $password)
  {
    $validateLoginInfo = $this->validator->make([
      'email' => 'required|email',
      'password' => 'required'
    ]);

    if($validateLoginInfo->fails()) {
      throw new ValidationException($validateLoginInfo);
    }

    if($this->auth->attempt(['email' => $email, 'password' => $password])) {
      return true;
    }

    else {
      throw new FailedAuthAttemptException();
    }
  }

  public function logOut()
  {

  }
}
