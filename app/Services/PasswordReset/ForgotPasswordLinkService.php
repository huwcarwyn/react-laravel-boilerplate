<?php

namespace App\Services\PasswordReset;

use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Contracts\Auth\PasswordBroker;

class ForgotPasswordLinkService
{
    private $response;
    private $passwordBroker;

    use SendsPasswordResetEmails, ValidatesRequests;

    public function __construct(Response $response, PasswordBroker $passwordBroker)
    {
        $this->response = $response;
        $this->passwordBroker = $passwordBroker;
    }

    /**
     * We don't want to notify the client whether or not the link request was successful,
     * only if the request was sent. So return the same response in both failed and
     * successful cases.
     */
    public function sendResetLinkResponse()
    {
        return $this->response->success(['message' => 'Password link reset request sent']);
    }

    public function sendResetLinkFailedResponse()
    {
        return $this->sendResetLinkResponse(['message' => 'Password link reset request sent']);
    }

    public function broker()
    {
        return $this->passwordBroker;
    }
}
