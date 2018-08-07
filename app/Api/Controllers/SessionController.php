<?php

namespace App\Api\Controllers;

use App\Contracts\Repository\UserRepositoryContract;
use App\Services\Session\LoginService;
use App\Services\Session\LogoutService;
use Illuminate\Http\Request;

class SessionController
{
    private $loginService;
    private $logoutService;
    private $userRepo;

    public function __construct(
        LoginService $loginService,
        LogoutService $logoutService,
        UserRepositoryContract $userRepo
    ) {
        $this->loginService = $loginService;
        $this->logoutService = $logoutService;
        $this->userRepo = $userRepo;
    }

    public function currentUser()
    {
        return $this->userRepo->currentUser()['data'];
    }

    public function login(Request $request)
    {
        $loginInfo = $request->only(['email', 'password']);
        $csrfToken = $request->header('X-CSRF-TOKEN');

        return $this->loginService->attemptLogin($loginInfo, $csrfToken);
    }

    public function logOut()
    {
        return $this->logoutService->logOut();
    }
}
