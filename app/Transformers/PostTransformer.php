<?php
namespace App\Transformers;

use App\Models\Post;
use League\Fractal\TransformerAbstract;

/**
 * Class PostTransformer.
 *
 * @package namespace App\Transformers;
 */
class PostTransformer extends TransformerAbstract
{
    /**
     * Transform the Post entity.
     *
     * @param \App\Models\Post $model
     *
     * @return array
     */
    public function transform(Post $model)
    {
        return [
            'slug' => $model->slug(),
            'title' => $model->title,
            'body' => $model->body
        ];
    }
}
