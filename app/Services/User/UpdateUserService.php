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

    public function makeValidator($data)
    {
        return $this->validator->make($data, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'email|unique:users,email',
        ]);
    }

    public function updateUserResponse($userData)
    {
        try {
            $updatedUser = $this->updateUser($userData);

            return $this->response->success($this->repository->skipPresenter(false)->parserResult($updatedUser));
        } catch (ValidationException $e) {
            return $this->response->validateError($e->errors());
        }
    }

    public function updateUser($userData)
    {
        $currentUser = $this->repository->currentUser();

        if ($userData['email'] && $currentUser->email == $userData['email']) {
            unset($userData['email']);
        }

        $validator = $this->makeValidator($userData);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $userId = $this->repository->decodeSlug($userData['slug']);

        return $this->repository->update($userData, $userId);
    }
}
