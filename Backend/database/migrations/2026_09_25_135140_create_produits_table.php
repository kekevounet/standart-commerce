<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('produits', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('introduction');
            $table->string('description');
            $table->integer('price');
            $table->integer('stock_quantity');
            $table->string('image')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->uuid('sous_categorie_id');
            $table->foreign('sous_categorie_id')
                ->references('id')
                ->on('sous_categories')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produits');
    }
};
