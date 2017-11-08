<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens,
    Illuminate\Notifications\Notifiable,
    Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function setPasswordAttribute($password)
    {
      $hash = resolve('Illuminate\Contracts\Hashing\Hasher');
      $this->attributes['password'] = $hash->make($password);
    }
}
