import {
  FiSearch,
  FiPlus,
  FiTag,
  FiCalendar,
  FiEdit3,
  FiTrash2,
  FiMoreVertical,
  FiCheckCircle,
  FiClock,
  FiXCircle,
  FiPercent,
  FiEye,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Promotion() {
  const promotions = [
    {
      id: 1,
      name: "Soldes d'été",
      code: "ETE2026",
      type: "Pourcentage",
      value: "20%",
      products: 84,
      start: "01 août 2026",
      end: "31 août 2026",
      status: "Active",
      used: 126,
    },
    {
      id: 2,
      name: "Bienvenue",
      code: "WELCOME10",
      type: "Pourcentage",
      value: "10%",
      products: 245,
      start: "01 janvier 2026",
      end: "31 décembre 2026",
      status: "Active",
      used: 389,
    },
    {
      id: 3,
      name: "Livraison offerte",
      code: "FREEDELIVERY",
      type: "Montant fixe",
      value: "15 €",
      products: 120,
      start: "25 août 2026",
      end: "05 septembre 2026",
      status: "Active",
      used: 54,
    },
    {
      id: 4,
      name: "Black Friday",
      code: "BLACKFRIDAY",
      type: "Pourcentage",
      value: "30%",
      products: 310,
      start: "27 novembre 2026",
      end: "30 novembre 2026",
      status: "Planifiée",
      used: 0,
    },
    {
      id: 5,
      name: "Offre printemps",
      code: "SPRING25",
      type: "Pourcentage",
      value: "25%",
      products: 95,
      start: "01 mars 2026",
      end: "31 mars 2026",
      status: "Expirée",
      used: 211,
    },
  ];

  const statusStyles: Record<string, string> = {
    Active: "bg-emerald-50 text-emerald-600",
    Planifiée: "bg-blue-50 text-blue-600",
    Expirée: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="mb-1 text-sm font-medium text-orange-500">
            Marketing
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Promotions
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Créez et gérez les offres promotionnelles de votre boutique.
          </p>
        </div>

        <Link
          to="/admin/promotions/ajouter"
          className="flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
        >
          <FiPlus size={18} />
          Nouvelle promotion
        </Link>

      </div>


      {/* ================================================= */}
      {/* STATS */}
      {/* ================================================= */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Active */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Promotions actives
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                8
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FiCheckCircle size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-emerald-600">
            3 nouvelles ce mois-ci
          </p>

        </div>


        {/* Planifiées */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Planifiées
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                4
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiClock size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-gray-400">
            Prêtes à être activées
          </p>

        </div>


        {/* Expirées */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Expirées
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                17
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
              <FiXCircle size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-gray-400">
            Historique des promotions
          </p>

        </div>


        {/* Utilisations */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Utilisations
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                1 284
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <FiTag size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-emerald-600">
            +18,7 % ce mois-ci
          </p>

        </div>

      </div>


      {/* ================================================= */}
      {/* SEARCH + FILTER */}
      {/* ================================================= */}

      <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4">

        <div className="flex flex-col gap-3 xl:flex-row">

          <div className="relative flex-1">

            <FiSearch
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Rechercher une promotion ou un code..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
            />

          </div>


          <select
            defaultValue=""
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none focus:border-orange-500"
          >
            <option value="">
              Tous les statuts
            </option>

            <option value="active">
              Active
            </option>

            <option value="planned">
              Planifiée
            </option>

            <option value="expired">
              Expirée
            </option>
          </select>


          <select
            defaultValue=""
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none focus:border-orange-500"
          >
            <option value="">
              Tous les types
            </option>

            <option value="percentage">
              Pourcentage
            </option>

            <option value="fixed">
              Montant fixe
            </option>

          </select>

        </div>

      </div>


      {/* ================================================= */}
      {/* PROMOTIONS */}
      {/* ================================================= */}

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

          <div>
            <h2 className="font-bold text-gray-950">
              Toutes les promotions
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              29 promotions au total
            </p>
          </div>

        </div>


        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1050px]">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70 text-left">

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Promotion
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Code
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Réduction
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Produits
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Validité
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Utilisations
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

              {promotions.map((promotion) => (

                <tr
                  key={promotion.id}
                  className="border-b border-gray-50 transition last:border-0 hover:bg-gray-50/50"
                >

                  {/* Promotion */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                        <FiPercent size={18} />
                      </div>

                      <div>

                        <p className="text-sm font-bold text-gray-900">
                          {promotion.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          Promotion #{promotion.id}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* Code */}

                  <td className="px-6 py-5">

                    <span className="rounded-lg bg-gray-100 px-3 py-1.5 font-mono text-xs font-semibold text-gray-700">
                      {promotion.code}
                    </span>

                  </td>


                  {/* Reduction */}

                  <td className="px-6 py-5">

                    <div>

                      <p className="text-sm font-bold text-gray-900">
                        {promotion.value}
                      </p>

                      <p className="mt-1 text-[11px] text-gray-400">
                        {promotion.type}
                      </p>

                    </div>

                  </td>


                  {/* Produits */}

                  <td className="px-6 py-5">

                    <span className="text-sm text-gray-600">
                      {promotion.products}
                    </span>

                  </td>


                  {/* Validité */}

                  <td className="px-6 py-5">

                    <div className="flex items-start gap-2">

                      <FiCalendar
                        size={14}
                        className="mt-0.5 text-gray-400"
                      />

                      <div>

                        <p className="text-xs font-medium text-gray-700">
                          {promotion.start}
                        </p>

                        <p className="mt-1 text-[11px] text-gray-400">
                          au {promotion.end}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* Utilisations */}

                  <td className="px-6 py-5">

                    <span className="text-sm font-semibold text-gray-700">
                      {promotion.used}
                    </span>

                  </td>


                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[promotion.status]}`}
                    >
                      {promotion.status}
                    </span>

                  </td>


                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-1">

                      <button
                        title="Voir"
                        className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                      >
                        <FiEye size={16} />
                      </button>

                      <button
                        title="Modifier"
                        className="rounded-lg p-2 text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <FiEdit3 size={16} />
                      </button>

                      <button
                        title="Supprimer"
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

              ))}

            </tbody>

          </table>

        </div>


        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-400">
            Affichage de{" "}
            <span className="font-semibold text-gray-700">
              1
            </span>{" "}
            à{" "}
            <span className="font-semibold text-gray-700">
              5
            </span>{" "}
            sur{" "}
            <span className="font-semibold text-gray-700">
              29
            </span>{" "}
            promotions
          </p>

          <div className="flex items-center gap-2">

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-500 hover:bg-gray-50">
              Précédent
            </button>

            <button className="rounded-lg bg-gray-950 px-3 py-2 text-xs font-semibold text-white">
              1
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-500 hover:bg-gray-50">
              2
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-500 hover:bg-gray-50">
              3
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-500 hover:bg-gray-50">
              Suivant
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}