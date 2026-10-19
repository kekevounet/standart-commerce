<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            "first_name" => "required|string|max:50",
            "email" => "required|string|email|unique:users,email",
            "password" => "required|string|min:8|confirmed"
        ]);
        $user = User::create([
            "first_name" => $data["first_name"],
            "email" => $data['email'],
            "password" => Hash::make($data['password']),
        ]);
        $token = $user->createToken('token', [""], now()->addDay(7))->plainTextToken;
        return response()->json([
            "Message" => "Nouveau utilisateur enregistrer avec succès",
            "User" => $user,
            "token" => $token
        ]);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            "email" => "required|string|email",
            "password" => "required|string"
        ]);
        $user = User::where('email', $data['email'])->first();
        if(!$user || !Hash::check($data['password'], $user->password))
        {
            throw ValidationException::withMessages(['email' => ['Erreur de mdp ou meail']]);
        }
        $user->tokens()->delete();
        $token = $user->createToken('token', [""], now()->addDay(7))->plainTextToken;
        return response()->json([
            "Message" => "Login utilisateur enregistrer avec succès",
            "User" => $user,
            "token" => $token
        ]);
    }

    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
