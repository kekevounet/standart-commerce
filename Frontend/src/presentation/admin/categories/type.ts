export type CategorieType = 
{
    id: string,
    nom: string,
    slug: string,
    sous_categories: SousCategoriesType[],
}

export type SousCategoriesType = {
    id: string,
    nom: string,
    slug: string,
    intro: string,
    categorie_id: string,
    produits: ProduitsType[]
}

export type ProduitsType ={
    id: string,
    nom: string,
    intro: string,
    description: string,
    prix: number,
    quantite: number,
    image: string,
    sous_categorie_id: string,
    // sous_categories: SousCategoriesType
}