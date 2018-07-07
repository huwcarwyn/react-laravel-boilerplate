<?php

namespace App\Api\Controllers;

use Illuminate\Contracts\Auth\Factory as Auth,
    Illuminate\Http\Request,
    Input;

class AvatarsController {
  private $auth;
  private $createAvatarService;

  public function __construct(Auth $auth)
  {
    $this->auth = $auth;
    $this->createAvatarService = $createAvatarService;
  }

  public function get()
  {

  }

  public function upload()
  {
    $file = Input::file('avatar');

    $this->createAvatarService->create($file);
  }

  public function update()
  {

  }

  public function delete()
  {

  }
}
