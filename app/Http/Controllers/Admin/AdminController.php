<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\BadWords;
use Yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AdminController extends Controller {
    public function index(){

        
            

        return view('admin.index')->with('bad',false);
    }
    public function getDataTable(){
        $questions = DB::table('questions')
            ->leftJoin('users', 'questions.who_id', '=', 'users.id')
            ->leftJoin('status', 'questions.status', '=', 'status.id')
            ->get();
        return Datatables::of($questions)->make(true);
    }
    public function badwords(){
        
        return view('admin.index')
                ->with('bad',true);
    }
    public function getDataTableBad(){
        $malito = DB::table('bad_words')
            ->leftJoin('status', 'bad_words.status', '=', 'status.id')
            ->get();

            
        
        return Datatables::of($malito)->make(true);
    }
    
}