<?php

namespace App\Services\User\Avatar;

use Illuminate\Support\Str;
use App\Contracts\Repository\UserRepositoryContract;
use Illuminate\Contracts\Validation\Factory as Validator;
use Illuminate\Contracts\Filesystem\Factory as FileSystem;
use Illuminate\Contracts\Routing\ResponseFactory as Response;

class CreateAvatarService
{
    private $validator;
    private $fileSystem;
    private $response;
    private $userRepo;

    public function __construct(
        Response $response,
        Validator $validator,
        FileSystem $fileSystem,
        UserRepositoryContract $userRepo
    ) {
        $this->validator = $validator;
        $this->fileSystem = $fileSystem;
        $this->response = $response;
        $this->userRepo = $userRepo;
    }

    public function makeValidator($data)
    {
        return $this->validator->make($data, [
            'avatar' => 'mimetypes:image/jpeg,image/png,image/jpg,image/gif'
        ]);
    }

    public function create($file)
    {
        $fileValidator = $this->makeValidator(['avatar' => $file]);

        if ($fileValidator->fails()) {
            return $this->response->validateError($fileValidator->failed());
        }

        $this->removeCurrentAvatar();

        $newFileName = $this->setNewAvatar($file);

        $this->assignToCurrentUser($newFileName);

        return $this->response->success(['data' => [
            'fileUrl' => $this->fileSystem->url($newFileName),
            'fileName' => $newFileName,
            'message' => 'Avatar successfully saved'
        ]]);
    }

    public function removeCurrentAvatar()
    {
        $currentAvatar = $this->userRepo->getCurrentAvatarFile();

        $this->userRepo->removeCurrentAvatar();

        $this->fileSystem->delete($currentAvatar);
    }

    public function setNewAvatar($file)
    {
        $newFileName = (string) Str::uuid('img_') . '.' . $file->extension();

        $this->fileSystem->put($newFileName, file_get_contents($file));

        return $newFileName;
    }

    public function assignToCurrentUser($newFileName)
    {
        $this->userRepo->setCurrentAvatar($newFileName);
    }
}
