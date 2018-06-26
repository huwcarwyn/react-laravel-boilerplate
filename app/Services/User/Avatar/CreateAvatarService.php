<?php

namespace App\Services\User\Avatar;

use Illuminate\Contracts\Validation\Factory as Validator;

class CreateAvatarService
{
  private $validator;

  public function __construct(Validator $validator)
  {
    $this->validator = $validator;
  }

  public function makeAvatarValidator($data)
  {
    return $this->validator->make($data, [
      'avatar' => 'mimetypes:image/jpeg,image/png,image/gif'
    ]);
  }

  public function create($file)
  {
    $fileValidator = $this->makeValidator(['avatar' => $file]);

    if ($fileValidator->fails()) {
      return $this->response->validateError($fileValidator->failed());
    }

    // Create various file sizes using some lib

    // Upload the files using flysystem
  }
}