<?php

namespace App\Validators;

use Prettus\Validator\LaravelValidator;

class PostValidator extends LaravelValidator {
    protected $rules = [
        'title' => 'required',
        'body'  => 'required',
    ];
}