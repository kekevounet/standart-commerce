<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, string $roles): Response
    {
        if (!$request->user())
        {
            return response()->json([
                'Message' => 'Utilisateur non authentifié'
            ], 401);
        }

        if($request->user()->role !== $roles)
        {
            return response()->json([
                'Message' => 'Accès refusée'
            ], 403);
        }
        return $next($request);
    }
}
