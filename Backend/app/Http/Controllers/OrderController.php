<?php

namespace App\Http\Controllers;

use App\Models\order_items;
use App\Models\orders;
use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    // public function index()
    // {
    //     $orders = orders::with('items.product')->latest()->get(); 
    //     return response()->json([ 'orders' => $orders ]);
    // }

    public function getMyOrder(Request $request)
    {
        $order = orders::with('items.product')
            ->where('user_id', $request->user()->getKey())
            ->latest()
            ->get();
        return response()->json([
            "Message" => "Voici votre comme monsieur ",
            "COmmande" => $order->load('items.product')
        ], 200);
    }

    public function store(Request $request)
    {
       $data = $request->validate([
            "customer_name" => "required|string|max:55",
            "customer_email" => "required|string|max:55",
            "customer_phone" => "required|string|max:55",
            "shipping_address" => "required|string|max:55",
            
            "items" => "required|array|min:1",
            "items.*.product_id" => "required|uuid|exists:produits,id",
            "items.*.quantity" => "required|integer|min:1",
       ]);
       return DB::transaction(function() use ($data, $request)
       {
        $total = 0;
        $order = orders::create([
            "user_id" => $request->user()?->getKey(),
            "status" => "pending",
            "total" => 0,
            "customer_name" => $data['customer_name'],
            "customer_email" => $data['customer_email'],
            "customer_phone" => $data['customer_phone'],
            "shipping_address" => $data['shipping_address'],
        ]);
        foreach ($data['items'] as $item)
        {
            $produit = Produit::findOrFail($item['product_id']);
            if ($produit->stock_quantity < $item['quantity']) 
            {
                abort(422, "Erreur le stock est faible supérieur {$produit->stock}");
            }
            $price = $produit->price;
            $subtotal = $price * $item['quantity'];
            order_items::create([
                "order_id" => $order->id,
                "product_id" => $produit->id,
                "quantity" => $item['quantity'],
                "unit_price" => $price,
                "subtotal" => $subtotal,
            ]);
            $total = $total + $subtotal;
            $produit->decrement('stock_quantity', $item['quantity']);
        }
        $order->update(["total" => $total]);
        return response()->json([
            "Message" => "Commande bien envoyé",
            "Commande" => $order->load('items.product')
        ]);
       });
    }
    public function show(orders $orders)
    {
        $orders->load('items.product'); 
        return response()->json([ 'order' => $orders ]);
    }

    
    public function update(Request $request, orders $orders)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,confirmed,shipped,delivered,cancelled',
        ]);

        return DB::transaction(function () use ($validated, $orders) {

            $order = orders::whereKey($orders->getKey())
                ->lockForUpdate()
                ->firstOrFail();

            $newStatus = $validated['status'];
            $currentStatus = $order->status;

            if ($currentStatus === 'cancelled') {
                abort(422, 'Cette commande est déjà annulée.');
            }

            if (
                $newStatus === 'cancelled'
                && !in_array($currentStatus, ['pending', 'confirmed'])
            ) {
                abort(422, 'Cette commande ne peut plus être annulée.');
            }

            if ($newStatus === 'cancelled') {

                $items = order_items::where('order_id', $order->id)
                    ->get();

                foreach ($items as $item) {

                    $produit = Produit::whereKey($item->product_id)
                        ->lockForUpdate()
                        ->firstOrFail();

                    $produit->increment(
                        'stock_quantity',
                        $item->quantity
                    );
                }
            }
            $order->update([
                'status' => $newStatus,
            ]);

            return response()->json([
                'message' => $newStatus === 'cancelled'
                    ? 'Commande annulée et stock restauré.'
                    : 'Statut de la commande mis à jour.',
                'order' => $order->load('items.product'),
            ]);
        });
    }


    public function destroy(orders $orders)
    {
        $orders->delete(); 
        return response()->json([ 'message' => 'Commande supprimée avec succès' ]);
    }
}


