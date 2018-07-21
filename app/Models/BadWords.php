<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BadWords extends Model
{
    protected $table = 'bad_words';
    protected $fillable=['id','word','status','created_at','updated_at'];
}
