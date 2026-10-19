<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategorieRequest;
use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function index()
    {
        $categories = Categorie::with('sous_categorie.produit')->get();
        return response()->json($categories, 200);
    }

    public function store(CategorieRequest $request)
    {
        $data = $request->validated();
        $categorie = Categorie::create($data);
        return response()->json($categorie, 201);
    }

    public function show(Categorie $categorie)
    {
        return response()->json($categorie, 200);
    }

    public function update(CategorieRequest $request, Categorie $categorie)
    {
        $data = $request->validated();
        $categorie->update($data);
        return response()->json($categorie, 200);
    }

    public function destroy(Categorie $categorie)
    {
        $categorie->delete();
        return response()->json(null, 204);
    }
}
