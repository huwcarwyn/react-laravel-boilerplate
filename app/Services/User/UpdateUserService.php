<?php

namespace App\Services\User;

use App\Contracts\Repository\UserRepositoryContract as UserRepository;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Contracts\Validation\Factory as Validator;
use Illuminate\Validation\ValidationException;

class UpdateUserService
{
    private $validator;
    private $repository;
    private $user;

    public function __construct(
        Validator $validator,
        UserRepository $repository,
        Response $response
    ) {
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

    public function updateUserWithResponse($userData)
    {
        try {
            $updatedUser = $this->updateUser($userData);

            return $this->response->success(['data' => $updatedUser]);
        } catch (ValidationException $e) {
            return $this->response->validateError($e->errors());
        }
    }

    public function updateUser($userData)
    {
        $currentUser = $this->repository->find($userData['id'])['data'];

        if ($userData['email'] && $currentUser['email'] == $userData['email']) {
            unset($userData['email']);
        }

        $validator = $this->makeUserUpdateValidator($userData);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $this->repository->update($userData, $userData['id']);
    }
}
