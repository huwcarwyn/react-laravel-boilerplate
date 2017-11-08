<?php

namespace App\Services;

use GuzzleHttp\Client,
    Illuminate\Contracts\Cookie\Factory as Cookie,
    Illuminate\Contracts\Encryption\Encrypter as Crypt,
    Illuminate\Contracts\Routing\ResponseFactory as Response;

class OauthService 
{
  private $cookie;
  private $crypt;
  private $response;

  public function __construct(Cookie $cookie, Crypt $crypt, Response $response)
  {
    $this->cookie = $cookie;
    $this->crypt = $crypt;
    $this->response = $response;
  }

  public function passwordGrantAuthResponse($email, $password)
  {
    $oAuthCredentials = $this->passwordGrantAuth($email, $password);

    $response = $this->response->json($oAuthCredentials);

    $this->cookie->queue($this->crypt->encrypt($oAuthCredentials->refresh_token));

    return $response;
  }

  public function passwordGrantAuth($email, $password)
  {
    $client = new Client();

    $request = $client->post(env('APP_URL') . '/oauth/token', [
      'form_params' => [
        'grant_type' => 'password',
        'client_id' => env('OAUTH_CLIENT_ID'),
        'client_secret' => env('OAUTH_CLIENT_SECRET'),
        'username' => $email,
        'password' => $password,
      ]
    ]);

    $credentials = json_decode((string) $request->getBody(), true);

    return $credentials;
  }

}
