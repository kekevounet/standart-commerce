<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Categorie extends Model
{
    use HasUuids;
    protected $fillable = [
        "name",
        "slug",
        "introduction",
    ];
    protected static function boot()
    {
        parent::boot();
        static::creating(function($categorie)
        {
            $categorie->slug = Str::slug($categorie->name);
        });
        static::updating(function($categorie)
        {
            if($categorie->isDirty('name'))
            {
                $categorie->slug = Str::slug($categorie->name);
            }
        });
    }
    public function sous_categorie() :HasMany
    {
        return $this->hasMany(Sous_categorie::class, 'categorie_id');
    }
}
