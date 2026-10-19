import { useState } from "react";
import {
  FiArrowLeft,
  FiPlus,
  FiTrash2,
  FiSave,
  FiFolder,
  FiLayers,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import ApiCategories from "../../../service/ApiCategories";
import ApiSousCategories from "../../../service/ApiSousCategories";
import { toast } from "react-toastify";

export type SousCategorieForm = {
  id: number;
  nom: string;
  intro: string;
};

export default function AddCategorie() {
  const navigate = useNavigate();

  const [nom, setNom] = useState("");

  const [sousCategories, setSousCategories] = useState<
    SousCategorieForm[]
  >([]);

  const [loading, setLoading] = useState(false);

  const ajouterSousCategorie = () => {
    const nouvelleSousCategorie: SousCategorieForm = {
      id: Date.now(),
      nom: "",
      intro: "",
    };

    setSousCategories((prev) => [
      ...prev,
      nouvelleSousCategorie,
    ]);
  };


  const supprimerSousCategorie = (id: number) => {
    setSousCategories((prev) =>
      prev.filter(
        (sousCategorie) => sousCategorie.id !== id
      )
    );
  };

  const modifierSousCategorie = (
    id: number,
    field: "nom" | "intro",
    value: string
  ) => {
    setSousCategories((prev) =>
      prev.map((sousCategorie) =>
        sousCategorie.id === id
          ? {
              ...sousCategorie,
              [field]: value,
            }
          : sousCategorie
      )
    );
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!nom.trim()) {
      toast.error(
        "Le nom de la catégorie est obligatoire."
      );
      return;
    }
    for (const sousCategorie of sousCategories) {
      if (!sousCategorie.nom.trim()) {
        toast.error(
          "Le nom de toutes les sous-catégories est obligatoire."
        );
        return;
      }

      if (!sousCategorie.intro.trim()) {
        toast.error(
          "L'introduction de toutes les sous-catégories est obligatoire."
        );
        return;
      }
    }

    try {
      setLoading(true);
      const categorieData = new FormData();

      categorieData.append(
        "nom",
        nom.trim()
      );

      const categorie = await ApiCategories.create(
        categorieData
      );

      console.log(
        "Catégorie créée :",
        categorie
      );

      const categorieId = categorie.id;

      if (!categorieId) {
        throw new Error(
          "L'ID de la catégorie créée est introuvable."
        );
      }

      for (const sousCategorie of sousCategories) {
        const sousCategorieData = new FormData();

        sousCategorieData.append(
          "nom",
          sousCategorie.nom.trim()
        );

        sousCategorieData.append(
          "intro",
          sousCategorie.intro.trim()
        );

        sousCategorieData.append(
          "categorie_id",
          String(categorieId)
        );

        const result =
          await ApiSousCategories.create(
            sousCategorieData
          );

        console.log(
          "Sous-catégorie créée :",
          result
        );
      }

      toast.success(
        "Opération réussie"
      );

      setNom("");
      setSousCategories([]);

      navigate("/admin/categories");
    } catch (error) {
      console.error(
        "Erreur lors de l'enregistrement :",
        error
      );

      toast.error(
        "Une erreur est survenue lors de l'enregistrement."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      <div className="mb-8">

        <Link
          to="/admin/categories"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          <FiArrowLeft size={16} />
          Retour aux catégories
        </Link>

        <div>

          <p className="mb-1 text-sm font-medium text-orange-500">
            Catalogue
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Ajouter une catégorie
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Créez une nouvelle catégorie et
            organisez ses sous-catégories.
          </p>

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-5xl"
      >

        <section className="mb-6 rounded-2xl border border-gray-200 bg-white">

          <div className="border-b border-gray-100 px-6 py-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <FiFolder size={19} />
              </div>

              <div>

                <h2 className="font-bold text-gray-950">
                  Informations générales
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Définissez les informations principales
                  de la catégorie.
                </p>

              </div>

            </div>

          </div>

          <div className="p-6">

            <div className="max-w-2xl">

              <label
                htmlFor="nom"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Nom de la catégorie
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                id="nom"
                name="nom"
                type="text"
                value={nom}
                onChange={(e) =>
                  setNom(e.target.value)
                }
                placeholder="Ex : Boutique d'éclairage"
                required
                disabled={loading}
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
              />

              <p className="mt-2 text-xs text-gray-400">
                Le nom de la catégorie est obligatoire.
              </p>

            </div>

          </div>

        </section>

        <section className="rounded-2xl border border-gray-200 bg-white">

          <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiLayers size={19} />
              </div>

              <div>

                <h2 className="font-bold text-gray-950">
                  Sous-catégories
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Ajoutez les sous-catégories associées.
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={ajouterSousCategorie}
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiPlus size={16} />
              Ajouter une sous-catégorie
            </button>

          </div>

          <div className="space-y-4 p-6">

            {sousCategories.map(
              (sousCategorie, index) => (

                <div
                  key={sousCategorie.id}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                >

                  {/* HEADER */}

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold text-gray-500 shadow-sm">
                        {index + 1}
                      </div>

                      <div>

                        <p className="text-sm font-bold text-gray-800">
                          Sous-catégorie{" "}
                          {index + 1}
                        </p>

                        <p className="text-[11px] text-gray-400">
                          Informations de la
                          sous-catégorie
                        </p>

                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        supprimerSousCategorie(
                          sousCategorie.id
                        )
                      }
                      disabled={loading}
                      className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                      title="Supprimer"
                    >
                      <FiTrash2 size={16} />
                    </button>

                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    {/* NOM */}

                    <div>

                      <label
                        htmlFor={`sous-nom-${sousCategorie.id}`}
                        className="mb-2 block text-xs font-semibold text-gray-700"
                      >
                        Nom
                        <span className="ml-1 text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        id={`sous-nom-${sousCategorie.id}`}
                        type="text"
                        value={sousCategorie.nom}
                        onChange={(e) =>
                          modifierSousCategorie(
                            sousCategorie.id,
                            "nom",
                            e.target.value
                          )
                        }
                        placeholder="Ex : Ampoule"
                        required
                        disabled={loading}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                      />

                    </div>

                    {/* INTRO */}

                    <div>

                      <label
                        htmlFor={`sous-intro-${sousCategorie.id}`}
                        className="mb-2 block text-xs font-semibold text-gray-700"
                      >
                        Introduction
                        <span className="ml-1 text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        id={`sous-intro-${sousCategorie.id}`}
                        type="text"
                        value={sousCategorie.intro}
                        onChange={(e) =>
                          modifierSousCategorie(
                            sousCategorie.id,
                            "intro",
                            e.target.value
                          )
                        }
                        placeholder="Ex : Découvrez notre gamme d'ampoules"
                        required
                        disabled={loading}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                      />

                    </div>

                  </div>

                </div>

              )
            )}

            {sousCategories.length === 0 && (

              <div className="rounded-2xl border-2 border-dashed border-gray-200 px-6 py-10 text-center">

                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                  <FiLayers size={20} />
                </div>

                <p className="text-sm font-semibold text-gray-700">
                  Aucune sous-catégorie
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Ajoutez une sous-catégorie pour
                  organiser vos produits.
                </p>

                <button
                  type="button"
                  onClick={ajouterSousCategorie}
                  disabled={loading}
                  className="mt-4 text-xs font-semibold text-orange-600 hover:text-orange-700 disabled:opacity-50"
                >
                  + Ajouter une sous-catégorie
                </button>

              </div>

            )}

          </div>

        </section>

        <div className="mt-6 flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">

          <Link
            to="/admin/categories"
            className="flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            Annuler
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >

            <FiSave size={17} />

            {loading
              ? "Enregistrement..."
              : "Enregistrer la catégorie"}

          </button>

        </div>

      </form>

    </div>
  );
}
