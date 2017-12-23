<?php

namespace Tests\Feature\ServiceLayer;

use Tests\TestCase,
	App\Services\LoginService,
	Illuminate\Foundation\Testing\WithoutMiddleware,
	Illuminate\Foundation\Testing\RefreshDatabase;

class LoginServiceTest extends TestCase
{
    private $user;
    private $response;
    private $loginService;

    use RefreshDatabase;

    public function setUp()
    {
        parent::setUp();

        $this->user = factory(\App\Models\User::class)->create();
        $this->response = resolve('Illuminate\Contracts\Routing\ResponseFactory');

        $auth = resolve('Illuminate\Contracts\Auth\Factory');
        $validation = resolve('Illuminate\Contracts\Validation\Factory');
        $cookie = resolve('Laravel\Passport\ApiTokenCookieFactory');

        $this->csrfToken = str_random(10);
        

        $this->loginService = new LoginService(
            $auth, 
            $validation, 
            $cookie, 
            $this->response
        );
    }

    public function testLoginWithCorrectDetailsReturnsOkWithCredentials()
    {
        $loginInfo = ['email' => $this->user->email, 'password' => 'password'];

        $response = $this->loginService->attemptLogin($loginInfo, $this->csrfToken);

        $this->assertArrayHasKey('success', json_decode($response->getContent(), true));
    }

    public function testLoginWithIncorrectDetailsErrors()
    {
        $loginInfo = ['email' => $this->user->email, 'password' => 'incorrect password'];

        $response = $this->loginService->attemptLogin($loginInfo, $this->csrfToken);

        $this->assertEquals($response->status(), 400);
        $this->assertArrayHasKey('error', json_decode($response->getContent(), true));
    }

    public function testInvalidLoginDetailsTriggersValidation()
    {
        $loginInfo = ['email' => '', 'password' => 'password'];

        $response = $this->loginService->attemptLogin($loginInfo, $this->csrfToken);

        $this->assertEquals($response->status(), 422);
        $this->assertArrayHasKey('email', json_decode($response->getContent(), true));
    }
}
