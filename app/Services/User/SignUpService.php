<?php

namespace App\Services\User;

use App\Contracts\Repository\UserRepositoryContract as UserRepository;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Contracts\Validation\Factory as Validator;
use Laravel\Passport\ApiTokenCookieFactory;

class SignUpService
{
    private $validator;
    private $response;
    private $cookie;
    private $user;

    public function __construct(
        Validator $validator,
        UserRepository $user,
        Response $response,
        ApiTokenCookieFactory $cookie
    ) {
        $this->user = $user;
        $this->cookie = $cookie;
        $this->response = $response;
        $this->validator = $validator;
    }

    public function validateUserData($data)
    {
        return $this->validator->make($data, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required'
        ]);
    }

    public function signUp($userInfo, $csrfToken)
    {
        $dataValidator = $this->validateUserData($userInfo);

        if ($dataValidator->fails()) {
            return $this->response->validateError($dataValidator->failed());
        }

        $newUser = $this->user->create($userInfo);

        $apiCookie = $this->cookie->make($newUser['data']['id'], $csrfToken);

        return $this->response->success(['message' => 'User successfully signed up'])->withCookie($apiCookie);
    }
}
