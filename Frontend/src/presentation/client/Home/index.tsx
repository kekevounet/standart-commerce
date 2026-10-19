import {
  FiHeart,
  FiChevronRight,
  FiArrowRight,
} from "react-icons/fi";

const interests = [
  {
    title: "Décoration murale",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
  },
  {
    title: "Bijoux faits main",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600",
  },
  {
    title: "Mode & accessoires",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600",
  },
  {
    title: "Cadeaux personnalisés",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600",
  },
];

const categories = [
  {
    title: "Maison",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500",
  },
  {
    title: "Bijoux",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500",
  },
  {
    title: "Vêtements",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500",
  },
  {
    title: "Cadeaux",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
  },
  {
    title: "Mariage",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500",
  },
  {
    title: "Art",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=500",
  },
];

const products = [
  {
    title: "Panier personnalisé fait main",
    price: "24,90 €",
    oldPrice: "34,90 €",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700",
  },
  {
    title: "Collier minimaliste doré",
    price: "19,90 €",
    oldPrice: "29,90 €",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700",
  },
  {
    title: "Bougie artisanale parfumée",
    price: "14,50 €",
    oldPrice: "20,00 €",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=700",
  },
  {
    title: "Décoration murale moderne",
    price: "32,00 €",
    oldPrice: "45,00 €",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700",
  },
  {
    title: "Sac en toile personnalisé",
    price: "18,90 €",
    oldPrice: "25,90 €",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700",
  },
  {
    title: "Affiche artistique",
    price: "12,90 €",
    oldPrice: "18,90 €",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988e5?w=700",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}


      {/* HERO */}
      <section className="mx-auto max-w-350 px-6 py-8">

        <div className="grid min-h-110 overflow-hidden rounded-2xl bg-[#f7e8dc] lg:grid-cols-2">

          <div className="flex flex-col justify-center px-8 py-14 md:px-16">

            <span className="mb-4 text-sm font-bold uppercase tracking-widest text-orange-700">
              Découvrez l'original
            </span>

            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              Des créations uniques pour des personnes uniques.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-700">
              Trouvez des objets faits main, personnalisés et originaux
              créés par des vendeurs indépendants.
            </p>

            <div className="mt-8">
              <button className="rounded-full bg-gray-900 px-7 py-3.5 font-semibold text-white transition hover:bg-gray-700">
                Découvrir maintenant
              </button>
            </div>
          </div>

          <div className="relative min-h-87.5">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200"
              alt="Collection"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 rounded-xl bg-white px-5 py-4 shadow-lg">
              <p className="text-sm font-semibold">
                Sélection du moment
              </p>
              <p className="text-sm text-gray-600">
                Des trouvailles qui sortent de l'ordinaire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="mx-auto max-w-350 px-6 py-12">

        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Découvrez selon vos envies
          </h2>

          <button className="flex items-center gap-2 text-sm font-semibold hover:underline">
            Tout découvrir
            <FiArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {interests.map((item) => (
            <div key={item.title} className="group cursor-pointer">

              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3 font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY */}
      <section className="bg-[#f8f8f5] py-14">

        <div className="mx-auto max-w-350 px-6">

          <h2 className="mb-8 text-2xl font-bold">
            Trouvez votre univers
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

            {categories.map((category) => (
              <div
                key={category.title}
                className="group cursor-pointer text-center"
              >
                <div className="mx-auto aspect-square overflow-hidden rounded-full">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <p className="mt-4 font-semibold">
                  {category.title}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* DEALS */}
      <section className="mx-auto max-w-350 px-6 py-14">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-orange-600">
              BONNES AFFAIRES
            </p>

            <h2 className="text-3xl font-bold">
              Les offres du moment
            </h2>
          </div>

          <button className="hidden items-center gap-2 font-semibold hover:underline md:flex">
            Voir toutes les offres
            <FiChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">

          {products.map((product) => (
            <article
              key={product.title}
              className="group cursor-pointer"
            >

              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button
                  className="absolute right-3 top-3 rounded-full bg-white p-2.5 shadow-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiHeart size={18} />
                </button>

                <span className="absolute bottom-3 left-3 rounded-full bg-green-700 px-3 py-1 text-xs font-bold text-white">
                  -25%
                </span>
              </div>

              <div className="pt-3">

                <h3 className="line-clamp-2 text-sm leading-5">
                  {product.title}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="font-bold">
                    {product.price}
                  </span>

                  <span className="text-xs text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                <div className="mt-1 text-xs text-gray-500">
                  ★ 4,8 · Livraison gratuite
                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="mx-auto max-w-350 px-6 pb-14">

        <div className="grid overflow-hidden rounded-2xl bg-[#dcebe2] md:grid-cols-2">

          <div className="flex flex-col justify-center px-8 py-12 md:px-14">

            <span className="text-sm font-bold uppercase tracking-widest text-green-800">
              Créateurs indépendants
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Achetez moins ordinaire.
            </h2>

            <p className="mt-4 max-w-lg text-gray-700">
              Soutenez les créateurs et découvrez des pièces que vous ne
              trouverez nulle part ailleurs.
            </p>

            <button className="mt-7 w-fit rounded-full bg-gray-900 px-6 py-3 font-semibold text-white">
              Explorer les créations
            </button>

          </div>

          <div className="min-h-75">
            <img
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200"
              alt="Créateur"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* BLOG / INSPIRATION */}
      <section className="border-t border-gray-200 py-14">

        <div className="mx-auto max-w-350 px-6">

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Inspiration
            </h2>

            <button className="font-semibold hover:underline">
              Voir toutes les idées
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Comment créer une maison qui vous ressemble",
                image:
                  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900",
              },
              {
                title: "Les cadeaux personnalisés qui font vraiment plaisir",
                image:
                  "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=900",
              },
              {
                title: "Les tendances artisanales à découvrir",
                image:
                  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900",
              },
            ].map((article) => (
              <article
                key={article.title}
                className="group cursor-pointer"
              >

                <div className="aspect-16/10 overflow-hidden rounded-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-lg font-bold leading-7">
                  {article.title}
                </h3>

                <button className="mt-3 flex items-center gap-2 text-sm font-semibold">
                  Lire l'article
                  <FiArrowRight />
                </button>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-[#f7f3ef] py-14">

        <div className="mx-auto max-w-300 px-6 text-center">

          <h2 className="text-3xl font-bold">
            Pourquoi acheter ici ?
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-3">

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                ✦
              </div>

              <h3 className="mt-4 font-bold">
                Des produits uniques
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Découvrez des créations originales que vous ne trouverez
                pas dans les magasins traditionnels.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                ♡
              </div>

              <h3 className="mt-4 font-bold">
                Des créateurs passionnés
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Achetez directement auprès de personnes qui créent avec
                passion.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                ✓
              </div>

              <h3 className="mt-4 font-bold">
                Un achat en toute confiance
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Une expérience simple et sécurisée pour vos achats.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gray-900 px-6 py-14 text-white">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-bold">
            Recevez nos meilleures trouvailles
          </h2>

          <p className="mt-3 text-gray-300">
            Inspirations, nouveautés et offres directement dans votre boîte
            mail.
          </p>

          <div className="mx-auto mt-7 flex max-w-xl overflow-hidden rounded-full bg-white">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 text-gray-900 outline-none"
            />

            <button className="bg-orange-600 px-7 font-semibold text-white">
              S'inscrire
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#25201e] text-white">

        <div className="mx-auto grid max-w-350 gap-10 px-6 py-14 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold text-orange-500">
              marketplace
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Une marketplace dédiée aux produits uniques, créatifs et
              personnalisés.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Acheter</h4>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p className="cursor-pointer hover:text-white">Catégories</p>
              <p className="cursor-pointer hover:text-white">Cadeaux</p>
              <p className="cursor-pointer hover:text-white">Promotions</p>
              <p className="cursor-pointer hover:text-white">Nouveautés</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold">À propos</h4>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p className="cursor-pointer hover:text-white">Notre histoire</p>
              <p className="cursor-pointer hover:text-white">Nos créateurs</p>
              <p className="cursor-pointer hover:text-white">Carrières</p>
              <p className="cursor-pointer hover:text-white">Blog</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Aide</h4>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p className="cursor-pointer hover:text-white">Centre d'aide</p>
              <p className="cursor-pointer hover:text-white">
                Livraison et retours
              </p>
              <p className="cursor-pointer hover:text-white">
                Confidentialité
              </p>
              <p className="cursor-pointer hover:text-white">
                Conditions générales
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-350 flex-col gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Marketplace. Tous droits réservés.</p>

            <div className="flex gap-5">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>Pinterest</span>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}
