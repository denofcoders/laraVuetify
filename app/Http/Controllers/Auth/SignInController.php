<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class SignInController extends Controller {
    public function __invoke(Request $request) {
        $rules = [
            'email' => 'required|email',
            'password' => 'required|string',
        ];
        $request->validate($rules);


        if (!$token = auth()->attempt($request->only('email', 'password'))) {
            $errors['email'][] = ['Invalid Credentials.'];
            $errors['password'][] = ['Invalid Credentials.'];
            throw   ValidationException::withMessages($errors);


        }
        return response()->json(['token' => $token]);
    }
}
