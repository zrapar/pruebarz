<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BadWords;
use App\Models\Question;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller {
    public function index(){
        
        
        
            return view('user.index');
        
            
    }
    public function question(Request $request)
    {  
        if(Auth::check()){

            $badWords = BadWords::where([
                ['status', '=', 1]
                ])->orderBy('id', 'desc')->get();
            
            $question=strtolower($request->question);
            $array=[];
            foreach($badWords as $key => $word){
                $pos = strpos($question, $word->word);
                if ($pos !== false) {
                    array_push($array, $word->word);
                }
            }
            if(count($array)>0){
                $ques= new Question;
                $ques->question= $request->question;
                $ques->badword=json_encode($array);
                $ques->who_id=Auth::user()->id;
                $ques->status=2;
                $ques->created_at=Carbon::now();
                $ques->updated_at=Carbon::now();
                $ques->save();
                return response()->json([
                    'status'=>'false',
                    'message'=>'La Pregunta no fue enviada por contener malas palabras'
                    ]);
            }else{
                $ques= new Question;
                $ques->question= $request->question;
                $ques->badword=null;
                $ques->who_id=Auth::user()->id;
                $ques->status=1;
                $ques->created_at=Carbon::now();
                $ques->updated_at=Carbon::now();
                $ques->save();
                return response()->json([
                    'status'=>'true',
                    'message'=>'La pregunta fue enviada, pronto recibira su respuesta'
                    ]);
            }
        }else{
            return response()->json([
                'status'=>'unlogged'
            ]);
        }
    }
}