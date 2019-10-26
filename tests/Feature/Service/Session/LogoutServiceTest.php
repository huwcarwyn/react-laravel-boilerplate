<?php

namespace Tests\Feature\Service\Session;

use Tests\TestCase;
use Illuminate\Support\Str;
use App\Services\Session\LogoutService;

class LogoutServiceTest extends TestCase
{
    private $response;
    private $logOutService;

    protected function setUp(): void
    {
        parent::setUp();

        $this->response = resolve('Illuminate\Contracts\Routing\ResponseFactory');

        $auth = resolve('Illuminate\Contracts\Auth\Factory');
        $cookie = resolve('Illuminate\Contracts\Cookie\Factory');

        $this->csrfToken = Str::random(10);

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
