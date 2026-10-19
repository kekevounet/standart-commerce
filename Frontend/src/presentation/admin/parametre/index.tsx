import { RiStore3Fill } from "react-icons/ri"; 
import {
  FiUser,
  FiLock,
  FiBell,
  FiCreditCard,
  FiTruck,
  FiGlobe,
  FiShield,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSave,
  FiEye,
  FiEyeOff,
  FiCheck,
  FiAlertTriangle,
} from "react-icons/fi";

import { useState } from "react";

type Section =
  | "general"
  | "account"
  | "security"
  | "notifications"
  | "payment"
  | "shipping"
  | "appearance";

export default function Parametre() {
  const [activeSection, setActiveSection] =
    useState<Section>("general");

  const [showPassword, setShowPassword] =
    useState(false);

  const [notifications, setNotifications] = useState({
    newOrder: true,
    newClient: true,
    lowStock: true,
    promotion: false,
    email: true,
    sms: false,
  });

  const sections = [
    {
      id: "general" as Section,
      label: "Général",
      description: "Informations de la boutique",
      icon: RiStore3Fill,
    },
    {
      id: "account" as Section,
      label: "Compte",
      description: "Profil administrateur",
      icon: FiUser,
    },
    {
      id: "security" as Section,
      label: "Sécurité",
      description: "Mot de passe et accès",
      icon: FiShield,
    },
    {
      id: "notifications" as Section,
      label: "Notifications",
      description: "Alertes et notifications",
      icon: FiBell,
    },
    {
      id: "payment" as Section,
      label: "Paiements",
      description: "Méthodes de paiement",
      icon: FiCreditCard,
    },
    {
      id: "shipping" as Section,
      label: "Livraison",
      description: "Options de livraison",
      icon: FiTruck,
    },
    {
      id: "appearance" as Section,
      label: "Apparence",
      description: "Personnalisation",
      icon: FiGlobe,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mb-8">

        <p className="mb-1 text-sm font-medium text-orange-500">
          Administration
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-gray-950">
          Paramètres
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Configurez votre boutique, votre compte et les
          préférences de la plateforme.
        </p>

      </div>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[270px_1fr]">

        {/* ================================================= */}
        {/* SETTINGS SIDEBAR */}
        {/* ================================================= */}

        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-3">

          <div className="mb-3 px-3 py-2">

            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Paramètres
            </p>

          </div>

          <div className="space-y-1">

            {sections.map((section) => {

              const Icon = section.icon;

              const active =
                activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() =>
                    setActiveSection(section.id)
                  }
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                    active
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      active
                        ? "bg-orange-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-sm font-semibold">
                      {section.label}
                    </p>

                    <p
                      className={`mt-0.5 truncate text-[11px] ${
                        active
                          ? "text-orange-400"
                          : "text-gray-400"
                      }`}
                    >
                      {section.description}
                    </p>

                  </div>

                </button>
              );
            })}

          </div>


          {/* Status */}

          <div className="mt-4 border-t border-gray-100 pt-4">

            <div className="rounded-xl bg-emerald-50 p-3">

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <FiCheck size={14} />
                </div>

                <div>

                  <p className="text-xs font-semibold text-emerald-700">
                    Boutique opérationnelle
                  </p>

                  <p className="mt-0.5 text-[10px] text-emerald-600">
                    Tous les services fonctionnent
                  </p>

                </div>

              </div>

            </div>

          </div>

        </aside>


        {/* ================================================= */}
        {/* SETTINGS CONTENT */}
        {/* ================================================= */}

        <main className="min-w-0">

          {/* ================================================= */}
          {/* GENERAL */}
          {/* ================================================= */}

          {activeSection === "general" && (

            <SettingsCard
              title="Informations générales"
              description="Les informations principales de votre boutique."
            >

              <div className="space-y-6">

                {/* Logo */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Logo de la boutique
                  </label>

                  <div className="flex items-center gap-4">

                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-bold text-white">
                      M
                    </div>

                    <div>

                      <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                        Modifier le logo
                      </button>

                      <p className="mt-2 text-[11px] text-gray-400">
                        PNG, JPG ou WEBP. Maximum 2 MB.
                      </p>

                    </div>

                  </div>

                </div>


                {/* Name */}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <Input
                    label="Nom de la boutique"
                    value="Marketplace"
                  />

                  <Input
                    label="Nom commercial"
                    value="Marketplace Madagascar"
                  />

                </div>


                {/* Description */}

                <Textarea
                  label="Description de la boutique"
                  value="Votre marketplace en ligne pour découvrir des produits de qualité."
                />


                {/* Contact */}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <Input
                    label="Email"
                    value="contact@marketplace.mg"
                    icon={<FiMail size={15} />}
                  />

                  <Input
                    label="Téléphone"
                    value="+261 34 00 000 00"
                    icon={<FiPhone size={15} />}
                  />

                </div>


                {/* Address */}

                <Input
                  label="Adresse"
                  value="Antananarivo, Madagascar"
                  icon={<FiMapPin size={15} />}
                />


                {/* Currency */}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <Select
                    label="Devise"
                    value="MGA — Ariary"
                    options={[
                      "MGA — Ariary",
                      "EUR — Euro",
                      "USD — Dollar américain",
                    ]}
                  />

                  <Select
                    label="Langue"
                    value="Français"
                    options={[
                      "Français",
                      "English",
                      "Malagasy",
                    ]}
                  />

                </div>

              </div>

              <SaveButton />

            </SettingsCard>

          )}


          {/* ================================================= */}
          {/* ACCOUNT */}
          {/* ================================================= */}

          {activeSection === "account" && (

            <SettingsCard
              title="Compte administrateur"
              description="Gérez les informations personnelles du compte administrateur."
            >

              <div className="space-y-6">

                {/* Profile */}

                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-950 text-lg font-bold text-white">
                    AD
                  </div>

                  <div>

                    <p className="font-bold text-gray-900">
                      Administrateur
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Super administrateur
                    </p>

                    <button className="mt-2 text-xs font-semibold text-orange-600 hover:text-orange-700">
                      Modifier la photo
                    </button>

                  </div>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <Input
                    label="Prénom"
                    value="Admin"
                  />

                  <Input
                    label="Nom"
                    value="Marketplace"
                  />

                </div>


                <Input
                  label="Adresse email"
                  value="admin@marketplace.mg"
                  icon={<FiMail size={15} />}
                />


                <Input
                  label="Téléphone"
                  value="+261 34 00 000 00"
                  icon={<FiPhone size={15} />}
                />

              </div>

              <SaveButton />

            </SettingsCard>

          )}


          {/* ================================================= */}
          {/* SECURITY */}
          {/* ================================================= */}

          {activeSection === "security" && (

            <div className="space-y-6">

              <SettingsCard
                title="Sécurité du compte"
                description="Protégez votre compte administrateur."
              >

                <div className="space-y-5">

                  <PasswordInput
                    label="Mot de passe actuel"
                    show={showPassword}
                    setShow={setShowPassword}
                  />

                  <PasswordInput
                    label="Nouveau mot de passe"
                    show={showPassword}
                    setShow={setShowPassword}
                  />

                  <PasswordInput
                    label="Confirmer le nouveau mot de passe"
                    show={showPassword}
                    setShow={setShowPassword}
                  />

                </div>

                <SaveButton label="Changer le mot de passe" />

              </SettingsCard>


              {/* 2FA */}

              <SettingsCard
                title="Authentification à deux facteurs"
                description="Ajoutez une couche de sécurité supplémentaire."
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <FiShield size={18} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-gray-800">
                        Authentification à deux facteurs
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Votre compte est actuellement protégé par
                        votre mot de passe.
                      </p>

                    </div>

                  </div>

                  <Toggle enabled={false} />

                </div>

              </SettingsCard>


              {/* Sessions */}

              <SettingsCard
                title="Sessions actives"
                description="Les appareils actuellement connectés à votre compte."
              >

                <div className="rounded-xl border border-gray-100 p-4">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm font-semibold text-gray-800">
                        Chrome · Windows
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Antananarivo · Session actuelle
                      </p>

                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                      Actuelle
                    </span>

                  </div>

                </div>

              </SettingsCard>

            </div>

          )}


          {/* ================================================= */}
          {/* NOTIFICATIONS */}
          {/* ================================================= */}

          {activeSection === "notifications" && (

            <SettingsCard
              title="Notifications"
              description="Choisissez les notifications que vous souhaitez recevoir."
            >

              <div className="space-y-2">

                <Notification
                  title="Nouvelle commande"
                  description="Recevoir une notification lorsqu'une commande est passée."
                  enabled={notifications.newOrder}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      newOrder:
                        !notifications.newOrder,
                    })
                  }
                />

                <Notification
                  title="Nouveau client"
                  description="Être informé lorsqu'un nouveau client crée un compte."
                  enabled={notifications.newClient}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      newClient:
                        !notifications.newClient,
                    })
                  }
                />

                <Notification
                  title="Stock faible"
                  description="Recevoir une alerte lorsqu'un produit arrive bientôt à épuisement."
                  enabled={notifications.lowStock}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      lowStock:
                        !notifications.lowStock,
                    })
                  }
                />

                <Notification
                  title="Promotions"
                  description="Recevoir des informations concernant les promotions et campagnes."
                  enabled={notifications.promotion}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      promotion:
                        !notifications.promotion,
                    })
                  }
                />

              </div>


              <div className="my-6 border-t border-gray-100" />


              <h3 className="mb-3 text-sm font-bold text-gray-900">
                Canaux de notification
              </h3>

              <div className="space-y-2">

                <Notification
                  title="Email"
                  description="Recevoir les notifications par email."
                  enabled={notifications.email}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      email:
                        !notifications.email,
                    })
                  }
                />

                <Notification
                  title="SMS"
                  description="Recevoir les notifications importantes par SMS."
                  enabled={notifications.sms}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      sms:
                        !notifications.sms,
                    })
                  }
                />

              </div>

              <SaveButton />

            </SettingsCard>

          )}


          {/* ================================================= */}
          {/* PAYMENT */}
          {/* ================================================= */}

          {activeSection === "payment" && (

            <SettingsCard
              title="Paiements"
              description="Configurez les méthodes de paiement disponibles."
            >

              <div className="space-y-4">

                <PaymentMethod
                  name="Carte bancaire"
                  description="Visa, Mastercard et autres cartes."
                  enabled={true}
                />

                <PaymentMethod
                  name="Mobile Money"
                  description="MVola, Orange Money et Airtel Money."
                  enabled={true}
                />

                <PaymentMethod
                  name="Paiement à la livraison"
                  description="Le client paie lors de la réception."
                  enabled={false}
                />

                <PaymentMethod
                  name="Virement bancaire"
                  description="Paiement directement depuis le compte bancaire."
                  enabled={false}
                />

              </div>


              <div className="mt-6 rounded-xl bg-orange-50 p-4">

                <div className="flex gap-3">

                  <FiAlertTriangle
                    className="mt-0.5 shrink-0 text-orange-600"
                    size={17}
                  />

                  <p className="text-xs leading-5 text-orange-700">
                    Les informations de paiement doivent être
                    configurées avant d'activer une méthode de
                    paiement pour vos clients.
                  </p>

                </div>

              </div>

              <SaveButton />

            </SettingsCard>

          )}


          {/* ================================================= */}
          {/* SHIPPING */}
          {/* ================================================= */}

          {activeSection === "shipping" && (

            <SettingsCard
              title="Livraison"
              description="Configurez les options et les frais de livraison."
            >

              <div className="space-y-6">

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <Input
                    label="Frais de livraison standard"
                    value="5 000"
                  />

                  <Input
                    label="Livraison gratuite à partir de"
                    value="100 000"
                  />

                </div>


                <Select
                  label="Zone principale"
                  value="Antananarivo"
                  options={[
                    "Antananarivo",
                    "Tout Madagascar",
                    "International",
                  ]}
                />


                <div>

                  <label className="mb-3 block text-sm font-semibold text-gray-800">
                    Méthodes de livraison
                  </label>

                  <div className="space-y-3">

                    <PaymentMethod
                      name="Livraison standard"
                      description="Livraison sous 2 à 5 jours ouvrés."
                      enabled={true}
                    />

                    <PaymentMethod
                      name="Livraison express"
                      description="Livraison prioritaire sous 24 à 48 heures."
                      enabled={true}
                    />

                    <PaymentMethod
                      name="Retrait en boutique"
                      description="Le client récupère directement sa commande."
                      enabled={false}
                    />

                  </div>

                </div>

              </div>

              <SaveButton />

            </SettingsCard>

          )}


          {/* ================================================= */}
          {/* APPEARANCE */}
          {/* ================================================= */}

          {activeSection === "appearance" && (

            <SettingsCard
              title="Apparence"
              description="Personnalisez l'apparence de votre marketplace."
            >

              <div className="space-y-6">

                <div>

                  <label className="mb-3 block text-sm font-semibold text-gray-800">
                    Thème
                  </label>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                    <ThemeOption
                      title="Clair"
                      active={true}
                      type="light"
                    />

                    <ThemeOption
                      title="Sombre"
                      active={false}
                      type="dark"
                    />

                    <ThemeOption
                      title="Système"
                      active={false}
                      type="system"
                    />

                  </div>

                </div>


                <div>

                  <label className="mb-3 block text-sm font-semibold text-gray-800">
                    Couleur principale
                  </label>

                  <div className="flex flex-wrap gap-3">

                    {[
                      "#f97316",
                      "#ef4444",
                      "#8b5cf6",
                      "#3b82f6",
                      "#10b981",
                      "#0f172a",
                    ].map((color) => (

                      <button
                        key={color}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200"
                        style={{
                          backgroundColor: color,
                        }}
                      >
                        {color === "#f97316" && (
                          <FiCheck
                            size={16}
                            className="text-white"
                          />
                        )}
                      </button>

                    ))}

                  </div>

                </div>


                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Nom affiché dans la navigation
                  </label>

                  <Input
                    label=""
                    value="Marketplace"
                  />

                </div>

              </div>

              <SaveButton />

            </SettingsCard>

          )}

        </main>

      </div>

    </div>
  );
}


