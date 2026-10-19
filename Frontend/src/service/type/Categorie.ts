export type Produit = {
    id: string;
    name: string;
    slug: string;
    introduction: string;
    description: string;
    price: number;
    stock_quantity: number;
    image: string | null;
    status: string;
    sous_categorie_id: string;
    created_at: string;
    updated_at: string;
};

export type SousCategorie = {
    id: string;
    name: string;
    slug: string;
    introduction: string;
    categorie_id: string;
    created_at: string;
    updated_at: string;
    produit: Produit[];
};

export type Categorie = {
    id: string;
    name: string;
    slug: string;
    introduction: string;
    created_at: string;
    updated_at: string;
    sous_categorie: SousCategorie[];
};