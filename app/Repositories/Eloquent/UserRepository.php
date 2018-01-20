<?php

namespace App\Repositories\Eloquent;

use App\Models\User,
		App\Repositories\Eloquent\CRUDRepository,
		App\Contracts\Repository\UserRepositoryContract;

class UserRepository extends CRUDRepository implements UserRepositoryContract
{
	protected $model;

	public function __construct(User $model)
	{
		$this->model = $model;
	}

	public function findByEmail($email)
	{
		return $this->model->where('email', $email)->first();
	}
}
