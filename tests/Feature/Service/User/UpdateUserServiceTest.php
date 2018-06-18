<?php

namespace Tests\Feature\Service\User;

use Tests\TestCase,
    App\Services\User\UpdateUserService;

class UpdateUserServiceTest extends TestCase
{
  private $updateUserService;

  public function setUp()
  {
    parent::setUp();

    // $this->updateUserService = new UpdateUserService(
    //  resolve('Validator'),
    //  resolve('Repository'),
    //  resolve('Response')
    // );
  }

  public function testUpdatingUserStoresUpdatedData()
  {

  }

  public function testInvalidDataReturnsValidationErrors()
  {

  }

  public function testCantUpdateUserWithoutCorrectPermission()
  {

  }
}