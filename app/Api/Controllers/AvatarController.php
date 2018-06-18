<?php

namespace App\Api\Controllers;

use Illuminate\Contracts\Auth\Factory as Auth,
	Illuminate\Http\Request;

class AvatarController {
	private $auth;

	public function __construct(Auth $auth) 
	{
		$this->auth = $auth;
	}

	public function get()
	{

	}

	public function upload($file)
	{

	}

	public function update($file)
	{

	}

	public function delete()
	{

	}
}
