<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProduitRequest;
use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProduitController extends Controller
{
    public function index(Request $request)
    {
        $query = Produit::with('sous_categorie.categorie');
        if($request->filled('search'))
        {
            // $query
            //     ->where("name", "like", "%" .$request->search. "%" )
            //     ->orWhere("price", $request->search);
            $query->where(function ($q) use ($request) 
            {
                $q->where("name", "like", "%". $request->search."%")
                ->orWhere("price", $request->search);
            });
        }
        if($request->filled('filterStat'))
        {
            switch ($request->filterStat) 
            {
                case 'disponible':
                    $query->where("stock_quantity", ">", 20);
                    break;
                
                case 'faible':
                    $query->whereBetween("stock_quantity", [10, 20]);
                    break;

                case 'rupture':
                    $query->where("stock_quantity", "<", 10);
                    break;
            }
        }
        if($request->filled('sous_categorie'))
        {
            $query->where("sous_categorie_id", $request->sous_categorie);
        }
        if($request->filled('categorie'))
        {
            $query->whereHas('sous_categorie', function ($q) use ($request)
            {
                $q->where('categorie_id', $request->categorie);
            });
        }
        $produits = $query->get();
        return response()->json($produits, 200);
    }

    public function store(ProduitRequest $request)
    {
        $data = $request->validated();
        if ($request->hasFile('image'))
        {
            $data['image'] = $request->file('image')->store('images', 'public');
        }
        $produit = Produit::create($data);
        return response()->json($produit, 201);
    }

    public function show(Produit $produit)
    {
        return response()->json($produit, 200);
    }

    public function update(ProduitRequest $request, Produit $produit)
    {
        $data = $request->validated();
        if($request->hasFile('image'))
        {
            if($produit->image)
            {
                Storage::disk('public')->delete($produit->image);
            }
            $data['image'] = $request->file('image')->store('images', 'public');
        }
        $produit->update($data);
        return response()->json($produit, 200);
    }

    public function destroy(Produit $produit)
    {
        $produit->delete();
        if($produit->image)
        {
            Storage::disk('public')->delete($produit->image);
        }
        return response()->json(null, 204);
    }

    public function stats()
    {
        $totalProduits = Produit::count();
        $totalQuantite = Produit::sum('stock_quantity');
        $totalPrixProduits = Produit::selectRaw('SUM(price * stock_quantity) as total')->value('total');
        $disponible = Produit::where('stock_quantity', '>' , 20)->count();
        $rupture = Produit::where('stock_quantity', '<', 10)->count();
        $faible = Produit::whereBetween('stock_quantity', [10, 20])->count();
        return response()->json([
            'Total de produit' => $totalProduits,
            'Total de quantite' => $totalQuantite,
            'Total de prix produits' => $totalPrixProduits,
            'Total de produit disponible en stock' => $disponible,
            'Total de produit en rupture de stock' => $rupture,
            'Total de produit en faible de stock' => $faible
        ], 200);
    }
}
