<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BadWords;
use App\Models\Question;
use Carbon\Carbon;

class UserController extends Controller {
    public function index(Request $request){
        $status = $request->session()->get('status');
        
        if($status == null){

            return view('user.index');
        }else{
            return view('user.index')
                    ->with('status',$status);
        }
    }
    public function question(Request $request)
    {
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
            $ques->status=2;
            $ques->created_at=Carbon::now();
            $ques->updated_at=Carbon::now();
            $ques->save();
            
            $request->session()->flash('status', false);
            
            return redirect('/');
        }else{
            $ques= new Question;
            $ques->question= $request->question;
            $ques->badword=null;
            $ques->status=1;
            $ques->created_at=Carbon::now();
            $ques->updated_at=Carbon::now();
            $ques->save();
            $request->session()->flash('status', true);
            return redirect('/');
        }
    }
}