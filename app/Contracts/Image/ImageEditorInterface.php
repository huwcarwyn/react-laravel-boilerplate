<?php

interface ImageEditorInterface {
  public function open();

  public function resize();

  public function save();
}