<?php

namespace App\Api\Controllers;

use App\Services\User\Avatar\CreateAvatarService,
    Illuminate\Http\Request;

class AvatarsController {
  private $createAvatarService;

  public function __construct(
    CreateAvatarService $createAvatarService)
  {
    $this->createAvatarService = $createAvatarService;
  }

  public function get()
  {

  }

  public function upload(Request $request)
  {
    $file = $request->file('avatar');

    return $this->createAvatarService->create($file);
  }

  public function update()
  {

  }

  public function delete()
  {

  }
}
