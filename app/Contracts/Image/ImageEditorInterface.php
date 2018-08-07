<?php

namespace App\Contracts\Image;

interface ImageEditorInterface
{
    public function open();

    public function resize();

    public function save();
}
