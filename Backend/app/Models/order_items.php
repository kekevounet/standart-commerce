<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class order_items extends Model
{
    use HasUuids;
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'unit_price',
        'subtotal',
    ];
    public function order()
    {
        return $this->belongsTo(orders::class, 'order_id');
    }

    public function product()
    {
        return $this->belongsTo(Produit::class, 'product_id');
    }
}