import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiDollarSign,
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiMoreHorizontal,
  FiAlertTriangle,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
} from "react-icons/fi";

export default function Dashboard() {
  const stats = [
    {
      title: "Chiffre d'affaires",
      value: "€24 680",
      evolution: "+12,8%",
      positive: true,
      icon: FiDollarSign,
      color: "orange",
    },
    {
      title: "Commandes",
      value: "1 284",
      evolution: "+8,4%",
      positive: true,
      icon: FiShoppingCart,
      color: "blue",
    },
    {
      title: "Produits",
      value: "486",
      evolution: "+24",
      positive: true,
      icon: FiPackage,
      color: "purple",
    },
    {
      title: "Clients",
      value: "8 492",
      evolution: "-2,1%",
      positive: false,
      icon: FiUsers,
      color: "green",
    },
  ];

  const orders = [
    {
      id: "#CMD-1048",
      customer: "Sophie Martin",
      product: "Lampe moderne",
      amount: "€89,90",
      status: "Livrée",
      statusColor: "green",
    },
    {
      id: "#CMD-1047",
      customer: "Thomas Bernard",
      product: "Chaise design",
      amount: "€149,00",
      status: "En préparation",
      statusColor: "orange",
    },
    {
      id: "#CMD-1046",
      customer: "Emma Dubois",
      product: "Table en bois",
      amount: "€329,90",
      status: "Expédiée",
      statusColor: "blue",
    },
    {
      id: "#CMD-1045",
      customer: "Lucas Morel",
      product: "Lampe murale",
      amount: "€59,90",
      status: "Livrée",
      statusColor: "green",
    },
    {
      id: "#CMD-1044",
      customer: "Julie Robert",
      product: "Miroir décoratif",
      amount: "€119,90",
      status: "Annulée",
      statusColor: "red",
    },
  ];

  const products = [
    {
      name: "Lampe moderne",
      category: "Éclairage",
      sales: 248,
      revenue: "€12 400",
    },
    {
      name: "Chaise design",
      category: "Mobilier",
      sales: 184,
      revenue: "€9 568",
    },
    {
      name: "Lampe murale",
      category: "Éclairage",
      sales: 152,
      revenue: "€7 600",
    },
    {
      name: "Miroir décoratif",
      category: "Décoration",
      sales: 126,
      revenue: "€6 300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <p className="mb-1 text-sm font-medium text-orange-500">
            Vue d'ensemble
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Voici ce qui se passe sur votre boutique aujourd'hui.
          </p>
        </div>

        <div className="flex items-center gap-3">

          <select
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 outline-none transition focus:border-orange-500"
            defaultValue="30"
          >
            <option value="7">7 derniers jours</option>
            <option value="30">30 derniers jours</option>
            <option value="90">3 derniers mois</option>
            <option value="365">Cette année</option>
          </select>

          <button className="rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">
            Télécharger
          </button>

        </div>
      </div>


      {/* ================================================= */}
      {/* STATS */}
      {/* ================================================= */}

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          const colors = {
            orange: "bg-orange-50 text-orange-600",
            blue: "bg-blue-50 text-blue-600",
            purple: "bg-purple-50 text-purple-600",
            green: "bg-emerald-50 text-emerald-600",
          };

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-gray-300 hover:shadow-sm"
            >

              <div className="flex items-start justify-between">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors[stat.color as keyof typeof colors]}`}
                >
                  <Icon size={20} />
                </div>

                <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-900">
                  <FiMoreHorizontal size={18} />
                </button>

              </div>

              <p className="mt-5 text-sm text-gray-500">
                {stat.title}
              </p>

              <div className="mt-1 flex items-end justify-between">

                <p className="text-2xl font-bold tracking-tight text-gray-950">
                  {stat.value}
                </p>

                <div
                  className={`mb-1 flex items-center gap-1 text-xs font-semibold ${
                    stat.positive
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {stat.positive ? (
                    <FiArrowUpRight size={14} />
                  ) : (
                    <FiArrowDownRight size={14} />
                  )}

                  {stat.evolution}
                </div>

              </div>

              <p className="mt-2 text-xs text-gray-400">
                vs période précédente
              </p>

            </div>
          );
        })}

      </div>


      {/* ================================================= */}
      {/* GRAPH + TOP PRODUCTS */}
      {/* ================================================= */}

      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* SALES CHART */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 xl:col-span-2">

          <div className="mb-6 flex items-center justify-between">

            <div>
              <h2 className="font-bold text-gray-950">
                Évolution des ventes
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Chiffre d'affaires des 30 derniers jours
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700">
              Détails
              <FiArrowRight size={15} />
            </button>

          </div>

          {/* Fake chart — à remplacer par Recharts */}
          <div className="relative h-64">

            {/* Y axis */}
            <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-[10px] text-gray-400">
              <span>€4k</span>
              <span>€3k</span>
              <span>€2k</span>
              <span>€1k</span>
              <span>€0</span>
            </div>

            {/* Chart */}
            <div className="ml-10 flex h-full flex-col justify-between">

              <div className="border-t border-dashed border-gray-100" />
              <div className="border-t border-dashed border-gray-100" />
              <div className="border-t border-dashed border-gray-100" />
              <div className="border-t border-dashed border-gray-100" />
              <div className="border-t border-gray-100" />

            </div>

            {/* Area */}
            <div className="absolute bottom-0 left-10 right-0 h-[75%] overflow-hidden">

              <svg
                viewBox="0 0 800 240"
                preserveAspectRatio="none"
                className="h-full w-full"
              >

                <defs>
                  <linearGradient
                    id="salesGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#f97316"
                      stopOpacity="0.25"
                    />

                    <stop
                      offset="100%"
                      stopColor="#f97316"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="
                    M0 190
                    C40 170 55 175 85 155
                    C120 132 135 160 170 130
                    C205 100 220 120 250 105
                    C285 88 310 115 340 95
                    C375 70 390 90 425 65
                    C460 42 475 75 510 58
                    C545 40 565 52 600 35
                    C640 18 655 38 690 28
                    C730 15 750 30 800 8
                    L800 240
                    L0 240
                    Z
                  "
                  fill="url(#salesGradient)"
                />

                <path
                  d="
                    M0 190
                    C40 170 55 175 85 155
                    C120 132 135 160 170 130
                    C205 100 220 120 250 105
                    C285 88 310 115 340 95
                    C375 70 390 90 425 65
                    C460 42 475 75 510 58
                    C545 40 565 52 600 35
                    C640 18 655 38 690 28
                    C730 15 750 30 800 8
                  "
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                />

              </svg>

            </div>

            {/* X axis */}
            <div className="absolute bottom-[-25px] left-10 right-0 flex justify-between text-[10px] text-gray-400">
              <span>01 Août</span>
              <span>07 Août</span>
              <span>14 Août</span>
              <span>21 Août</span>
              <span>29 Août</span>
            </div>

          </div>

        </div>


        {/* TOP PRODUCTS */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>
              <h2 className="font-bold text-gray-950">
                Produits populaires
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Les plus vendus
              </p>
            </div>

            <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-900">
              <FiMoreHorizontal size={18} />
            </button>

          </div>

          <div className="space-y-5">

            {products.map((product, index) => (
              <div
                key={product.name}
                className="flex items-center gap-3"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-sm font-bold text-gray-500">
                  {index + 1}
                </div>

                <div className="min-w-0 flex-1">

                  <p className="truncate text-sm font-semibold text-gray-900">
                    {product.name}
                  </p>

                  <p className="mt-0.5 text-xs text-gray-400">
                    {product.category} · {product.sales} ventes
                  </p>

                </div>

                <p className="text-sm font-bold text-gray-900">
                  {product.revenue}
                </p>

              </div>
            ))}

          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
            Voir tous les produits
            <FiArrowRight size={15} />
          </button>

        </div>

      </div>


      {/* ================================================= */}
      {/* COMMANDES + STOCK */}
      {/* ================================================= */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* ORDERS */}

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white xl:col-span-2">

          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

            <div>
              <h2 className="font-bold text-gray-950">
                Dernières commandes
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Les dernières commandes de votre boutique
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700">
              Voir tout
              <FiArrowRight size={15} />
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-175">

              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50 text-left">

                  <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Commande
                  </th>

                  <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Client
                  </th>

                  <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Produit
                  </th>

                  <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Montant
                  </th>

                  <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Statut
                  </th>

                </tr>
              </thead>

              <tbody>

                {orders.map((order) => {

                  const statusStyles = {
                    green:
                      "bg-emerald-50 text-emerald-600",
                    orange:
                      "bg-orange-50 text-orange-600",
                    blue:
                      "bg-blue-50 text-blue-600",
                    red:
                      "bg-red-50 text-red-600",
                  };

                  return (
                    <tr
                      key={order.id}
                      className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50"
                    >

                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {order.id}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {order.customer}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {order.product}
                      </td>

                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {order.amount}
                      </td>

                      <td className="px-6 py-4">

                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            statusStyles[
                              order.statusColor as keyof typeof statusStyles
                            ]
                          }`}
                        >
                          {order.status}
                        </span>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

        </div>


        {/* STOCK */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>
              <h2 className="font-bold text-gray-950">
                État du stock
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Produits nécessitant votre attention
              </p>
            </div>

            <FiPackage
              size={20}
              className="text-gray-400"
            />

          </div>


          {/* Low stock */}
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-orange-50 p-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <FiAlertTriangle size={18} />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                12 produits
              </p>

              <p className="mt-0.5 text-xs text-gray-500">
                Stock faible
              </p>
            </div>

            <FiArrowRight
              size={16}
              className="ml-auto text-orange-500"
            />

          </div>


          {/* Out of stock */}
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-red-50 p-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
              <FiXCircle size={18} />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                4 produits
              </p>

              <p className="mt-0.5 text-xs text-gray-500">
                Rupture de stock
              </p>
            </div>

            <FiArrowRight
              size={16}
              className="ml-auto text-red-500"
            />

          </div>


          {/* In preparation */}
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-blue-50 p-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <FiClock size={18} />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                18 produits
              </p>

              <p className="mt-0.5 text-xs text-gray-500">
                Réapprovisionnement
              </p>
            </div>

            <FiArrowRight
              size={16}
              className="ml-auto text-blue-500"
            />

          </div>


          {/* Good */}
          <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <FiCheckCircle size={18} />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                462 produits
              </p>

              <p className="mt-0.5 text-xs text-gray-500">
                Stock disponible
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
