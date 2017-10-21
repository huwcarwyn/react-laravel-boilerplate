<?php

namespace App\Contracts\Repository;

interface CRUDRespositoryContract {
	public function all();

	public function create(array $data);

	public function get($id);

	public function update($id, array $data);

	public function delete($id);
}