<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase,
    Faker\Factory as FakerFactory;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected $faker;

    public function setUp() 
    {
        parent::setUp();

        $this->faker = FakerFactory::create();

        $kernel = resolve('Illuminate\Contracts\Console\Kernel');
        $kernel->call('migrate');
    }
}
