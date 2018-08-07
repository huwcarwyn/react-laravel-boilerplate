<?php

namespace Tests\Feature\Service\User\Avatar;

use Tests\TestCase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Services\User\Avatar\CreateAvatarService;

class CreateAvatarServiceTest extends TestCase
{
    private $createAvatarService;

    public function setUp()
    {
        parent::setUp();

        //Fake the public storage disk
        Storage::fake('public');

        $this->user = factory(\App\Models\User::class)->create();
        $this->actingAs($this->user);

        $this->createAvatarService = new CreateAvatarService(
            resolve('Illuminate\Contracts\Routing\ResponseFactory'),
            resolve('Illuminate\Contracts\Validation\Factory'),
            resolve('Illuminate\Contracts\Filesystem\Factory'),
            resolve('App\Contracts\Repository\UserRepositoryContract')
        );
    }

    public function testCantUploadIncorrectFileFormat()
    {
        $file = UploadedFile::fake('public')->image('image.xyz');

        $response = $this->createAvatarService->create($file);
        $responseContent = json_decode($response->getContent(), true);

        Storage::disk('public')->assertMissing('image.xyz');
        $this->assertEquals($response->status(), 422);
        $this->assertArrayHasKey('avatar', $responseContent['messages']);
    }

    public function testCanUploadCorrectImageFormat()
    {
        $file = UploadedFile::fake('public')->image('image.png');

        $response = $this->createAvatarService->create($file);
        $responseContent = json_decode($response->getContent(), true);
        $newFileName = $responseContent['data']['fileName'];

        $this->assertEquals($this->user->fresh()->avatar, $newFileName);

        $this->assertEquals($response->status(), 200);
        Storage::disk('public')->assertExists($newFileName);
        $this->assertEquals($responseContent['data']['message'], 'Avatar successfully saved');
    }
}