/* ================================================= */
/* SETTINGS CARD */
/* ================================================= */

function SettingsCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

      <div className="border-b border-gray-100 px-6 py-5">

        <h2 className="font-bold text-gray-950">
          {title}
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          {description}
        </p>

      </div>

      <div className="p-6">
        {children}
      </div>

    </section>
  );
}


/* ================================================= */
/* INPUT */
/* ================================================= */

function Input({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>

      {label && (
        <label className="mb-2 block text-sm font-semibold text-gray-800">
          {label}
        </label>
      )}

      <div className="relative">

        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <input
          type="text"
          defaultValue={value}
          className={`h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100 ${
            icon ? "pl-10" : ""
          }`}
        />

      </div>

    </div>
  );
}


/* ================================================= */
/* TEXTAREA */
/* ================================================= */

function Textarea({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-gray-800">
        {label}
      </label>

      <textarea
        defaultValue={value}
        rows={4}
        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
      />

    </div>
  );
}


/* ================================================= */
/* SELECT */
/* ================================================= */

function Select({
  label,
  value,
  options,
}: {
  label: string;
  value: string;
  options: string[];
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-gray-800">
        {label}
      </label>

      <select
        defaultValue={value}
        className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      >

        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}


/* ================================================= */
/* PASSWORD */
/* ================================================= */

function PasswordInput({
  label,
  show,
  setShow,
}: {
  label: string;
  show: boolean;
  setShow: (value: boolean) => void;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-gray-800">
        {label}
      </label>

      <div className="relative">

        <input
          type={show ? "text" : "password"}
          placeholder="••••••••••••"
          className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-12 text-sm outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
          {show ? (
            <FiEyeOff size={17} />
          ) : (
            <FiEye size={17} />
          )}
        </button>

      </div>

    </div>
  );
}


/* ================================================= */
/* TOGGLE */
/* ================================================= */

function Toggle({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        enabled
          ? "bg-orange-500"
          : "bg-gray-200"
      }`}
    >

      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
          enabled
            ? "left-6"
            : "left-1"
        }`}
      />

    </button>
  );
}


