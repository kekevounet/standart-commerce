import { useState } from "react";
import type{ FormEvent } from "react";
import { FiLock, FiMail, FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // À remplacer par ton endpoint Laravel
      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Email ou mot de passe incorrect."
        );
      }

      // Exemple :
      // localStorage.setItem("admin_token", data.token);

      window.location.href = "/admin/dashboard";
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="text-3xl font-black tracking-tight text-white">
            shop<span className="text-orange-500">.</span>
          </div>

          <p className="mt-2 text-sm text-gray-400">
            Administration
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">

          <div className="mb-7">
            <h1 className="text-2xl font-bold text-white">
              Connexion administrateur
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Connectez-vous pour accéder au panneau d'administration.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Adresse email
              </label>

              <div className="flex h-12 items-center rounded-xl border border-gray-700 bg-gray-800 px-4 transition focus-within:border-orange-500">

                <FiMail
                  size={18}
                  className="shrink-0 text-gray-500"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Mot de passe
              </label>

              <div className="flex h-12 items-center rounded-xl border border-gray-700 bg-gray-800 px-4 transition focus-within:border-orange-500">

                <FiLock
                  size={18}
                  className="shrink-0 text-gray-500"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-gray-500 transition hover:text-white"
                >
                  {showPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-orange-500 hover:text-orange-400"
              >
                Mot de passe oublié ?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>

          </form>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-600">
          Accès réservé aux administrateurs
        </p>

      </div>
    </main>
  );
}