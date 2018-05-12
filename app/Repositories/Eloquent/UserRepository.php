<?php

namespace App\Repositories\Eloquent;

use App\Models\User,
	Prettus\Repository\Eloquent\BaseRepository,
	App\Contracts\Repository\UserRepositoryContract;

class UserRepository extends BaseRepository implements UserRepositoryContract
{
	public function model() {
		return User::class;
	}
}
