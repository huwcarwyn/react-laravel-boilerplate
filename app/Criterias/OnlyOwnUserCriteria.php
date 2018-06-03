<?php

namespace App\Criterias;

use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;

class OnlyOwnUserCriteria implements CriteriaInterface {
    private $auth;

    public function apply($model, RepositoryInterface $repository)
    {
        $this->auth = resolve('Illuminate\Contracts\Auth\Factory');

        $model = $model->where('id','=', $this->auth->user()->id );

        return $model;
    }
}