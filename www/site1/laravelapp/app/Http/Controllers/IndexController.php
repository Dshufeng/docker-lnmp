<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    public function index(Request $request){
        $data = $request->all();
        User::create($data);
    }

    public function logout(){
        Auth::guard('my')->logout();
        return redirect('/login/index');
    }
}
