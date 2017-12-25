<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class LoginController extends Controller
{
    //
    public function index(){
        return view('login/index');
    }
    public function login(Request $request){
        $name = $request->input('name');
        $password = $request->input('password');

        if(Auth::guard('my')->attempt(compact('name','password'))){
            return redirect('admin/index');
        }else{
            return redirect('login/index')->withErrors('用户名或密码错误');
        }
    }
}
