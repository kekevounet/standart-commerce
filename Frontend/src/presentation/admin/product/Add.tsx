import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiUploadCloud,
  FiImage,
  FiX,
  FiSave,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import type {  SousCategoriesType } from "./type";
import axios from "axios";

export default function AddProduit() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    nom: "",
    intro: '',
    description: "",
    prix: '',
    quantite: "",
    sous_categorie_id: "",
  });
  const [sousCategorie, setSousCategorie] = useState<SousCategoriesType []>([]);
  const fetchSousCategorie = async() =>
  {
    const res = await axios.get('http://127.0.0.1:8000/api/sous_categories');
    setSousCategorie(res.data)
  }

  const handleChange = (e: { target: { name: any; value: any; }; }) =>
  {
    const {name, value} = e.target;
    setFormData((prev) => 
    (
      {...prev, [name]: value}
    ))
  }

 const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setImage(file);
    setImageName(file.name);
    setImagePreview(URL.createObjectURL(file));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const data = new FormData();

    data.append("nom", formData.nom);
    data.append("intro", formData.intro);
    data.append("description", formData.description);
    data.append("prix", formData.prix);
    data.append("quantite", formData.quantite);
    data.append("sous_categorie_id", formData.sous_categorie_id);

    if (image) {
      data.append("image", image);
    }

    const res = await axios.post(
      "http://127.0.0.1:8000/api/produits",
      data
    );

    console.log(res.data);
    alert("Ajout succès");

  } catch (error: any) {
    console.error("Erreur complète :", error);

    if (error.response) {
      console.log("Status :", error.response.status);
      console.log("Laravel :", error.response.data);

      console.log("Erreurs validation :", error.response.data.errors);
    }
  }
};



  const removeImage = () => {
    setImagePreview(null);
    setImageName("");
  };
  useEffect(() =>
  {
    fetchSousCategorie();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      <div className="mb-8">

        <Link
          to="/admin/produits"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          <FiArrowLeft size={16} />
          Retour aux produits
        </Link>

        <div>
          <p className="mb-1 text-sm font-medium text-orange-500">
            Catalogue
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Ajouter un produit
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Créez un nouveau produit pour votre boutique.
          </p>
        </div>

      </div>

      <form className="grid grid-cols-1 gap-6 xl:grid-cols-3" onSubmit={handleSubmit}>

        <div className="space-y-6 xl:col-span-2">

          {/* Informations générales */}

          <section className="rounded-2xl border border-gray-200 bg-white">

            <div className="border-b border-gray-100 px-6 py-5">
              <h2 className="font-bold text-gray-950">
                Informations générales
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Les informations principales de votre produit.
              </p>
            </div>


            <div className="space-y-5 p-6">

              {/* Nom */}

              <div>

                <label
                  htmlFor="nom"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Nom du produit
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  id="nom"
                  name="nom"
                  type="text"
                  onChange={handleChange}
                  value={formData.nom}
                  placeholder="Ex : Lampe moderne"
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                />

              </div>


              {/* Intro */}

              <div>

                <label
                  htmlFor="intro"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Introduction
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  id="intro"
                  name="intro"
                  type="text"
                  onChange={handleChange}
                  value={formData.intro}
                  placeholder="Une courte présentation du produit"
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                />

                <p className="mt-1.5 text-xs text-gray-400">
                  Courte phrase affichée dans les listes de produits.
                </p>

              </div>


              {/* Description */}

              <div>

                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Description
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  rows={7}
                  value={formData.description}
                  placeholder="Décrivez votre produit en détail..."
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                />

                <p className="mt-1.5 text-xs text-gray-400">
                  Présentez les caractéristiques, matériaux, dimensions,
                  utilisation, etc.
                </p>

              </div>

            </div>

          </section>


          {/* Prix & stock */}

          <section className="rounded-2xl border border-gray-200 bg-white">

            <div className="border-b border-gray-100 px-6 py-5">

              <h2 className="font-bold text-gray-950">
                Prix et stock
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Définissez le prix et la disponibilité du produit.
              </p>

            </div>


            <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2">

              {/* Prix */}

              <div>

                <label
                  htmlFor="prix"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Prix
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">

                  <input
                    id="prix"
                    value={formData.prix}
                    name="prix"
                    onChange={handleChange}
                    type="number"
                    min="0"
                    step="0"
                    placeholder="0"
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400">
                    Ar
                  </span>

                </div>

              </div>


              {/* Quantité */}

              <div>

                <label
                  htmlFor="quantite"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Quantité en stock
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  id="quantite"
                  name="quantite"
                  type="number"
                  onChange={handleChange}
                  min="0"
                  placeholder="0"
                  value={formData.quantite}
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                />

              </div>

            </div>

          </section>


          {/* Catégorie */}

          <section className="rounded-2xl border border-gray-200 bg-white">

            <div className="border-b border-gray-100 px-6 py-5">

              <h2 className="font-bold text-gray-950">
                Catégorisation
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Organisez votre produit dans la bonne catégorie.
              </p>

            </div>


            <div className="p-6">

              <label
                htmlFor="sous_categorie_id"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Sous-catégorie
                <span className="ml-1 text-red-500">*</span>
              </label>

              <select
                id="sous_categorie_id"
                name="sous_categorie_id"
                required
                onChange={handleChange}
                value={formData.sous_categorie_id}
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
              >
                <option value="">
                  Sélectionnez une sous-catégorie
                </option>

                {sousCategorie.map((sc)=>
                (
                  <option value={sc.id}>{sc.nom}</option>
                ))}

              </select>

            </div>

          </section>

        </div>

        {/* RIGHT - IMAGE */}

        <div className="space-y-6">

          {/* Image */}

          <section className="rounded-2xl border border-gray-200 bg-white">

            <div className="border-b border-gray-100 px-6 py-5">

              <h2 className="font-bold text-gray-950">
                Image du produit
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Ajoutez une image principale.
              </p>

            </div>


            <div className="p-6">

              {!imagePreview ? (

                <label
                  htmlFor="image"
                  className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-6 py-12 text-center transition hover:border-orange-400 hover:bg-orange-50/30"
                >

                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm transition group-hover:text-orange-500">
                    <FiUploadCloud size={25} />
                  </div>

                  <p className="text-sm font-semibold text-gray-800">
                    Cliquez pour télécharger
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    PNG, JPG ou WEBP
                  </p>

                  <p className="mt-3 text-[11px] text-gray-400">
                    Taille maximale : 5 MB
                  </p>

                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                </label>

              ) : (

                <div>

                  <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">

                    <img
                      src={imagePreview}
                      alt="Aperçu du produit"
                      className="aspect-square w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:bg-red-50 hover:text-red-600"
                    >
                      <FiX size={17} />
                    </button>

                  </div>


                  <div className="mt-3 flex items-center gap-3 rounded-xl bg-gray-50 p-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-gray-400">
                      <FiImage size={17} />
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-xs font-semibold text-gray-700">
                        {imageName}
                      </p>

                      <p className="mt-0.5 text-[11px] text-emerald-600">
                        Image sélectionnée
                      </p>

                    </div>

                  </div>

                </div>

              )}

            </div>

          </section>


          {/* Conseils */}

          <section className="rounded-2xl border border-orange-100 bg-orange-50 p-5">

            <h3 className="text-sm font-bold text-orange-900">
              Conseils pour votre produit
            </h3>

            <ul className="mt-3 space-y-2 text-xs leading-5 text-orange-800">

              <li>
                • Utilisez une image claire et de bonne qualité.
              </li>

              <li>
                • Privilégiez un arrière-plan simple.
              </li>

              <li>
                • Ajoutez une description détaillée.
              </li>

              <li>
                • Vérifiez le stock avant de publier.
              </li>

            </ul>

          </section>

        </div>


        {/* ================================================= */}
        {/* ACTIONS */}
        {/* ================================================= */}

        <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end xl:col-span-3">

          <Link
            to="/admin/produits"
            className="flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            Annuler
          </Link>

          <button
            type="submit"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
          >
            <FiSave size={17} />
            Enregistrer le produit
          </button>

        </div>

      </form>

    </div>
  );
}