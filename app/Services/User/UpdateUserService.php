<?php

namespace App\Services\User;

use App\Contracts\Repository\UserRepositoryContract as UserRepository,
    Illuminate\Contracts\Routing\ResponseFactory as Response,
    Illuminate\Contracts\Validation\Factory as Validator,
    Illuminate\Validation\ValidationException,
    Illuminate\Http\Request;

class SignUpService {
  private $validator;
  private $repository;
  private $user;

  public function __construct(
    Validator $validator,
    UserRepository $repository,
    Response $response)
  {
    $this->repository = $repository;
    $this->response = $response;
    $this->validator = $validator;
  }

  public function makeUserUpdateValidator($data)
  {
    return $this->validator->make($data, [
      'first_name' => 'required',
      'last_name' => 'required',
      'email' => 'required|email|unique:users,email',
      'old_password' => 'required_with:new_password',
      'new_password' => 'confirmed'
    ]);
  }

  public function updateUser($userData)
  {
    $validator = $this->makeUserUpdateValidator($userData);

    if ($validator->fails())
    {
      return $this->response->validationError($validator->failed());
    }

    $updatedUser = $this->repository->update($userData);

    return $response->success($updatedUser)
  }
}
