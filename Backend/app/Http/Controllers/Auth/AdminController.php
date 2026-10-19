<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AdminController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            "first_name" => "required|string|max:50",
            "email" => "required|string|max:50",
            "password" => "required|min:8|confirmed"
        ]);
        $user = User::create([
            "first_name" => $data['first_name'],
            "email" => $data['email'],
            "password" => Hash::make($data['password']),
            "role" => "admin",
        ]);
        $token = $user->createToken('token', [""], now()->addDay(7))->plainTextToken;
        return response()->json([
            "Message" => "User admin ajouté",
            "User Admin" => $user,
            "Token" => $token
        ], 201);

    }

    public function login(Request $request)
    {
        $data = $request->validate([
            "first_name" => "required|string|max:50",
            "email" => "required|string|max:50",
            "password" => "required|min:8"
        ]);
        $user = User::where("email", $data['email'])->first();
        if (!$user || !Hash::check($data['password'], $user->password))
        {
            throw ValidationException::withMessages(["Email"=> [" Email ou mdf error"]]);
        }
        $user->tokens()->delete();
        $token = $user->createToken('token', [""], now()->addDay(7))->plainTextToken;
        return response()->json([
            "Message" => "User admin ajouté",
            "User Admin" => $user,
            "Token" => $token
        ], 201);
    }

    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(User $user)
    {
        //
    }

    public function update(Request $request, User $user)
    {
        //
    }

    public function destroy(User $user)
    {
        //
    }
}
