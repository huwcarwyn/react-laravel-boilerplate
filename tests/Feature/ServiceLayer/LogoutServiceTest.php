<?php

namespace Tests\Feature\ServiceLayer;

use Tests\TestCase,
	App\Services\Session\LogOutService;

class LogOutServiceTest extends TestCase
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

        $this->logOutService = new LogOutService(
            $auth,
            $cookie,
            $this->response
        );
    }

    public function testLoggingOutReturnsOKResponseAndForgetsCookie()
    {
        $response = $this->logOutService->logout();

		$this->assertEquals($response->status(), 200);
    }
}
