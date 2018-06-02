<?php

namespace App\Services\User;

use App\Contracts\Repository\UserRepositoryContract as UserRepository,
    Illuminate\Contracts\Routing\ResponseFactory as Response,
    Illuminate\Contracts\Validation\Factory as Validator;
    
class UpdateUserService {
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
      'email' => 'email|unique:users,email',
    ]);
  }

  public function updateUser($userData)
  {
    $currentUser = $this->repository->find($userData['id']);

    if($userData['email'] && $currentUser->email == $userData['email']) 
    {
      unset($userData['email']);
    }

    $validator = $this->makeUserUpdateValidator($userData);

    if ($validator->fails())
    {
      return $this->response->validateError($validator->failed());
    }

    $updatedUser = $this->repository->update($userData, $userData['id']);

    return $this->response->success(['data' => $updatedUser]);
  }
}
