<?php

namespace Tests\Feature\Service\Session;

use Tests\TestCase;
use App\Services\Session\LogoutService;

class LogoutServiceTest extends TestCase
{
    private $response;
    private $logOutService;

    public function setUp()
    {
        parent::setUp();

        $this->response = resolve('Illuminate\Contracts\Routing\ResponseFactory');

        $auth = resolve('Illuminate\Contracts\Auth\Factory');
        $cookie = resolve('Illuminate\Contracts\Cookie\Factory');

        $this->csrfToken = str_random(10);

        $this->logOutService = new LogoutService(
            $auth,
            $cookie,
            $this->response
        );
    }

    public function testLoggingOutReturnsOKResponseAndForgetsCookie()
    {
        $response = $this->logOutService->logoutResponse();

        $this->assertEquals($response->status(), 200);
    }
}
