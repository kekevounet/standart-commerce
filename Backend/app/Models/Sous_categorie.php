<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Sous_categorie extends Model
{
    use HasUlids;
    protected $fillable = [
        'name',
        'slug',
        'introduction',
        'categorie_id'
    ];
    public static function boot()
    {
        parent::boot();
        static::creating(function($sous_categorie)
        {
            $sous_categorie->slug = Str::slug($sous_categorie->name);
        });
        static::updating(function($sous_categorie)
        {
            if($sous_categorie->isDirty('name'))
            {
                $sous_categorie->slug = Str::slug($sous_categorie->name);
            }
        });
    }
    public function categorie() :BelongsTo
    {
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }
    public function produit() :HasMany
    {
        return $this->hasMany(Produit::class, 'sous_categorie_id');
    }
}
