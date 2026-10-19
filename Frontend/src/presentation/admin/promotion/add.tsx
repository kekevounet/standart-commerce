import { useState } from "react";
import {
  FiArrowLeft,
  FiSave,
  FiTag,
  FiCalendar,
  FiPercent,
  FiPackage,
  FiInfo,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function AddPromotion() {
  const [type, setType] = useState<"percentage" | "fixed">("percentage");
  const [nom, setNom] = useState("");
  const [code, setCode] = useState("");
  const [valeur, setValeur] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [montantMinimum, setMontantMinimum] = useState("");
  const [limiteUtilisation, setLimiteUtilisation] = useState("");
  const [produits, setProduits] = useState("Tous les produits");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      nom,
      code,
      type,
      valeur: Number(valeur),
      date_debut: dateDebut,
      date_fin: dateFin,
      montant_minimum:
        montantMinimum === "" ? null : Number(montantMinimum),
      limite_utilisation:
        limiteUtilisation === "" ? null : Number(limiteUtilisation),
      produits,
    };

    console.log("Promotion :", data);

    // Plus tard :
    // axios.post("/api/promotions", data)
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mb-8">

        <Link
          to="/admin/promotions"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          <FiArrowLeft size={16} />
          Retour aux promotions
        </Link>

        <div>
          <p className="mb-1 text-sm font-medium text-orange-500">
            Marketing
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Nouvelle promotion
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Créez une offre promotionnelle pour vos clients.
          </p>
        </div>

      </div>


      {/* ================================================= */}
      {/* FORM */}
      {/* ================================================= */}

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-6xl"
      >

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <div className="space-y-6 xl:col-span-2">

            {/* ================================================= */}
            {/* INFORMATIONS */}
            {/* ================================================= */}

            <section className="rounded-2xl border border-gray-200 bg-white">

              <div className="border-b border-gray-100 px-6 py-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <FiTag size={19} />
                  </div>

                  <div>
                    <h2 className="font-bold text-gray-950">
                      Informations générales
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                      Donnez un nom et un code à votre promotion.
                    </p>
                  </div>

                </div>

              </div>


              <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2">

                {/* Nom */}

                <div className="md:col-span-2">

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Nom de la promotion
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Ex : Soldes d'été"
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />

                </div>


                {/* Code */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Code promotionnel
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={code}
                    onChange={(e) =>
                      setCode(e.target.value.toUpperCase())
                    }
                    placeholder="Ex : ETE2026"
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 font-mono text-sm uppercase outline-none transition placeholder:normal-case placeholder:font-sans placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Le client devra saisir ce code lors de sa commande.
                  </p>

                </div>


                {/* Produits */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Produits concernés
                  </label>

                  <select
                    value={produits}
                    onChange={(e) => setProduits(e.target.value)}
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  >
                    <option>
                      Tous les produits
                    </option>

                    <option>
                      Produits sélectionnés
                    </option>

                    <option>
                      Catégories sélectionnées
                    </option>

                  </select>

                </div>

              </div>

            </section>


            {/* ================================================= */}
            {/* REDUCTION */}
            {/* ================================================= */}

            <section className="rounded-2xl border border-gray-200 bg-white">

              <div className="border-b border-gray-100 px-6 py-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FiPercent size={19} />
                  </div>

                  <div>
                    <h2 className="font-bold text-gray-950">
                      Type de réduction
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                      Définissez le montant de la remise.
                    </p>
                  </div>

                </div>

              </div>


              <div className="p-6">

                {/* Type */}

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* Percentage */}

                  <button
                    type="button"
                    onClick={() => setType("percentage")}
                    className={`rounded-xl border p-4 text-left transition ${
                      type === "percentage"
                        ? "border-orange-500 bg-orange-50 ring-2 ring-orange-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          type === "percentage"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <FiPercent size={18} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          Pourcentage
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          Exemple : 20% de réduction
                        </p>
                      </div>

                    </div>

                  </button>


                  {/* Fixed */}

                  <button
                    type="button"
                    onClick={() => setType("fixed")}
                    className={`rounded-xl border p-4 text-left transition ${
                      type === "fixed"
                        ? "border-orange-500 bg-orange-50 ring-2 ring-orange-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          type === "fixed"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        €
                      </div>

                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          Montant fixe
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          Exemple : 15 € de réduction
                        </p>
                      </div>

                    </div>

                  </button>

                </div>


                {/* Value */}

                <div className="mt-5 max-w-md">

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Valeur de la réduction
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="relative">

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={valeur}
                      onChange={(e) => setValeur(e.target.value)}
                      placeholder={
                        type === "percentage"
                          ? "20"
                          : "15"
                      }
                      required
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">
                      {type === "percentage" ? "%" : "€"}
                    </span>

                  </div>

                  {type === "percentage" && (
                    <p className="mt-2 text-xs text-gray-400">
                      La réduction doit être comprise entre 1 et 100%.
                    </p>
                  )}

                </div>

              </div>

            </section>


            {/* ================================================= */}
            {/* PERIODE */}
            {/* ================================================= */}

            <section className="rounded-2xl border border-gray-200 bg-white">

              <div className="border-b border-gray-100 px-6 py-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <FiCalendar size={19} />
                  </div>

                  <div>
                    <h2 className="font-bold text-gray-950">
                      Période de validité
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                      Choisissez quand la promotion sera disponible.
                    </p>
                  </div>

                </div>

              </div>


              <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Date de début
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    type="datetime-local"
                    value={dateDebut}
                    onChange={(e) =>
                      setDateDebut(e.target.value)
                    }
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Date de fin
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    type="datetime-local"
                    value={dateFin}
                    onChange={(e) =>
                      setDateFin(e.target.value)
                    }
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                </div>

              </div>

            </section>


            {/* ================================================= */}
            {/* CONDITIONS */}
            {/* ================================================= */}

            <section className="rounded-2xl border border-gray-200 bg-white">

              <div className="border-b border-gray-100 px-6 py-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <FiInfo size={19} />
                  </div>

                  <div>
                    <h2 className="font-bold text-gray-950">
                      Conditions
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                      Définissez les limites de votre promotion.
                    </p>
                  </div>

                </div>

              </div>


              <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Montant minimum de commande
                  </label>

                  <div className="relative">

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={montantMinimum}
                      onChange={(e) =>
                        setMontantMinimum(e.target.value)
                      }
                      placeholder="0"
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-12 text-sm outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">
                      €
                    </span>

                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    Laisser à 0 pour aucune condition.
                  </p>

                </div>


                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Nombre maximum d'utilisations
                  </label>

                  <input
                    type="number"
                    min="1"
                    value={limiteUtilisation}
                    onChange={(e) =>
                      setLimiteUtilisation(e.target.value)
                    }
                    placeholder="Illimité"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Laisser vide pour un nombre illimité.
                  </p>

                </div>

              </div>

            </section>

          </div>


          {/* ================================================= */}
          {/* RIGHT - RESUME */}
          {/* ================================================= */}

          <div className="space-y-6">

            {/* Preview */}

            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

              <div className="bg-gray-950 p-6 text-white">

                <div className="mb-6 flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <FiTag size={20} />
                  </div>

                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    Aperçu
                  </span>

                </div>

                <p className="text-xs font-medium text-gray-400">
                  PROMOTION
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  {nom || "Nom de la promotion"}
                </h2>

                <div className="mt-5 flex items-end gap-2">

                  <span className="text-4xl font-bold">
                    {valeur || "0"}
                  </span>

                  <span className="mb-1 text-lg font-semibold text-gray-400">
                    {type === "percentage" ? "%" : "€"}
                  </span>

                </div>

              </div>


              <div className="p-5">

                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Code promotionnel
                </p>

                <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-center">

                  <span className="font-mono text-lg font-bold tracking-widest text-gray-900">
                    {code || "CODEPROMO"}
                  </span>

                </div>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center justify-between text-xs">

                    <span className="text-gray-400">
                      Type
                    </span>

                    <span className="font-semibold text-gray-700">
                      {type === "percentage"
                        ? "Pourcentage"
                        : "Montant fixe"}
                    </span>

                  </div>

                  <div className="flex items-center justify-between text-xs">

                    <span className="text-gray-400">
                      Produits
                    </span>

                    <span className="font-semibold text-gray-700">
                      {produits}
                    </span>

                  </div>

                  <div className="flex items-center justify-between text-xs">

                    <span className="text-gray-400">
                      Utilisation
                    </span>

                    <span className="font-semibold text-gray-700">
                      {limiteUtilisation || "Illimitée"}
                    </span>

                  </div>

                </div>

              </div>

            </section>


            {/* Products */}

            <section className="rounded-2xl border border-gray-200 bg-white p-5">

              <div className="mb-4 flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                  <FiPackage size={17} />
                </div>

                <div>

                  <h3 className="text-sm font-bold text-gray-900">
                    Produits concernés
                  </h3>

                  <p className="text-xs text-gray-400">
                    {produits}
                  </p>

                </div>

              </div>

              <button
                type="button"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs font-semibold text-gray-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
              >
                Sélectionner les produits
              </button>

            </section>


            {/* Info */}

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

              <div className="flex gap-3">

                <FiInfo
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>

                  <p className="text-xs font-bold text-blue-900">
                    À savoir
                  </p>

                  <p className="mt-1 text-xs leading-5 text-blue-700">
                    La promotion sera automatiquement activée à la
                    date de début et désactivée à la date de fin.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* ACTIONS */}
        {/* ================================================= */}

        <div className="mt-6 flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">

          <Link
            to="/admin/promotions"
            className="flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            Annuler
          </Link>

          <button
            type="submit"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
          >
            <FiSave size={17} />
            Créer la promotion
          </button>

        </div>

      </form>

    </div>
  );
}
