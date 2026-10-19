import { useEffect, useState } from "react";
import {
    FiHeart,
    FiSearch,
    FiShoppingBag,
    FiUser,
    FiChevronDown,
    FiMenu,
    FiX,
    FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import ApiCategories from "../../../service/ApiCategories";
import type { Categorie } from "../../../service/type/Categorie";

export default function NavBar() {
    const [categories, setCategories] = useState<Categorie[]>([]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [activeCategory, setActiveCategory] =
        useState<Categorie | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const fetchCategories = async () => {
        try {
            const data = await ApiCategories.getAll();
            setCategories(data);
        } catch (error) {
            console.error(
                "Erreur lors du chargement des catégories :",
                error
            );
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
            <div className="mx-auto max-w-350 px-6">
                {/* HEADER PRINCIPAL */}
                <div className="flex h-20 items-center gap-6">
                    {/* Menu mobile */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Ouvrir ou fermer le menu"
                        className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-gray-100 md:hidden"
                    >
                        {mobileMenuOpen ? (
                            <FiX size={21} />
                        ) : (
                            <FiMenu size={21} />
                        )}
                    </button>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="shrink-0 text-2xl font-black tracking-tight text-gray-950"
                    >
                        Stand'<span className="text-orange-500">Art</span>
                    </Link>

                    {/* Recherche desktop */}
                    <div className="hidden flex-1 md:block">
                        <div className="group flex h-12 max-w-2xl items-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition focus-within:border-gray-900 focus-within:bg-white focus-within:ring-2 focus-within:ring-gray-900/5">
                            <FiSearch
                                size={19}
                                className="ml-4 shrink-0 text-gray-400 group-focus-within:text-gray-900"
                            />

                            <input
                                type="text"
                                placeholder="Rechercher un produit, une catégorie..."
                                className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-gray-400"
                            />

                            <button
                                type="button"
                                aria-label="Rechercher"
                                className="mr-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-950 text-white transition hover:bg-orange-500"
                            >
                                <FiSearch size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="ml-auto flex items-center gap-1">
                        <Link
                            to="/compte"
                            className="hidden items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-gray-100 lg:flex"
                        >
                            <FiUser size={20} />
                            <span>Mon compte</span>
                        </Link>

                        <button
                            type="button"
                            aria-label="Favoris"
                            className="relative flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-gray-100"
                        >
                            <FiHeart size={21} />
                            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[9px] font-bold text-white">
                                2
                            </span>
                        </button>

                        <button
                            type="button"
                            aria-label="Panier"
                            className="relative flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-gray-100"
                        >
                            <FiShoppingBag size={21} />
                            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gray-950 px-1 text-[9px] font-bold text-white">
                                3
                            </span>
                        </button>
                    </div>
                </div>

                {/* RECHERCHE MOBILE */}
                <div className="pb-4 md:hidden">
                    <div className="flex h-11 items-center rounded-xl border border-gray-200 bg-gray-50 px-3">
                        <FiSearch size={18} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-full bg-transparent px-3 text-sm outline-none"
                        />
                    </div>
                </div>

                {/* NAVIGATION DESKTOP */}
                <div className="hidden h-13 items-center border-t border-gray-100 md:flex">
                    <nav className="flex h-full items-center gap-1">
                        {/* CATÉGORIES */}
                        <div className="relative h-full">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsCategoryOpen(!isCategoryOpen);

                                    if (!isCategoryOpen && !activeCategory && categories.length > 0) {
                                        setActiveCategory(categories[0]);
                                    }
                                }}
                                className={`flex h-full items-center gap-2 px-4 text-sm font-semibold transition ${
                                    isCategoryOpen
                                        ? "text-orange-600"
                                        : "text-gray-800 hover:text-orange-600"
                                }`}
                            >
                                <span>Catégories</span>
                                <FiChevronDown
                                    size={15}
                                    className={`transition-transform ${
                                        isCategoryOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {/* MEGA MENU */}
                            {isCategoryOpen && (
                                <div className="absolute left-0 top-full z-50 w-245 overflow-hidden rounded-b-2xl border border-gray-100 bg-white shadow-xl">
                                    <div className="grid grid-cols-[220px_1fr]">
                                        {/* LISTE DES CATÉGORIES */}
                                        <div className="border-r border-gray-100 bg-gray-50 p-3">
                                            <p className="px-3 pb-3 pt-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                                Catégories
                                            </p>

                                            {categories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    type="button"
                                                    onMouseEnter={() =>
                                                        setActiveCategory(category)
                                                    }
                                                    onFocus={() =>
                                                        setActiveCategory(category)
                                                    }
                                                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition ${
                                                        activeCategory?.id === category.id
                                                            ? "bg-white font-semibold text-orange-600 shadow-sm"
                                                            : "text-gray-700 hover:bg-white"
                                                    }`}
                                                >
                                                    <span>{category.name}</span>

                                                    {category.sous_categorie.length > 0 && (
                                                        <FiArrowRight size={15} />
                                                    )}
                                                </button>
                                            ))}

                                            <Link
                                                to="/categories"
                                                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-gray-950 hover:bg-white"
                                            >
                                                Toutes les catégories
                                                <FiArrowRight size={15} />
                                            </Link>
                                        </div>

                                        {/* SOUS-CATÉGORIES */}
                                        <div className="p-7">
                                            {activeCategory ? (
                                                <>
                                                    <div className="mb-6">
                                                        <h3 className="text-xl font-bold text-gray-950">
                                                            {activeCategory.name}
                                                        </h3>

                                                        <p className="mt-1 text-sm text-gray-500">
                                                            {activeCategory.introduction}
                                                        </p>
                                                    </div>

                                                    {activeCategory.sous_categorie.length > 0 ? (
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {activeCategory.sous_categorie.map(
                                                                (sousCategorie) => (
                                                                    <Link
                                                                        key={sousCategorie.id}
                                                                        to={`/categorie/${activeCategory.slug}/${sousCategorie.slug}`}
                                                                        className="group rounded-xl border border-gray-100 p-4 transition hover:border-orange-200 hover:bg-orange-50"
                                                                    >
                                                                        <div className="flex items-center justify-between gap-2">
                                                                            <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-600">
                                                                                {sousCategorie.name}
                                                                            </span>

                                                                            <FiArrowRight
                                                                                size={15}
                                                                                className="shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-orange-500"
                                                                            />
                                                                        </div>

                                                                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                                                                            {sousCategorie.introduction}
                                                                        </p>
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <p className="text-sm text-gray-500">
                                                            Découvrez tous les produits de cette catégorie.
                                                        </p>
                                                    )}

                                                    <Link
                                                        to={`/categorie/${activeCategory.slug}`}
                                                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
                                                    >
                                                        Voir tous les produits
                                                        <FiArrowRight size={15} />
                                                    </Link>
                                                </>
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-sm text-gray-400">
                                                    {categories.length === 0
                                                        ? "Aucune catégorie disponible"
                                                        : "Sélectionnez une catégorie"}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* LIENS PRINCIPAUX */}
                        <Link
                            to="/"
                            className="flex h-full items-center px-4 text-sm text-gray-600 transition hover:text-gray-950"
                        >
                            Accueil
                        </Link>

                        <Link
                            to="/nouveautes"
                            className="flex h-full items-center px-4 text-sm text-gray-600 transition hover:text-gray-950"
                        >
                            Nouveautés
                        </Link>

                        <Link
                            to="/meilleures-ventes"
                            className="flex h-full items-center px-4 text-sm text-gray-600 transition hover:text-gray-950"
                        >
                            Meilleures ventes
                        </Link>

                        <Link
                            to="/collections"
                            className="flex h-full items-center px-4 text-sm text-gray-600 transition hover:text-gray-950"
                        >
                            Collections
                        </Link>

                        <Link
                            to="/inspiration"
                            className="flex h-full items-center px-4 text-sm text-gray-600 transition hover:text-gray-950"
                        >
                            Inspiration
                        </Link>
                    </nav>

                    <Link
                        to="/promotions"
                        className="ml-auto rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
                    >
                        Offres du moment
                    </Link>
                </div>

                {/* MENU MOBILE */}
                {mobileMenuOpen && (
                    <div className="border-t border-gray-100 py-4 md:hidden">
                        <div className="space-y-1">
                            <Link
                                to="/nouveautes"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg px-4 py-3 text-sm font-semibold hover:bg-gray-50"
                            >
                                Nouveautés
                            </Link>

                            <Link
                                to="/meilleures-ventes"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg px-4 py-3 text-sm font-semibold hover:bg-gray-50"
                            >
                                Meilleures ventes
                            </Link>

                            <div className="my-2 border-t border-gray-100" />

                            <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                Catégories
                            </p>

                            {categories.map((category) => (
                                <Link
                                    key={category.id}
                                    to={`/categorie/${category.slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between rounded-lg px-4 py-3 text-sm hover:bg-gray-50"
                                >
                                    <span>{category.name}</span>
                                    <FiArrowRight
                                        size={15}
                                        className="text-gray-400"
                                    />
                                </Link>
                            ))}

                            <div className="my-2 border-t border-gray-100" />

                            <Link
                                to="/collections"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg px-4 py-3 text-sm font-semibold hover:bg-gray-50"
                            >
                                Collections
                            </Link>

                            <Link
                                to="/promotions"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg px-4 py-3 text-sm font-semibold text-orange-600 hover:bg-orange-50"
                            >
                                Offres du moment
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}