import { BiSearchAlt } from "react-icons/bi"; 
import {
  FiSearch,
  FiPlus,
  FiFilter,
  FiMoreVertical,
  FiEdit3,
  FiTrash2,
  FiEye,
  FiPackage,
  FiAlertTriangle,
  FiCheckCircle,
  FiXCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ProduitsType } from "./type";
import ApiProduit from "../../../service/ApiProduits";
import ModalSuppression from "../../components/modalSuppression";
import { toast } from "react-toastify";
import ApiSousCategories from "../../../service/ApiSousCategories";
import type { SousCategoriesType } from "./type";

export default function Produit() 
{
  const [modalDelete, setModalDelete] = useState(false);
  const [selected, setSelected] = useState<ProduitsType | null>(null);
  const [produits, setProduits] = useState<ProduitsType []>([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const searchUrl = searchParams.get('search') || "";
  const [search, setSearch] = useState(searchUrl);
  const [sousCategories, setSousCategories] = useState<SousCategoriesType []>([]);
  const [SousCategorieFilter, setSousCategorieFilter] = useState<string>("");
  const [statsFilter, setStatsFilter] = useState<string>("")
  const handleSearch = () =>
  {
    const value = search.trim();
    if(value)
    {
      setSearchParams({search:value});
    }
    else
    {
      setSearchParams({});
    }
  }
  const fetchProduits = async(searchValue: string) =>
  {
    const data = await ApiProduit.getAll({
      search: searchValue || undefined,
      SousCategorieFilter: SousCategorieFilter || undefined,
      statsFilter: statsFilter || undefined
    });
    setProduits(data);
  }
  const fetchSousCategorie = async() =>
  {
    const data = await ApiSousCategories.getAll();
    setSousCategories(data);
  }
  const stockFaible = produits.filter((p)=> p.quantite <= 30);
  const handleDelete = () =>
  {
    if(!selected) return;
    try 
    {
      ApiProduit.delete(selected.id);
      setProduits((prev) => prev.filter((p) => p.id !== selected.id));
      toast.success("Opération réussie");
      setSelected(null);
      setModalDelete(false);
    } 
    catch (error) 
    {
      console.error("Erreur lors de la suppression", error);
      toast.error("Une erreur a été survenue");
    }
  }
  useEffect(() =>
  {
    fetchProduits(searchUrl);
    fetchSousCategorie();
  }, [searchUrl, SousCategorieFilter,statsFilter]);
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="mb-1 text-sm font-medium text-orange-500">
            Catalogue
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Produits
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Gérez les produits de votre boutique.
          </p>
        </div>

        <Link to="/admin/produits/ajouter" className="flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800">
          <FiPlus size={18} />
          Ajouter un produit
        </Link>

      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total produits
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                {produits.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <FiPackage size={20} />
            </div>

          </div>

        </div>


        {/* Available */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Disponibles
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                {produits.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FiCheckCircle size={20} />
            </div>

          </div>

        </div>


        {/* Low stock */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Stock faible
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                {stockFaible.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <FiAlertTriangle size={20} />
            </div>

          </div>

        </div>


        {/* Out of stock */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Rupture de stock
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                {stockFaible.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <FiXCircle size={20} />
            </div>

          </div>

        </div>

      </div>

      {/* FILTRES */}

      <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4">

        <div className="flex flex-col gap-3 lg:flex-row">

          {/* Search */}

          <div className="relative flex-1">  

            <FiSearch
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Rechercher un produit..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyDown={(e) =>{if(e.key === "Enter"){handleSearch()}}}
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white"
            />

          </div>
            <div onClick={handleSearch} className="flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800">
              <BiSearchAlt size={18} />
              Rechercher
            </div>


          {/* Category */}

          <select
            value={SousCategorieFilter}
            onChange={(e) =>setSousCategorieFilter(e.target.value)}
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none focus:border-orange-500"
          >
            <option value="">
              Toutes les catégories
            </option>

            {sousCategories.map((categorie) =>
            (
              <option value={categorie.id}>{categorie.nom}</option>
            ))}
          </select>


          {/* Status */}

          <select
            onChange={(e) =>setStatsFilter(e.target.value)}
            value={statsFilter}
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none focus:border-orange-500"
          >
            <option value="">
              Tous les statuts
            </option>

            <option value="disponible">
              Disponible
            </option>

            <option value="faible">
              Stock faible
            </option>

            <option value="rupture">
              Rupture
            </option>
          </select>


          {/* Filter button */}

          <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
            <FiFilter size={16} />
            Filtres
          </button>

        </div>

      </div>


      {/* ================================================= */}
      {/* PRODUCTS TABLE */}
      {/* ================================================= */}

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

        {/* Table header */}

        <div className="flex flex-col gap-3 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="font-bold text-gray-950">
              Tous les produits
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              486 produits au total
            </p>
          </div>

          <select
            defaultValue="recent"
            className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-600 outline-none"
          >
            <option value="recent">
              Plus récents
            </option>

            <option value="name">
              Nom A-Z
            </option>

            <option value="price">
              Prix croissant
            </option>

            <option value="stock">
              Stock
            </option>
          </select>

        </div>


        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-255">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70 text-left">

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Produit
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Catégorie
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Prix
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Stock
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Statut
                </th>

                <th className="px-6 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {produits.map((produit) => {

                const statusStyles = {
                  Disponible: "bg-emerald-50 text-emerald-600",
                  "Stock faible": "bg-amber-50 text-amber-600",
                  Rupture: "bg-red-50 text-red-600",
                };

                return (

                  <tr
                    key={produit.id}
                    className="border-b border-gray-50 transition last:border-0 hover:bg-gray-50/50"
                  >

                    {/* Product */}

                    <td className="px-6 py-4">

                      <div className="flex items-center gap-4">

                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gray-100">

                          <img
                            src={`http://localhost:8000/storage/${produit.image}`}
                            alt={produit.nom}
                            className="h-full w-full object-cover"
                          />

                        </div>

                        <div>

                          <p className="text-sm font-semibold text-gray-900">
                            {produit.nom}
                          </p>

                          {/* <p className="mt-1 text-xs text-gray-400">
                            SKU-{String(produit.id).padStart(4, "0")}
                          </p> */}

                        </div>

                      </div>

                    </td>


                    {/* Category */}

                    <td className="px-6 py-4">

                      <span className="text-sm text-gray-600">
                        {produit.sous_categories.nom}
                      </span>

                    </td>


                    {/* Price */}

                    <td className="px-6 py-4">

                      <span className="text-sm font-semibold text-gray-900">
                        {produit.prix}
                      </span>

                    </td>


                    {/* Stock */}

                    <td className="px-6 py-4">

                      <span
                        className={`text-sm font-semibold ${
                          produit.quantite === 0
                            ? "text-red-600"
                            : produit.quantite <= 10
                              ? "text-amber-600"
                              : "text-gray-700"
                        }`}
                      >
                        {produit.quantite}
                      </span>

                    </td>


                    {/* Status */}

                    <td className="px-6 py-4">

                      {/* <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          statusStyles[
                            produit.status as keyof typeof statusStyles
                          ]
                        }`}
                      >
                        {product.status}
                      </span> */}

                    </td>


                    {/* Actions */}

                    <td className="px-6 py-4">

                      <div className="flex justify-end gap-1">

                        <button
                          title="Voir"
                          className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                        >
                          <FiEye size={16} />
                        </button>

                        <Link
                          to={`/admin/produits/modifier/${produit.id}`}
                          title="Modifier"
                          className="rounded-lg p-2 text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          <FiEdit3 size={16} />
                        </Link>

                        <button
                          title="Supprimer"
                          onClick={() =>{setModalDelete(true), setSelected(produit)}}
                          className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                        >
                          <FiTrash2 size={16} />
                        </button>

                        <button
                          title="Plus"
                          className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                        >
                          <FiMoreVertical size={16} />
                        </button>

                      </div>

                    </td>

                  </tr>

                );
              })}

            </tbody>

          </table>

        </div>


        {/* ================================================= */}
        {/* PAGINATION */}
        {/* ================================================= */}

        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-400">
            Affichage de <span className="font-semibold text-gray-700">1</span> à{" "}
            <span className="font-semibold text-gray-700">5</span> sur{" "}
            <span className="font-semibold text-gray-700">486</span> produits
          </p>


          <div className="flex items-center gap-1">

            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <FiChevronLeft size={15} />
            </button>

            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-950 text-xs font-semibold text-white"
            >
              1
            </button>

            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-xs text-gray-600 transition hover:bg-gray-50"
            >
              2
            </button>

            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-xs text-gray-600 transition hover:bg-gray-50"
            >
              3
            </button>

            <span className="px-1 text-gray-400">
              ...
            </span>

            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-xs text-gray-600 transition hover:bg-gray-50"
            >
              98
            </button>

            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <FiChevronRight size={15} />
            </button>

          </div>

        </div>

      </div>

      {modalDelete && selected && (
        <ModalSuppression
          produit={selected}
          onClose={()=>{setModalDelete(false), setSelected(null)}}
          onConfirm={handleDelete}
        />
      )}

    </div>
  );
}
