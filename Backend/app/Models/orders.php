<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class orders extends Model
{
    use HasUuids;
    protected $fillable = [
        'user_id',
        'status',
        'total',
        'customer_name',
        'customer_email',
        'customer_phone',
        'shipping_address',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(order_items::class, 'order_id');
    }
}