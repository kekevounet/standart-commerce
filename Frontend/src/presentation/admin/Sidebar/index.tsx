import {
  FiGrid,
  FiPackage,
  FiShoppingCart,
  FiLayers,
  FiUsers,
  FiTag,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  open = false,
  onClose,
}: SidebarProps) {
  const menuSections = [
    {
      title: "Principal",
      items: [
        {
          label: "Dashboard",
          icon: FiGrid,
          path: "/admin/dashboard",
          end: true,
        },
        {
          label: "Commandes",
          icon: FiShoppingCart,
          path: "/admin/commandes",
        },
      ],
    },

    {
      title: "Catalogue",
      items: [
        {
          label: "Produits",
          icon: FiPackage,
          path: "/admin/produits",
        },
        {
          label: "Catégories",
          icon: FiLayers,
          path: "/admin/categories",
        },
        {
          label: "Promotions",
          icon: FiTag,
          path: "/admin/promotions",
        },
      ],
    },

    {
      title: "Utilisateurs",
      items: [
        {
          label: "Clients",
          icon: FiUsers,
          path: "/admin/clients",
        },
      ],
    },

    {
      title: "Analyse",
      items: [
        {
          label: "Statistiques",
          icon: FiBarChart2,
          path: "/admin/statistiques",
        },
      ],
    },
  ];

  return (
    <>
      {/* ================================================= */}
      {/* OVERLAY MOBILE */}
      {/* ================================================= */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]
          transition-opacity duration-300
          lg:hidden
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />


      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-dvh w-[280px] flex-col
          border-r border-gray-200 bg-white
          shadow-xl
          transition-transform duration-300 ease-in-out

          lg:w-72
          lg:translate-x-0
          lg:shadow-none

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-gray-100 px-5 sm:h-20 sm:px-6">

          <div className="min-w-0">

            <div className="text-2xl font-black tracking-tight text-gray-950">
              shop<span className="text-orange-500">.</span>
            </div>

            <div className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400 sm:text-[10px]">
              Administration
            </div>

          </div>


          {/* Close mobile */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-lg text-gray-500
              transition
              hover:bg-gray-100 hover:text-gray-900
              lg:hidden
            "
          >
            <FiX size={20} />
          </button>

        </div>


        {/* ================================================= */}
        {/* MENU */}
        {/* ================================================= */}

        <nav
          className="
            min-h-0 flex-1 overflow-y-auto
            px-3 py-5
            sm:px-4 sm:py-6
          "
        >

          {menuSections.map((section) => (

            <div
              key={section.title}
              className="mb-6 last:mb-0 sm:mb-7"
            >

              {/* Section title */}

              <p
                className="
                  mb-2 px-3
                  text-[9px] font-bold uppercase
                  tracking-[0.15em]
                  text-gray-400
                  sm:text-[10px]
                "
              >
                {section.title}
              </p>


              {/* Items */}

              <div className="space-y-1">

                {section.items.map((item) => {

                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.end}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `
                        group flex w-full items-center
                        rounded-xl
                        px-3 py-2.5
                        text-sm font-medium
                        transition-all duration-200

                        ${
                          isActive
                            ? "bg-orange-50 text-orange-600"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                        }

                        sm:py-3
                        `
                      }
                    >

                      {({ isActive }) => (
                        <>

                          {/* Icon */}

                          <span
                            className={`
                              flex h-9 w-9 shrink-0
                              items-center justify-center
                              rounded-lg
                              transition-all duration-200

                              ${
                                isActive
                                  ? "bg-orange-500 text-white shadow-sm shadow-orange-200"
                                  : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-900"
                              }
                            `}
                          >
                            <Icon size={17} />
                          </span>


                          {/* Label */}

                          <span className="ml-3 truncate">
                            {item.label}
                          </span>


                          {/* Arrow */}

                          <FiChevronRight
                            size={15}
                            className={`
                              ml-auto shrink-0
                              transition-all duration-200

                              ${
                                isActive
                                  ? "text-orange-400"
                                  : "text-gray-300 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100"
                              }
                            `}
                          />

                        </>
                      )}

                    </NavLink>
                  );
                })}

              </div>

            </div>

          ))}

        </nav>


        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <div
          className="
            shrink-0
            border-t border-gray-100
            p-3
            sm:p-4
          "
        >

          {/* ================================================= */}
          {/* ADMIN PROFILE */}
          {/* ================================================= */}

          <div
            className="
              mb-2 flex items-center
              rounded-xl bg-gray-50
              p-2.5
              sm:p-3
            "
          >

            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                bg-gray-950
                text-sm font-bold text-white
              "
            >
              A
            </div>


            <div className="ml-3 min-w-0">

              <p className="truncate text-sm font-semibold text-gray-900">
                Administrateur
              </p>

              <p className="truncate text-xs text-gray-400">
                admin@shop.com
              </p>

            </div>

          </div>


          {/* ================================================= */}
          {/* SETTINGS */}
          {/* ================================================= */}

          <NavLink
            to="/admin/parametres"
            onClick={onClose}
            className={({ isActive }) =>
              `
              flex items-center
              rounded-xl
              px-3 py-2.5
              text-sm font-medium
              transition
              sm:py-3

              ${
                isActive
                  ? "bg-gray-100 text-gray-950"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-950"
              }
              `
            }
          >

            <FiSettings
              size={18}
              className="shrink-0"
            />

            <span className="ml-3">
              Paramètres
            </span>

          </NavLink>


          {/* ================================================= */}
          {/* LOGOUT */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("admin_token");

              window.location.href =
                "/admin/login";
            }}
            className="
              mt-1 flex w-full items-center
              rounded-xl
              px-3 py-2.5
              text-sm font-medium
              text-gray-500
              transition
              hover:bg-red-50
              hover:text-red-600
              sm:py-3
            "
          >

            <FiLogOut
              size={18}
              className="shrink-0"
            />

            <span className="ml-3">
              Déconnexion
            </span>

          </button>

        </div>

      </aside>
    </>
  );
}