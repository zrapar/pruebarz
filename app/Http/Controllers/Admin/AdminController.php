<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;
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
    public function addWord(Request $request){
        $word= new BadWords;
                $word->word= $rewordt->word;
                
                
                $word->status=1;
                $word->created_at=Carbon::now();
                $word->updated_at=Carbon::now();
                $word->save();
                return response()->json([
                    'status'=>'true',
                    'message'=>'La palabra fue agregada correctamente'
                    ]);
        
    }
    
}