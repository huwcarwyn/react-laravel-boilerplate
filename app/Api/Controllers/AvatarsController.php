<?php

namespace App\Api\Controllers;

use Illuminate\Contracts\Auth\Factory as Auth,
    Illuminate\Http\Request,
    Input;

class AvatarsController {
  private $auth;
  private $avatarService;

  public function __construct(Auth $auth)
  {
    $this->auth = $auth;
    $this->avatarService = $avatarService;
  }

  public function get()
  {

  }

  public function upload()
  {
    $file = Input::file('avatar');

    $this->avatarService->upload($file);
  }

  public function update()
  {

  }

  public function delete()
  {

  }
}
