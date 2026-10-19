<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class Sous_categorieRequest extends FormRequest
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
            'categorie_id' => [
                'required',
                'uuid',
                'exists:categories,id'
            ]
        ];
    }
}
