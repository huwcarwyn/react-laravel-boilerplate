<?php

namespace App\Services\Session;

use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Contracts\Cookie\Factory as Cookie;
use Illuminate\Contracts\Routing\ResponseFactory as Response;

class LogoutService
{
    private $auth;
    private $cookie;
    private $response;

    public function __construct(Auth $auth, Cookie $cookie, Response $response)
    {
        $this->auth = $auth;
        $this->cookie = $cookie;
        $this->response = $response;
    }

    public function logout()
    {
        return $this->response->success(['message' => 'Successfully logged out'])
                          ->withCookie($this->cookie->forget('laravel_token'));
    }
}
