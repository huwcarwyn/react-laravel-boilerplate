<?php

namespace App\Models;

use Balping\HashSlug\HasHashSlug;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasHashSlug;

    protected $fillable = ['title', 'body'];
}
