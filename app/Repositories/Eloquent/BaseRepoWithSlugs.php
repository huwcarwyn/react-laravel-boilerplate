<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;

abstract class BaseRepoWithSlugs extends BaseRepository {
    public function decodeSlug($slug) 
    {
        return $this->model::decodeSlug($slug);
    }

    public function slug()
    {
        return $this->model->slug();
    }


    public function findBySlug($slug)
    {
        $this->applyCriteria();
        $this->applyScope();
        $model = $this->model->findBySlug($slug);
        $this->resetModel();
        return $this->parserResult($model);
    }
}