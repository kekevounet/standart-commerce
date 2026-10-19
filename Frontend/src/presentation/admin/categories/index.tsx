import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  FiAlertCircle,
  FiArrowRight,
  FiChevronDown,
  FiChevronRight,
  FiEdit3,
  FiFolder,
  FiGrid,
  FiLayers,
  FiMoreVertical,
  FiPlus,
  FiRefreshCw,
  FiSearch,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import ApiCategories from "../../../service/ApiCategories";
import type { CategorieType, SousCategoriesType } from "./type";

type NewSubcategory = {
  nom: string;
  intro: string;
};

export default function Categorie() {
  const [categories, setCategories] = useState<CategorieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingSubcategory, setSavingSubcategory] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const [openCategories, setOpenCategories] = useState<string[]>([]);

  /**
   * Catégorie dans laquelle le formulaire d'ajout
   * de sous-catégorie est actuellement ouvert.
   */
  const [addingSubcategoryTo, setAddingSubcategoryTo] =
    useState<string | null>(null);

  /**
   * Données du formulaire.
   */
  const [newSubcategory, setNewSubcategory] =
    useState<NewSubcategory>({
      nom: "",
      intro: "",
    });

  /**
   * ============================================================
   * CHARGER LES CATÉGORIES
   * ============================================================
   */
  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await ApiCategories.getAll();

      setCategories(data ?? []);
    } catch (err) {
      console.error(
        "Erreur lors du chargement des catégories :",
        err
      );

      setError(
        "Impossible de charger les catégories. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  /**
   * ============================================================
   * RECHERCHE
   * ============================================================
   */
  const filteredCategories = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return categories;
    }

    return categories.filter((category) => {
      const categoryMatch =
        category.nom.toLowerCase().includes(value) ||
        category.slug.toLowerCase().includes(value);

      const subcategoryMatch =
        category.sous_categories?.some(
          (subcategory) =>
            subcategory.nom.toLowerCase().includes(value) ||
            subcategory.intro.toLowerCase().includes(value)
        ) ?? false;

      return categoryMatch || subcategoryMatch;
    });
  }, [categories, search]);

  /**
   * ============================================================
   * STATISTIQUES
   * ============================================================
   */
  const statistics = useMemo(() => {
    const totalSubcategories = categories.reduce(
      (total, category) =>
        total + (category.sous_categories?.length ?? 0),
      0
    );

    const totalProducts = categories.reduce(
      (total, category) =>
        total +
        (category.sous_categories ?? []).reduce(
          (subtotal, subcategory) =>
            subtotal + (subcategory.produits?.length ?? 0),
          0
        ),
      0
    );

    const emptyCategories = categories.filter(
      (category) =>
        !category.sous_categories ||
        category.sous_categories.length === 0
    ).length;

    return {
      categories: categories.length,
      subcategories: totalSubcategories,
      products: totalProducts,
      emptyCategories,
    };
  }, [categories]);

  /**
   * ============================================================
   * OUVRIR / FERMER UNE CATÉGORIE
   * ============================================================
   */
  const toggleCategory = (id: string) => {
    setOpenCategories((previous) =>
      previous.includes(id)
        ? previous.filter((categoryId) => categoryId !== id)
        : [...previous, id]
    );
  };

  const isCategoryOpen = (id: string) => {
    return openCategories.includes(id);
  };

  /**
   * ============================================================
   * OUVRIR LE FORMULAIRE SOUS-CATÉGORIE
   * ============================================================
   */
  const openAddSubcategory = (categoryId: string) => {
    setAddingSubcategoryTo(categoryId);

    setNewSubcategory({
      nom: "",
      intro: "",
    });

    /**
     * On ouvre automatiquement la catégorie.
     */
    if (!openCategories.includes(categoryId)) {
      setOpenCategories((previous) => [
        ...previous,
        categoryId,
      ]);
    }
  };

  /**
   * ============================================================
   * FERMER LE FORMULAIRE
   * ============================================================
   */
  const closeAddSubcategory = () => {
    setAddingSubcategoryTo(null);

    setNewSubcategory({
      nom: "",
      intro: "",
    });
  };

  /**
   * ============================================================
   * AJOUTER UNE SOUS-CATÉGORIE
   * ============================================================
   */
  const handleAddSubcategory = async (
    event: FormEvent<HTMLFormElement>,
    categoryId: string
  ) => {
    event.preventDefault();

    const nom = newSubcategory.nom.trim();
    const intro = newSubcategory.intro.trim();

    if (!nom || !intro) {
      return;
    }

    try {
      setSavingSubcategory(true);

      /**
       * ========================================================
       * IMPORTANT
       * ========================================================
       *
       * Ici tu dois appeler ta méthode API réelle.
       *
       * Exemple :
       *
       * const created =
       *   await ApiCategories.createSubcategory({
       *     nom,
       *     intro,
       *     categorie_id: categoryId,
       *   });
       *
       * Comme ApiCategories n'est pas fourni dans le fichier,
       * je ne peux pas inventer son nom de méthode.
       */

      const createdSubcategory: SousCategoriesType = {
        id: crypto.randomUUID(),
        nom,
        slug: nom
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, ""),
        intro,
        categorie_id: categoryId,
        produits: [],
      };

      /**
       * Mise à jour locale de l'affichage.
       *
       * Lorsque ton API est branchée, remplace simplement
       * createdSubcategory par la réponse de ton API.
       */
      setCategories((previous) =>
        previous.map((category) =>
          category.id === categoryId
            ? {
                ...category,
                sous_categories: [
                  ...(category.sous_categories ?? []),
                  createdSubcategory,
                ],
              }
            : category
        )
      );

      closeAddSubcategory();
    } catch (err) {
      console.error(
        "Erreur lors de l'ajout de la sous-catégorie :",
        err
      );

      setError(
        "Impossible d'ajouter la sous-catégorie."
      );
    } finally {
      setSavingSubcategory(false);
    }
  };

  /**
   * ============================================================
   * COULEURS
   * ============================================================
   */
  const colorStyles = [
    {
      icon: "bg-orange-50 text-orange-600",
      badge: "bg-orange-50 text-orange-700",
      border: "hover:border-orange-200",
    },
    {
      icon: "bg-blue-50 text-blue-600",
      badge: "bg-blue-50 text-blue-700",
      border: "hover:border-blue-200",
    },
    {
      icon: "bg-purple-50 text-purple-600",
      badge: "bg-purple-50 text-purple-700",
      border: "hover:border-purple-200",
    },
    {
      icon: "bg-emerald-50 text-emerald-600",
      badge: "bg-emerald-50 text-emerald-700",
      border: "hover:border-emerald-200",
    },
    {
      icon: "bg-rose-50 text-rose-600",
      badge: "bg-rose-50 text-rose-700",
      border: "hover:border-rose-200",
    },
    {
      icon: "bg-indigo-50 text-indigo-600",
      badge: "bg-indigo-50 text-indigo-700",
      border: "hover:border-indigo-200",
    },
  ];

  /**
   * ============================================================
   * LOADING
   * ============================================================
   */
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-80 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="h-11 w-52 animate-pulse rounded-xl bg-gray-200" />
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-32 animate-pulse rounded-2xl border border-gray-200 bg-white"
              />
            ))}
          </div>

          <div className="mb-6 h-16 animate-pulse rounded-2xl border border-gray-200 bg-white" />

          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-44 animate-pulse rounded-2xl border border-gray-200 bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /**
   * ============================================================
   * PAGE
   * ============================================================
   */
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* ======================================================
            HEADER
        ======================================================= */}
        <header className="mb-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
                  Catalogue
                </span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                Catégories
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                Gérez vos catégories, vos sous-catégories et
                l'organisation de vos produits.
              </p>
            </div>

            <Link
              to="/admin/categories/ajouter"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
            >
              <FiPlus size={18} />
              Ajouter une catégorie
            </Link>
          </div>
        </header>

        {/* ======================================================
            ERROR
        ======================================================= */}
        {error && (
          <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-red-200 bg-red-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-red-600">
                <FiAlertCircle size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-red-800">
                  Une erreur est survenue
                </p>

                <p className="mt-1 text-xs text-red-600">
                  {error}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={fetchCategories}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-white px-3 text-xs font-semibold text-red-700 shadow-sm ring-1 ring-red-200 hover:bg-red-100"
            >
              <FiRefreshCw size={14} />
              Réessayer
            </button>
          </div>
        )}

        {/* ======================================================
            STATISTIQUES
        ======================================================= */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Catégories
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-950">
                  {statistics.categories}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <FiGrid size={19} />
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Catégories disponibles
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Sous-catégories
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-950">
                  {statistics.subcategories}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiLayers size={19} />
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Réparties dans vos catégories
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Produits classés
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-950">
                  {statistics.products}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <FiFolder size={19} />
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Produits associés
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Catégories vides
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-950">
                  {statistics.emptyCategories}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <FiFolder size={19} />
              </div>
            </div>

            <p className="mt-4 text-xs text-amber-600">
              {statistics.emptyCategories > 0
                ? "À compléter"
                : "Tout est organisé"}
            </p>
          </div>
        </section>

        {/* ======================================================
            RECHERCHE
        ======================================================= */}
        <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
          <div className="relative">
            <FiSearch
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher une catégorie ou une sous-catégorie..."
              className="h-11 w-full rounded-xl border border-transparent bg-gray-50 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:bg-gray-100 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-50"
            />
          </div>
        </section>

        {/* ======================================================
            RESULT COUNT
        ======================================================= */}
        <div className="mb-4 flex items-center justify-between px-1">
          <p className="text-sm font-semibold text-gray-900">
            {filteredCategories.length}{" "}
            {filteredCategories.length > 1
              ? "catégories"
              : "catégorie"}
          </p>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-xs font-semibold text-orange-600 hover:text-orange-700"
            >
              Effacer
            </button>
          )}
        </div>

        {/* ======================================================
            EMPTY
        ======================================================= */}
        {filteredCategories.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
              <FiSearch size={22} />
            </div>

            <h2 className="mt-4 text-sm font-bold text-gray-900">
              Aucune catégorie trouvée
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Aucun résultat ne correspond à votre recherche.
            </p>
          </div>
        )}

        {/* ======================================================
            CATEGORIES
        ======================================================= */}
        <div className="space-y-4">
          {filteredCategories.map((category, index) => {
            const colors =
              colorStyles[index % colorStyles.length];

            const subcategories =
              category.sous_categories ?? [];

            const opened = isCategoryOpen(category.id);

            const productCount = subcategories.reduce(
              (total, subcategory) =>
                total + (subcategory.produits?.length ?? 0),
              0
            );

            const isAdding =
              addingSubcategoryTo === category.id;

            return (
              <article
                key={category.id}
                className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md ${colors.border}`}
              >

                {/* ==================================================
                    CATEGORY HEADER
                =================================================== */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex min-w-0 items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
                      >
                        <FiFolder size={21} />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-base font-bold text-gray-950">
                            {category.nom}
                          </h2>

                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${colors.badge}`}
                          >
                            {productCount}{" "}
                            {productCount > 1
                              ? "produits"
                              : "produit"}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-gray-400">
                          /{category.slug}
                        </p>

                        <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                          <span className="inline-flex items-center gap-1.5">
                            <FiLayers size={13} />

                            {subcategories.length}{" "}
                            {subcategories.length > 1
                              ? "sous-catégories"
                              : "sous-catégorie"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-1 self-end lg:self-auto">
                      <Link
                        to={`/admin/categories/modifier/${category.id}`}
                        title="Modifier"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <FiEdit3 size={16} />
                      </Link>

                      <button
                        type="button"
                        title="Supprimer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                      >
                        <FiTrash2 size={16} />
                      </button>

                      <button
                        type="button"
                        title="Plus d'options"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                      >
                        <FiMoreVertical size={17} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    SUBCATEGORY BAR
                =================================================== */}
                <div className="border-t border-gray-100 bg-gray-50/60">

                  <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                    <button
                      type="button"
                      onClick={() =>
                        toggleCategory(category.id)
                      }
                      className="flex items-center gap-3 text-left"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-500 shadow-sm">
                        <FiLayers size={15} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                            Sous-catégories
                          </span>

                          <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-bold text-gray-600">
                            {subcategories.length}
                          </span>
                        </div>

                        <p className="mt-0.5 text-[11px] text-gray-400">
                          Gérez les sous-catégories de cette catégorie
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        isAdding
                          ? closeAddSubcategory()
                          : openAddSubcategory(category.id)
                      }
                      className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold transition ${
                        isAdding
                          ? "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100"
                          : "bg-gray-950 text-white hover:bg-gray-800"
                      }`}
                    >
                      {isAdding ? (
                        <>
                          <FiX size={14} />
                          Annuler
                        </>
                      ) : (
                        <>
                          <FiPlus size={14} />
                          Ajouter une sous-catégorie
                        </>
                      )}
                    </button>
                  </div>

                  {/* =================================================
                      FORMULAIRE AJOUT SOUS-CATEGORIE
                  ================================================== */}
                  {isAdding && (
                    <div className="border-t border-gray-200 bg-white px-5 py-5 sm:px-6">
                      <form
                        onSubmit={(event) =>
                          handleAddSubcategory(
                            event,
                            category.id
                          )
                        }
                        className="rounded-xl border border-orange-100 bg-orange-50/40 p-4 sm:p-5"
                      >
                        <div className="mb-5">
                          <p className="text-sm font-bold text-gray-900">
                            Nouvelle sous-catégorie
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            Elle sera ajoutée à la catégorie{" "}
                            <span className="font-semibold text-gray-700">
                              {category.nom}
                            </span>
                            .
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                          {/* NOM */}
                          <div>
                            <label
                              htmlFor={`subcategory-name-${category.id}`}
                              className="mb-2 block text-xs font-semibold text-gray-700"
                            >
                              Nom
                              <span className="ml-1 text-red-500">
                                *
                              </span>
                            </label>

                            <input
                              id={`subcategory-name-${category.id}`}
                              type="text"
                              value={newSubcategory.nom}
                              onChange={(event) =>
                                setNewSubcategory(
                                  (previous) => ({
                                    ...previous,
                                    nom: event.target.value,
                                  })
                                )
                              }
                              placeholder="Ex : Ampoules LED"
                              required
                              disabled={savingSubcategory}
                              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-50 disabled:cursor-not-allowed disabled:opacity-60"
                            />
                          </div>

                          {/* INTRO */}
                          <div>
                            <label
                              htmlFor={`subcategory-intro-${category.id}`}
                              className="mb-2 block text-xs font-semibold text-gray-700"
                            >
                              Introduction
                              <span className="ml-1 text-red-500">
                                *
                              </span>
                            </label>

                            <input
                              id={`subcategory-intro-${category.id}`}
                              type="text"
                              value={newSubcategory.intro}
                              onChange={(event) =>
                                setNewSubcategory(
                                  (previous) => ({
                                    ...previous,
                                    intro: event.target.value,
                                  })
                                )
                              }
                              placeholder="Ex : Découvrez notre gamme LED"
                              required
                              disabled={savingSubcategory}
                              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-50 disabled:cursor-not-allowed disabled:opacity-60"
                            />
                          </div>
                        </div>

                        <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                          <button
                            type="button"
                            onClick={closeAddSubcategory}
                            disabled={savingSubcategory}
                            className="h-10 rounded-lg px-4 text-xs font-semibold text-gray-600 transition hover:bg-gray-100 disabled:opacity-50"
                          >
                            Annuler
                          </button>

                          <button
                            type="submit"
                            disabled={
                              savingSubcategory ||
                              !newSubcategory.nom.trim() ||
                              !newSubcategory.intro.trim()
                            }
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 text-xs font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {savingSubcategory ? (
                              <>
                                <FiRefreshCw
                                  size={14}
                                  className="animate-spin"
                                />
                                Ajout...
                              </>
                            ) : (
                              <>
                                <FiPlus size={14} />
                                Ajouter
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* =================================================
                      LISTE SOUS-CATEGORIES
                  ================================================== */}
                  {opened && (
                    <div className="border-t border-gray-100 p-5 sm:p-6">

                      {subcategories.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-gray-200 bg-white px-5 py-10 text-center">
                          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                            <FiLayers size={18} />
                          </div>

                          <p className="mt-3 text-sm font-semibold text-gray-700">
                            Aucune sous-catégorie
                          </p>

                          <p className="mt-1 text-xs text-gray-400">
                            Utilisez le bouton ci-dessus pour en
                            ajouter une.
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              openAddSubcategory(category.id)
                            }
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700"
                          >
                            <FiPlus size={14} />
                            Ajouter maintenant
                          </button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                          {subcategories.map(
                            (subcategory, subIndex) => {
                              const subProductCount =
                                subcategory.produits?.length ?? 0;

                              return (
                                <div
                                  key={subcategory.id}
                                  className="group rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-sm"
                                >
                                  <div className="flex items-start gap-3">

                                    <div
                                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colors.icon}`}
                                    >
                                      <span className="text-xs font-bold">
                                        {subIndex + 1}
                                      </span>
                                    </div>

                                    <div className="min-w-0 flex-1">

                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="truncate text-sm font-semibold text-gray-900">
                                            {subcategory.nom}
                                          </h3>

                                          <p className="mt-0.5 truncate text-[10px] text-gray-400">
                                            /{subcategory.slug}
                                          </p>
                                        </div>

                                        <FiChevronRight
                                          size={15}
                                          className="mt-0.5 shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-orange-500"
                                        />
                                      </div>

                                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-400">
                                        {subcategory.intro ||
                                          "Aucune description disponible."}
                                      </p>

                                      <div className="mt-3 flex items-center justify-between">
                                        <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-500">
                                          {subProductCount}{" "}
                                          {subProductCount > 1
                                            ? "produits"
                                            : "produit"}
                                        </span>

                                        <button
                                          type="button"
                                          className="text-gray-300 transition hover:text-red-500"
                                          title="Supprimer"
                                        >
                                          <FiTrash2 size={14} />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* ==================================================
                    FOOTER
                =================================================== */}
                <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3.5 sm:px-6">
                  <span className="text-[11px] text-gray-400">
                    ID : {category.id}
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 transition hover:text-orange-600"
                  >
                    Voir les produits
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}