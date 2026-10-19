<?php

use App\Http\Controllers\Auth\AdminController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\Sous_categorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('register', [AuthController::class, "register"]);
Route::post('login', [AuthController::class, "login"]);

Route::post('admin/register', [AdminController::class, "register"]);
Route::post('admin/login', [AdminController::class, "login"]);



Route::get('client/produits', [ProduitController::class, "index"]);
Route::get('client/categories', [CategorieController::class, "index"]);
Route::get('client/produits/{produit}', [ProduitController::class, "index"]);

Route::middleware('auth:sanctum')->group(function()
{
    // Route::apiResource('orders', OrderController::class);
    Route::Post('commander', [OrderController::class, "store"]);
    Route::get('commande', [OrderController::class, "getMyOrder"]);
    Route::middleware('role:admin')->group(function()
    {
        Route::apiResource('sous_categories', Sous_categorieController::class)->parameters(['sous_categories' => 'sous_categorie']);
        Route::apiResource('categories', CategorieController::class)->parameters(['categories' => 'categorie']);
        Route::get('produits/stats', [ProduitController::class, 'stats']);
        Route::apiResource('produits', ProduitController::class);
    });
});