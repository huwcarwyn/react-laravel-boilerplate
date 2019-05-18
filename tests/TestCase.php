<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase,
    Faker\Factory as FakerFactory;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected $faker;

    protected function setUp(): void 
    {
        parent::setUp();

        $this->faker = FakerFactory::create();

        $kernel = resolve('Illuminate\Contracts\Console\Kernel');
        $kernel->call('migrate');

        return;
    }
}
