<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Validator;

class AuthController extends Controller
{
    public $successStatus = 200;

    function login(Request $request){
    	$validate = Validator::make($request->all(),[
    		'email'    => 'required|email',
    		'password' => 'required'
    	]);
    	if( $validate->fails() ){
    		return response()->json(['error' => $validate->errors()],500);
    	}else{
    		if(Auth::attempt(['email' => request('email'),'password' => request('password')] )){
	    		$user = Auth::user();
	    		$success['token'] = $user->createToken('fbReact')->accessToken;
	    		$success['status'] = 1;
	    		return response()->json(['success' => $success],$this->successStatus);
    		}else{
    			return response()->json(['error'=>'Unauthorised'], 401);
    		}
    	}
    }

    public function details() 
    { 
        $user = Auth::user(); 
        return response()->json(['success' => $user], $this->successStatus); 
    } 
}
