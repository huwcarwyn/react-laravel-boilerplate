<?php

namespace App\Repositories\Eloquent;

use App\Contracts\Repository\CRUDRepositoryContract;

abstract class CRUDRepository implements CRUDRepositoryContract
{
	protected $model;

	public function all()
	{
		return $this->model->all()->toArray();
	}

	public function create(array $data)
	{
		$this->model = $this->model->create($data);
		return $this->model;
	}

	public function get($id)
	{
		return $this->model->findOrFail($id);
	}

	public function update($id, array $data)
	{
		$currentModel = $this->model->findOrFail($id);
		return $currentModel->update($data);
	}

	public function delete($id)
	{
		return $this->model->findOrFail($id)->delete();
	}


}
