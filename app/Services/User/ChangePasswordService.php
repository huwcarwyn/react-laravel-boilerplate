<?php

namespace App\Services\User;

use App\Contracts\Repository\UserRepositoryContract as UserRepository;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Contracts\Validation\Factory as Validator;
use Illuminate\Contracts\Hashing\Hasher;

class ChangePasswordService
{
    private $repository;
    private $response;
    private $validator;
    private $hasher;
    private $user;

    public function __construct(
        Validator $validator,
        UserRepository $repository,
        Response $response,
        Hasher $hasher
    ) {
        $this->repository = $repository;
        $this->response = $response;
        $this->validator = $validator;
        $this->hasher = $hasher;
    }

    public function makeValidator($data)
    {
        return $this->validator->make($data, [
            'user_id'      => 'required|numeric',
            'old_password' => 'required',
            'new_password' => 'required|confirmed'
        ]);
    }

    public function changePassword($data)
    {
        $validator = $this->makeValidator($data);

        if ($validator->fails()) {
            return $this->response->validateError($validator->failed());
        }

        $this->user = $this->repository->find($data['user_id']);

        if ($this->hasher->check($data['old_password'], $this->user->password)) {
            $this->user->password = $data['new_password'];
            $this->user->save();

            return $this->response->success(['message' => 'User password successfully updated']);
        } else {
            return $this->response->error("Old Password is incorrect");
        }
    }
}
