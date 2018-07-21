<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $table = 'questions';
    protected $fillable=['id','question','status','badword','who_id','created_at','updated_at'];
}
