<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ProduitRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:100'
            ],
            'introduction' => [
                'required',
                'string',
                'max:1000'
            ],
            'description' => [
                'required',
                'string',
                'max:1000'
            ],
            'price' => [
                'required',
                'integer',
                'min:0',
            ],
            'stock_quantity' => [
                'required',
                'integer',
                'min:0'
            ],
            'image' => [
                'nullable',
                'image',
                'max:5120'
            ],
            'status' => [
                'required',
                'in:active,inactive'
            ],
            'sous_categorie_id' => [
                'required',
                'exists:sous_categories,id'
            ]
        ];
    }
}
