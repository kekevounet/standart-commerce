<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sous_categorieRequest;
use App\Models\Sous_categorie;
use Illuminate\Http\Request;

class Sous_categorieController extends Controller
{
    public function index()
    {
        $sous_categories = Sous_categorie::with("categorie")->get();
        return response()->json($sous_categories, 200);
    }

    public function store(Sous_categorieRequest $request)
    {
        $data = $request->validated();
        $sous_categorie = Sous_categorie::create($data);
        return response()->json($sous_categorie, 201);
    }

    public function show(Sous_categorie $sous_categorie)
    {
        return response()->json($sous_categorie, 200);
    }

    public function update(Sous_categorieRequest $request, Sous_categorie $sous_categorie)
    {
        $data = $request->validated();
        $sous_categorie->update($data);
        return response()->json($sous_categorie, 200);
    }

    public function destroy(Sous_categorie $sous_categorie)
    {
        $sous_categorie->delete();
        return response()->json(null, 204);
    }
}
