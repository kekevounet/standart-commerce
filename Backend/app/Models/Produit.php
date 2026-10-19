<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Produit extends Model
{
    use HasUuids;
    protected $fillable = [
        'name',
        'slug',
        'introduction',
        'description',
        'price',
        'stock_quantity',
        'image',
        'status',
        'sous_categorie_id'
    ];
    public static function boot(){
        parent::boot();
        static::creating(function($produit)
        {
            $produit->slug = Str::slug($produit->name);
        });
        static::updating(function($produit){
            if($produit->isDirty('name'))
            {
                $produit->slug = Str::slug($produit->name);
            }
        });
    }
    public function sous_categorie() :BelongsTo
    {
        return $this->belongsTo(Sous_categorie::class, 'sous_categorie_id');
    }
}
