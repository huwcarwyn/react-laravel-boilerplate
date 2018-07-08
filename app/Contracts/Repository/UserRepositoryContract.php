<?php

namespace App\Contracts\Repository;

use Prettus\Repository\Contracts\RepositoryInterface;

interface UserRepositoryContract extends RepositoryInterface
{
  public function currentUser();

  public function setCurrentAvatar($fileUrl);

  public function getCurrentAvatarFile();

  public function removeCurrentAvatar();
}