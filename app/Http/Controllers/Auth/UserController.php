<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct() {
        $this->middleware(['auth:api']);
    }

    public function me(Request $request) {

        $user = $request->user();
        return response()->json(['name' => $user->name, 'email' => $user->email]);
    }
}
