<?php

namespace App\Repositories\Eloquent;

use App\Models\User,
	App\Criterias\OnlyOwnUserCriteria,
	Prettus\Repository\Eloquent\BaseRepository,
	App\Contracts\Repository\UserRepositoryContract;

class UserRepository extends BaseRepository implements UserRepositoryContract
{
	public function boot()
	{
		$this->pushCriteria(OnlyOwnUserCriteria::class);
	}

	public function model() {
		return User::class;
	}
}
