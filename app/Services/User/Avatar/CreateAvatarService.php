<?php

namespace App\Services\User\Avatar;

use Illuminate\Contracts\Routing\ResponseFactory as Response,
    Illuminate\Contracts\Validation\Factory as Validator,
    Illuminate\Contracts\Auth\Factory as Auth,
    League\Flysystem\FilesystemInterface;

class CreateAvatarService
{
  private $validator;
  private $fileSystem;
  private $response;
  private $auth;

  public function __construct(
    Validator $validator,
    FilesystemInterface $fileSystem,
    Response $response
  )
  {
    $this->validator = $validator;
    $this->fileSystem = $fileSystem;
    $this->response = $response;
    $this->auth = $auth;
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

    $newFileName = uniqid('img_');

    $this->fileSystem->put($newFileName, $file);

    return $this->response->success(['data' => [
      'fileName' => $newFileName,
      'message' => 'Avatar successfully saved'
    ]]);
  }
}