/* ================================================= */
/* NOTIFICATION */
/* ================================================= */

function Notification({
  title,
  description,
  enabled,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 p-4">

      <div className="min-w-0">

        <p className="text-sm font-semibold text-gray-800">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-400">
          {description}
        </p>

      </div>

      <Toggle
        enabled={enabled}
        onClick={onChange}
      />

    </div>
  );
}


/* ================================================= */
/* PAYMENT METHOD */
/* ================================================= */

function PaymentMethod({
  name,
  description,
  enabled,
}: {
  name: string;
  description: string;
  enabled: boolean;
}) {
  const [active, setActive] = useState(enabled);

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 p-4">

      <div className="flex min-w-0 items-center gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
          <FiCreditCard size={17} />
        </div>

        <div>

          <p className="text-sm font-semibold text-gray-800">
            {name}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            {description}
          </p>

        </div>

      </div>

      <Toggle
        enabled={active}
        onClick={() => setActive(!active)}
      />

    </div>
  );
}


/* ================================================= */
/* THEME */
/* ================================================= */

function ThemeOption({
  title,
  active,
  type,
}: {
  title: string;
  active: boolean;
  type: "light" | "dark" | "system";
}) {
  return (
    <button
      className={`rounded-xl border-2 p-3 text-left transition ${
        active
          ? "border-orange-500 bg-orange-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >

      <div
        className={`mb-3 h-20 rounded-lg ${
          type === "light"
            ? "bg-white shadow-sm"
            : type === "dark"
            ? "bg-gray-900"
            : "bg-gradient-to-r from-white via-white to-gray-900"
        }`}
      />

      <div className="flex items-center justify-between">

        <span className="text-xs font-semibold text-gray-700">
          {title}
        </span>

        {active && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white">
            <FiCheck size={12} />
          </span>
        )}

      </div>

    </button>
  );
}


/* ================================================= */
/* SAVE BUTTON */
/* ================================================= */

function SaveButton({
  label = "Enregistrer les modifications",
}: {
  label?: string;
}) {
  return (
    <div className="mt-8 flex justify-end border-t border-gray-100 pt-5">

      <button className="flex h-11 items-center gap-2 rounded-xl bg-gray-950 px-5 text-sm font-semibold text-white transition hover:bg-gray-800">

        <FiSave size={16} />

        {label}

      </button>

    </div>
  );
}
