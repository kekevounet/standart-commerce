import {
  FiTrendingUp,
  FiTrendingDown,
  FiShoppingBag,
  FiUsers,
  FiPackage,
  FiDollarSign,
  FiCalendar,
  FiDownload,
} from "react-icons/fi";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { name: "Jan", ventes: 420000, commandes: 42 },
  { name: "Fév", ventes: 580000, commandes: 58 },
  { name: "Mar", ventes: 510000, commandes: 51 },
  { name: "Avr", ventes: 760000, commandes: 76 },
  { name: "Mai", ventes: 690000, commandes: 69 },
  { name: "Juin", ventes: 920000, commandes: 92 },
  { name: "Juil", ventes: 840000, commandes: 84 },
  { name: "Août", ventes: 1080000, commandes: 108 },
];

const categoryData = [
  {
    name: "Éclairage",
    value: 35,
  },
  {
    name: "Maison",
    value: 25,
  },
  {
    name: "Mode",
    value: 18,
  },
  {
    name: "Beauté",
    value: 12,
  },
  {
    name: "Accessoires",
    value: 10,
  },
];

const ordersData = [
  {
    status: "Livrées",
    value: 624,
    color: "#10b981",
  },
  {
    status: "En cours",
    value: 128,
    color: "#3b82f6",
  },
  {
    status: "En attente",
    value: 74,
    color: "#f59e0b",
  },
  {
    status: "Annulées",
    value: 32,
    color: "#ef4444",
  },
];

const topProducts = [
  {
    name: "Lampe murale moderne",
    category: "Éclairage",
    sales: 128,
    revenue: "1 280 000 Ar",
  },
  {
    name: "Ampoule LED Premium",
    category: "Éclairage",
    sales: 104,
    revenue: "780 000 Ar",
  },
  {
    name: "Sac à main cuir",
    category: "Accessoires",
    sales: 87,
    revenue: "696 000 Ar",
  },
  {
    name: "Décoration murale",
    category: "Maison",
    sales: 73,
    revenue: "584 000 Ar",
  },
  {
    name: "Montre classique",
    category: "Accessoires",
    sales: 61,
    revenue: "549 000 Ar",
  },
];

const COLORS = [
  "#f97316",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
];

function formatMoney(value: number) {
  return `${value.toLocaleString("fr-FR")} Ar`;
}

