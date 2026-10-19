import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import Home from "../client/Home";
import NavBar from "../client/NavBar";

import AuthAdmin from "../admin/auth";
import Sidebar from "../admin/Sidebar";

import Dashboard from "../admin/Dashboard";
import Produit from "../admin/product";
import AddProduit from "../admin/product/Add";
import Categorie from "../admin/categories";
import AddCategorie from "../admin/categories/Add";
import Command from "../admin/command";
import Promotion from "../admin/promotion";
import AddPromotion from "../admin/promotion/add";
import Clients from "../admin/clients";
import Statistique from "../admin/statistique";
import Parametre from "../admin/parametre";
import { ToastContainer } from "react-toastify";
import Update from "../admin/product/Update";


function AdminLayout({ children, }: { children: React.ReactNode; }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <header
        className="
          sticky top-0 z-30
          flex h-16 items-center
          border-b border-gray-200
          bg-white
          px-4
          lg:hidden
        "
      >
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          aria-label="Ouvrir le menu"
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            text-gray-600
            transition
            hover:bg-gray-100
            hover:text-gray-950
          "
        >
          <FiMenu size={22} />
        </button>
        <div className="ml-3">
          <div className="text-lg font-black tracking-tight text-gray-950">
            shop<span className="text-orange-500">.</span>
          </div>
          <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Administration qlkdfjlmqskdqslmdkjlmkj
          </div>
        </div>
      </header>
      <main
        className="
          min-h-screen
          lg:ml-72
        "
      >
        {children}
      </main>
    </div>
  );
}
function AppRoutes() {

  const location = useLocation();

  const isAdmin =
    location.pathname.startsWith("/admin");

  const isAdminLogin =
    location.pathname === "/admin/login";


  return (
    <>
      {!isAdmin && <NavBar />}

      {isAdminLogin ? (
        <Routes>
          <Route path="/admin/login" element={<AuthAdmin />} />
        </Routes>
      ) : (
        <Routes>
          {/* ================= CLIENT ================= */}
          <Route path="/" element={<Home />}
          />
          {/* ================= ADMIN ================= */}
          <Route path="/admin/dashboard" element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />


          {/* PRODUITS */}

          <Route
            path="/admin/produits"
            element={
              <AdminLayout>
                <Produit />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/produits/ajouter"
            element={
              <AdminLayout>
                <AddProduit />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/produits/modifier/:id"
            element={
              <AdminLayout>
                <Update />
              </AdminLayout>
            }
          />


          {/* CATEGORIES */}

          <Route
            path="/admin/categories"
            element={
              <AdminLayout>
                <Categorie />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/categories/ajouter"
            element={
              <AdminLayout>
                <AddCategorie />
              </AdminLayout>
            }
          />


          {/* COMMANDES */}

          <Route
            path="/admin/commandes"
            element={
              <AdminLayout>
                <Command />
              </AdminLayout>
            }
          />


          {/* PROMOTIONS */}

          <Route
            path="/admin/promotions"
            element={
              <AdminLayout>
                <Promotion />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/promotions/ajouter"
            element={
              <AdminLayout>
                <AddPromotion />
              </AdminLayout>
            }
          />


          {/* CLIENTS */}

          <Route
            path="/admin/clients"
            element={
              <AdminLayout>
                <Clients />
              </AdminLayout>
            }
          />


          {/* STATISTIQUES */}

          <Route
            path="/admin/statistiques"
            element={
              <AdminLayout>
                <Statistique />
              </AdminLayout>
            }
          />


          {/* PARAMETRES */}

          <Route
            path="/admin/parametres"
            element={
              <AdminLayout>
                <Parametre />
              </AdminLayout>
            }
          />

        </Routes>

      )}

    </>
  );
}


/* =========================================================
   ROUTER
========================================================= */

export default function Navigation() {

  return (
    <Router>
      <AppRoutes />
      <ToastContainer />
    </Router>
  );
}