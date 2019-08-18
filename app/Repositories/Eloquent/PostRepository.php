<?php

namespace App\Repositories\Eloquent;

use App\Models\Post;
use App\Presenters\PostPresenter;
use App\Validators\PostValidator;
use App\Repositories\Eloquent\BaseRepoWithSlugs;
use App\Contracts\Repository\PostRepositoryContract;

class PostRepository extends BaseRepoWithSlugs implements PostRepositoryContract
{
    protected $skipPresenter = true;

    public function model()
    {
        return Post::class;
    }

    public function presenter()
    {
        return PostPresenter::class;
    }

    public function validator()
    {
        return PostValidator::class;
    }
}