export default function Statistique() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

        <div>
          <p className="mb-1 text-sm font-medium text-orange-500">
            Analyse
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Statistiques
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Analysez les performances de votre marketplace.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">

          <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-600 transition hover:bg-gray-50">
            <FiCalendar size={16} />
            01 - 31 Août 2026
          </button>

          <button className="flex h-11 items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 text-sm font-semibold text-white transition hover:bg-gray-800">
            <FiDownload size={16} />
            Exporter
          </button>

        </div>

      </div>


      {/* ================================================= */}
      {/* STAT CARDS */}
      {/* ================================================= */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Revenue */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Chiffre d'affaires
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                1 080 000 Ar
              </p>

              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                <FiTrendingUp size={13} />
                +18,4 %
                <span className="font-normal text-gray-400">
                  vs mois dernier
                </span>
              </div>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FiDollarSign size={20} />
            </div>

          </div>

        </div>


        {/* Orders */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Commandes
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                108
              </p>

              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                <FiTrendingUp size={13} />
                +12,7 %
                <span className="font-normal text-gray-400">
                  vs mois dernier
                </span>
              </div>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiShoppingBag size={20} />
            </div>

          </div>

        </div>


        {/* Clients */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Nouveaux clients
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                86
              </p>

              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                <FiTrendingUp size={13} />
                +9,8 %
                <span className="font-normal text-gray-400">
                  vs mois dernier
                </span>
              </div>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <FiUsers size={20} />
            </div>

          </div>

        </div>


        {/* Products */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Produits vendus
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-950">
                453
              </p>

              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-red-500">
                <FiTrendingDown size={13} />
                -3,2 %
                <span className="font-normal text-gray-400">
                  vs mois dernier
                </span>
              </div>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <FiPackage size={20} />
            </div>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* SALES CHART */}
      {/* ================================================= */}

      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6">

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="font-bold text-gray-950">
              Évolution des ventes
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Chiffre d'affaires généré au cours des derniers mois.
            </p>
          </div>

          <select
            defaultValue="8"
            className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-600 outline-none"
          >
            <option value="8">
              8 derniers mois
            </option>

            <option value="12">
              Cette année
            </option>

            <option value="24">
              2 dernières années
            </option>
          </select>

        </div>

        <div className="h-[350px] w-full">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={salesData}>

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
                    stopOpacity={0.25}
                  />

                  <stop
                    offset="100%"
                    stopColor="#f97316"
                    stopOpacity={0}
                  />
                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f1f5f9"
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "#94a3b8",
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "#94a3b8",
                }}
                tickFormatter={(value) =>
                  `${value / 1000}k`
                }
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)",
                }}
                formatter={(value) => [
                  formatMoney(Number(value)),
                  "Ventes",
                ]}
              />

              <Area
                type="monotone"
                dataKey="ventes"
                stroke="#f97316"
                strokeWidth={3}
                fill="url(#salesGradient)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* ================================================= */}
      {/* SECOND ROW */}
      {/* ================================================= */}

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

        {/* Category */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

          <div className="mb-5">

            <h2 className="font-bold text-gray-950">
              Ventes par catégorie
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Répartition du chiffre d'affaires.
            </p>

          </div>

          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">

            <div className="h-[240px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >

                    {categoryData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index]}
                      />
                    ))}

                  </Pie>

                  <Tooltip
                    formatter={(value) => [
                      `${value}%`,
                      "Ventes",
                    ]}
                  />

                </PieChart>

              </ResponsiveContainer>

            </div>


            <div className="space-y-4">

              {categoryData.map((category, index) => (

                <div
                  key={category.name}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-2">

                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          COLORS[index],
                      }}
                    />

                    <span className="text-xs text-gray-600">
                      {category.name}
                    </span>

                  </div>

                  <span className="text-xs font-bold text-gray-900">
                    {category.value}%
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* Orders */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

          <div className="mb-6">

            <h2 className="font-bold text-gray-950">
              État des commandes
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Vue globale des commandes.
            </p>

          </div>

          <div className="space-y-5">

            {ordersData.map((order) => {

              const total = ordersData.reduce(
                (sum, item) => sum + item.value,
                0
              );

              const percentage =
                (order.value / total) * 100;

              return (
                <div key={order.status}>

                  <div className="mb-2 flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            order.color,
                        }}
                      />

                      <span className="text-xs font-medium text-gray-600">
                        {order.status}
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <span className="text-xs font-bold text-gray-900">
                        {order.value}
                      </span>

                      <span className="text-[11px] text-gray-400">
                        ({percentage.toFixed(1)}%)
                      </span>

                    </div>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">

                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor:
                          order.color,
                      }}
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* TOP PRODUCTS */}
      {/* ================================================= */}

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

        <div className="flex flex-col gap-2 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <h2 className="font-bold text-gray-950">
              Produits les plus vendus
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Les produits qui génèrent le plus de ventes.
            </p>

          </div>

          <button className="text-xs font-semibold text-orange-600 hover:text-orange-700">
            Voir tous les produits
          </button>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70 text-left">

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Produit
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Catégorie
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Ventes
                </th>

                <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Chiffre d'affaires
                </th>

              </tr>

            </thead>


            <tbody>

              {topProducts.map((product, index) => (

                <tr
                  key={product.name}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-gray-500">
                        #{index + 1}
                      </div>

                      <span className="text-sm font-semibold text-gray-800">
                        {product.name}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-4">

                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600">
                      {product.category}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <span className="text-sm font-semibold text-gray-700">
                      {product.sales}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <span className="text-sm font-bold text-gray-900">
                      {product.revenue}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
