import {
  FiSearch,
  FiUsers,
  FiUserCheck,
  FiUserX,
  FiShoppingBag,
  FiEye,
  FiEdit3,
  FiTrash2,
  FiMoreVertical,
  FiMail,
  FiPhone,
} from "react-icons/fi";

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@gmail.com",
      phone: "+261 34 12 345 67",
      orders: 12,
      spent: "485 000 Ar",
      status: "Actif",
      date: "12 août 2026",
    },
    {
      id: 2,
      name: "Marie Rakoto",
      email: "marie.rakoto@gmail.com",
      phone: "+261 32 45 678 90",
      orders: 8,
      spent: "320 000 Ar",
      status: "Actif",
      date: "08 août 2026",
    },
    {
      id: 3,
      name: "Thomas Martin",
      email: "thomas.martin@gmail.com",
      phone: "+261 33 78 456 12",
      orders: 5,
      spent: "198 000 Ar",
      status: "Actif",
      date: "02 août 2026",
    },
    {
      id: 4,
      name: "Sarah Andriam",
      email: "sarah.andriam@gmail.com",
      phone: "+261 34 89 123 45",
      orders: 2,
      spent: "75 000 Ar",
      status: "Inactif",
      date: "28 juillet 2026",
    },
    {
      id: 5,
      name: "Lucas Bernard",
      email: "lucas.bernard@gmail.com",
      phone: "+261 32 67 890 12",
      orders: 16,
      spent: "720 000 Ar",
      status: "Actif",
      date: "20 juillet 2026",
    },
  ];

  const statusStyles: Record<string, string> = {
    Actif: "bg-emerald-50 text-emerald-600",
    Inactif: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="mb-1 text-sm font-medium text-orange-500">
            Utilisateurs
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Clients
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Gérez les clients et consultez leur activité sur la plateforme.
          </p>
        </div>

      </div>


      {/* ================================================= */}
      {/* STATS */}
      {/* ================================================= */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total clients
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                1 248
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiUsers size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-emerald-600">
            +12,5 % ce mois-ci
          </p>

        </div>


        {/* Actifs */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Clients actifs
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                1 102
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FiUserCheck size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-gray-400">
            88,3 % des clients
          </p>

        </div>


        {/* Inactifs */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Clients inactifs
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                146
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
              <FiUserX size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-gray-400">
            Aucun achat récent
          </p>

        </div>


        {/* Commandes */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Commandes clients
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                3 842
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <FiShoppingBag size={20} />
            </div>

          </div>

          <p className="mt-3 text-xs text-emerald-600">
            +8,2 % ce mois-ci
          </p>

        </div>

      </div>


      {/* ================================================= */}
      {/* FILTERS */}
      {/* ================================================= */}

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
              placeholder="Rechercher par nom, email ou téléphone..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
            />

          </div>


          {/* Status */}

          <select
            defaultValue=""
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none focus:border-orange-500"
          >
            <option value="">
              Tous les clients
            </option>

            <option value="active">
              Actifs
            </option>

            <option value="inactive">
              Inactifs
            </option>
          </select>


          {/* Sort */}

          <select
            defaultValue="recent"
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none focus:border-orange-500"
          >
            <option value="recent">
              Plus récents
            </option>

            <option value="old">
              Plus anciens
            </option>

            <option value="orders">
              Plus de commandes
            </option>

            <option value="spent">
              Plus dépensiers
            </option>
          </select>

        </div>

      </div>


      {/* ================================================= */}
      {/* TABLE */}
      {/* ================================================= */}

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

          <div>
            <h2 className="font-bold text-gray-950">
              Liste des clients
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              1 248 clients enregistrés
            </p>
          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[1050px]">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70 text-left">

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Client
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Contact
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Commandes
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Total dépensé
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Inscription
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

              {clients.map((client) => (

                <tr
                  key={client.id}
                  className="border-b border-gray-50 transition last:border-0 hover:bg-gray-50/60"
                >

                  {/* Client */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-sm font-bold text-white">
                        {client.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>

                        <p className="text-sm font-bold text-gray-900">
                          {client.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          Client #{client.id.toString().padStart(4, "0")}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* Contact */}

                  <td className="px-6 py-5">

                    <div className="space-y-1.5">

                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <FiMail
                          size={13}
                          className="text-gray-400"
                        />
                        {client.email}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <FiPhone
                          size={13}
                          className="text-gray-400"
                        />
                        {client.phone}
                      </div>

                    </div>

                  </td>


                  {/* Commandes */}

                  <td className="px-6 py-5">

                    <span className="text-sm font-semibold text-gray-700">
                      {client.orders}
                    </span>

                  </td>


                  {/* Total */}

                  <td className="px-6 py-5">

                    <span className="text-sm font-bold text-gray-900">
                      {client.spent}
                    </span>

                  </td>


                  {/* Date */}

                  <td className="px-6 py-5">

                    <span className="text-xs text-gray-500">
                      {client.date}
                    </span>

                  </td>


                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[client.status]}`}
                    >
                      {client.status}
                    </span>

                  </td>


                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-1">

                      <button
                        title="Voir le client"
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
              5
            </span>{" "}
            sur{" "}
            <span className="font-semibold text-gray-700">
              1 248
            </span>{" "}
            clients
          </p>

          <div className="flex items-center gap-2">

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-400">
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