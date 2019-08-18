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
     * @param \App\Models\User $model
     *
     * @return array
     */
    public function transform(Post $model)
    {
        return [
            'id' => (int) $model->id,
            'title' => $model->title,
            'body' => $model->body
        ];
    }
}
