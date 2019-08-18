<?php

namespace App\Services\Session;

use App\Contracts\Repository\UserRepositoryContract as UserRepository;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Contracts\Validation\Factory as Validator;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Validation\ValidationException;
use Laravel\Passport\ApiTokenCookieFactory;

class LoginService
{
    private $auth;
    private $validator;
    private $cookie;
    private $response;
    private $repository;

    public function __construct(
        Auth $auth,
        Validator $validator,
        UserRepository $repository,
        ApiTokenCookieFactory $cookie,
        Response $response
    ) {
        $this->auth = $auth;
        $this->cookie = $cookie;
        $this->response = $response;
        $this->validator = $validator;
        $this->repository = $repository;
    }

    public function validateLoginInfo($data)
    {
        return $this->validator->make($data, [
            'email' => 'required|email',
            'password' => 'required'
        ]);
    }

    public function attemptLoginResponse($loginInfo, $csrfToken)
    {
        try {
            $attempt = $this->attemptLogin($loginInfo, $csrfToken);

            if ($attempt) {
                $apiCookie = $this->cookie->make($this->auth->user()->getKey(), $csrfToken);

                return $this->response->success(
                    $this->repository->skipPresenter(false)->currentUser()
                )->withCookie($apiCookie);
            } else {
                return $this->response->unauthorized('Incorrect login details');
            }
        } catch (ValidationException $e) {
            return $this->response->validateError($e->errors());
        }
    }

    public function attemptLogin($loginInfo, $csrfToken)
    {
        $validator = $this->validateLoginInfo($loginInfo);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $this->auth->attempt($loginInfo);
    }
}
