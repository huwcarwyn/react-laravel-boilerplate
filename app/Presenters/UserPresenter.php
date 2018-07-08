<?php

namespace App\Presenters;

use App\Transformers\UserTransformer,
    Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ContactPresenter.
 *
 * @package namespace App\Presenters;
 */
class UserPresenter extends FractalPresenter
{
  /**
   * Transformer
   *
   * @return \League\Fractal\TransformerAbstract
   */
  public function getTransformer()
  {
    return new UserTransformer();
  }
}