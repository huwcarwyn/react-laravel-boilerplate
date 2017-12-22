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
    private $oAuthService;
    private $loginService;

    public function setUp()
    {
        parent::setUp();

        $this->user = factory(\App\Models\User::class)->create();
        $this->response = resolve('Illuminate\Contracts\Routing\ResponseFactory');

        $auth = resolve('Illuminate\Contracts\Auth\Factory');
        $validation = resolve('Illuminate\Contracts\Validation\Factory');
        $cookie = resolve('Laravel\Passport\ApiTokenCookieFactory');

        $this->csrfToken = str_random(10);
        
        $this->oAuthService = \Mockery::mock('App\Services\OauthService');

        $this->loginService = new LoginService(
            $auth, 
            $validation, 
            $this->oAuthService, 
            $cookie, 
            $this->response
        );
    }

    public function testLoginWithCorrectDetailsReturnsOkWithCredentials()
    {
        $oAuthCredentials = [
            'access_token' => str_random(12),
            'refresh_token' => str_random(12)
        ];

        $loginInfo = ['email' => $this->user->email, 'password' => 'password'];

        $this->oAuthService->shouldReceive('passwordGrantWithResponse->withCookie')
                           ->andReturn($this->response->json($oAuthCredentials));

        $response = $this->loginService->attemptLogin($loginInfo, $this->csrfToken);

        $this->assertEquals(json_decode($response->getContent(), true), $oAuthCredentials);
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
