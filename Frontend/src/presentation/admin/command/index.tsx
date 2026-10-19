import {
  FiSearch,
  FiFilter,
  FiShoppingBag,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiEye,
  FiMoreVertical,
  FiChevronLeft,
  FiChevronRight,
  FiTruck,
} from "react-icons/fi";

export default function Command() {
  const commandes = [
    {
      id: "#CMD-1048",
      client: "Jean Dupont",
      email: "jean.dupont@email.com",
      date: "29 août 2026",
      produits: 3,
      total: "189,90 €",
      paiement: "Payé",
      statut: "En préparation",
    },
    {
      id: "#CMD-1047",
      client: "Sophie Martin",
      email: "sophie.martin@email.com",
      date: "29 août 2026",
      produits: 2,
      total: "129,90 €",
      paiement: "Payé",
      statut: "Expédiée",
    },
    {
      id: "#CMD-1046",
      client: "Lucas Bernard",
      email: "lucas.bernard@email.com",
      date: "28 août 2026",
      produits: 1,
      total: "74,50 €",
      paiement: "Payé",
      statut: "Livrée",
    },
    {
      id: "#CMD-1045",
      client: "Emma Laurent",
      email: "emma.laurent@email.com",
      date: "28 août 2026",
      produits: 5,
      total: "349,00 €",
      paiement: "En attente",
      statut: "En attente",
    },
    {
      id: "#CMD-1044",
      client: "Thomas Moreau",
      email: "thomas.moreau@email.com",
      date: "27 août 2026",
      produits: 2,
      total: "159,80 €",
      paiement: "Payé",
      statut: "Annulée",
    },
    {
      id: "#CMD-1043",
      client: "Claire Robert",
      email: "claire.robert@email.com",
      date: "27 août 2026",
      produits: 4,
      total: "219,90 €",
      paiement: "Payé",
      statut: "Livrée",
    },
  ];

  const statusStyles: Record<string, string> = {
    "En attente": "bg-amber-50 text-amber-600",
    "En préparation": "bg-blue-50 text-blue-600",
    "Expédiée": "bg-purple-50 text-purple-600",
    "Livrée": "bg-emerald-50 text-emerald-600",
    "Annulée": "bg-red-50 text-red-600",
  };

  const paymentStyles: Record<string, string> = {
    Payé: "text-emerald-600",
    "En attente": "text-amber-600",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="mb-1 text-sm font-medium text-orange-500">
            Vente
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Commandes
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Suivez et gérez les commandes de vos clients.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
          <FiFilter size={17} />
          Exporter les commandes
        </button>

      </div>


      {/* ================================================= */}
      {/* STATS */}
      {/* ================================================= */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total commandes */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total commandes
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                1 248
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <FiShoppingBag size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs font-medium text-emerald-600">
            +12,5 % ce mois-ci
          </p>

        </div>


        {/* En attente */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                En attente
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                18
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <FiClock size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-gray-400">
            À traiter rapidement
          </p>

        </div>


        {/* Livrées */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Livrées
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                1 087
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FiCheckCircle size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-emerald-600">
            87 % des commandes
          </p>

        </div>


        {/* Chiffre d'affaires */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Chiffre d'affaires
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                48 920 €
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiTruck size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs font-medium text-emerald-600">
            +8,4 % ce mois-ci
          </p>

        </div>

      </div>


      {/* ================================================= */}
      {/* SEARCH + FILTER */}
      {/* ================================================= */}

      <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4">

        <div className="flex flex-col gap-3 xl:flex-row">

          {/* Search */}

          <div className="relative flex-1">

            <FiSearch
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Rechercher par numéro, client ou email..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
            />

          </div>


          {/* Status */}

          <select
            defaultValue=""
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none focus:border-orange-500"
          >
            <option value="">
              Tous les statuts
            </option>

            <option value="pending">
              En attente
            </option>

            <option value="preparing">
              En préparation
            </option>

            <option value="shipped">
              Expédiée
            </option>

            <option value="delivered">
              Livrée
            </option>

            <option value="cancelled">
              Annulée
            </option>
          </select>


          {/* Payment */}

          <select
            defaultValue=""
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none focus:border-orange-500"
          >
            <option value="">
              Paiement
            </option>

            <option value="paid">
              Payé
            </option>

            <option value="pending">
              En attente
            </option>
          </select>


          {/* Date */}

          <select
            defaultValue="recent"
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none focus:border-orange-500"
          >
            <option value="recent">
              Plus récentes
            </option>

            <option value="old">
              Plus anciennes
            </option>

            <option value="high">
              Montant élevé
            </option>

            <option value="low">
              Montant faible
            </option>
          </select>

        </div>

      </div>


      {/* ================================================= */}
      {/* TABLE */}
      {/* ================================================= */}

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

        {/* Table heading */}

        <div className="flex flex-col gap-3 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="font-bold text-gray-950">
              Toutes les commandes
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              1 248 commandes au total
            </p>
          </div>

          <button className="text-xs font-semibold text-orange-600 hover:text-orange-700">
            Voir les commandes annulées
          </button>

        </div>


        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1050px]">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70 text-left">

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Commande
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Client
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Date
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Produits
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Total
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Paiement
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

              {commandes.map((commande) => (

                <tr
                  key={commande.id}
                  className="border-b border-gray-50 transition last:border-0 hover:bg-gray-50/50"
                >

                  {/* Commande */}

                  <td className="px-6 py-4">

                    <p className="text-sm font-bold text-gray-900">
                      {commande.id}
                    </p>

                    <p className="mt-1 text-[11px] text-gray-400">
                      Commande #{commande.id.replace("#CMD-", "")}
                    </p>

                  </td>


                  {/* Client */}

                  <td className="px-6 py-4">

                    <div>

                      <p className="text-sm font-semibold text-gray-800">
                        {commande.client}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {commande.email}
                      </p>

                    </div>

                  </td>


                  {/* Date */}

                  <td className="px-6 py-4">

                    <span className="text-sm text-gray-600">
                      {commande.date}
                    </span>

                  </td>


                  {/* Products */}

                  <td className="px-6 py-4">

                    <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">
                      {commande.produits} article
                      {commande.produits > 1 ? "s" : ""}
                    </span>

                  </td>


                  {/* Total */}

                  <td className="px-6 py-4">

                    <span className="text-sm font-bold text-gray-900">
                      {commande.total}
                    </span>

                  </td>


                  {/* Payment */}

                  <td className="px-6 py-4">

                    <span
                      className={`text-xs font-semibold ${paymentStyles[commande.paiement]}`}
                    >
                      {commande.paiement}
                    </span>

                  </td>


                  {/* Status */}

                  <td className="px-6 py-4">

                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[commande.statut]}`}
                    >
                      {commande.statut}
                    </span>

                  </td>


                  {/* Actions */}

                  <td className="px-6 py-4">

                    <div className="flex justify-end gap-1">

                      <button
                        title="Voir la commande"
                        className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                      >
                        <FiEye size={16} />
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

              ))}

            </tbody>

          </table>

        </div>


        {/* ================================================= */}
        {/* PAGINATION */}
        {/* ================================================= */}

        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-400">
            Affichage de{" "}
            <span className="font-semibold text-gray-700">
              1
            </span>{" "}
            à{" "}
            <span className="font-semibold text-gray-700">
              6
            </span>{" "}
            sur{" "}
            <span className="font-semibold text-gray-700">
              1 248
            </span>{" "}
            commandes
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
              208
            </button>

            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <FiChevronRight size={15} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
