"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Menu() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Notre Menu
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Découvrez notre cuisine inspirée des montagnes des Vosges, préparée avec des ingrédients locaux et de saison pour une expérience gastronomique authentique.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-transparent opacity-90"></div>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/menu-hero.jpg"
            alt="Plats de saison de l'Auberge des Fontaines"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Menu Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary-dark">
            Notre Philosophie Culinaire
          </h2>
          <p className="text-lg mb-8">
            À l'Auberge des Fontaines, nous croyons que la meilleure cuisine vient d'ingrédients frais et locaux. Notre menu célèbre les saveurs authentiques des Vosges, avec des plats traditionnels réinventés par notre Chef Michel Dubois et son équipe talentueuse.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span>
              Végétarien
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
              Sans Gluten
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-amber-500 mr-1"></span>
              Spécialité Maison
            </span>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section ref={ref} className="py-16 bg-accent bg-opacity-10">
        <div className="container mx-auto px-4">
          {/* Starters */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-10 text-center text-primary-dark">
              Entrées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Terrine de Campagne Maison",
                  description:
                    "Terrine rustique préparée avec du porc fermier local, des herbes fraîches de notre jardin et des pistaches. Servie avec des cornichons et du pain de campagne grillé.",
                  price: "14€",
                  tags: ["amber"],
                  image: "/images/menu/terrine.png",
                },
                {
                  name: "Soupe aux Champignons des Vosges",
                  description:
                    "Velouté crémeux de champignons sauvages cueillis dans les forêts voisines, garni d'huile de truffe et de ciboulette fraîche.",
                  price: "12€",
                  tags: ["green", "blue"],
                  image: "/images/menu/soupe_champignon.png",
                },
                {
                  name: "Salade de Chèvre Chaud",
                  description:
                    "Fromage de chèvre local pané et doré, servi sur un lit de salade mixte avec noix caramélisées, pommes fraîches et vinaigrette au miel des Vosges.",
                  price: "15€",
                  tags: ["green"],
                  image: "/images/menu/salade_chevre.png",
                },
                {
                  name: "Escargots à l'Alsacienne",
                  description:
                    "Escargots traditionnels préparés avec du beurre à l'ail, du persil frais et une touche de Riesling d'Alsace.",
                  price: "16€",
                  tags: ["amber"],
                  image: "/images/menu/escargot.png",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-1/3 h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-bold text-primary-dark">
                          {item.name}
                        </h3>
                        <div className="flex space-x-1 ml-2">
                          {item.tags.includes("green") && (
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                          )}
                          {item.tags.includes("blue") && (
                            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                          )}
                          {item.tags.includes("amber") && (
                            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    </div>
                    <div className="text-lg font-medium text-secondary-dark">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main Courses */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-10 text-center text-primary-dark">
              Plats Principaux
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Coq au Riesling",
                  description:
                    "Notre interprétation de ce classique alsacien : poulet fermier mijoté lentement dans un Riesling local avec champignons, lardons et crème fraîche. Servi avec des spätzle maison.",
                  price: "26€",
                  tags: ["amber"],
                  image: "/images/menu/coq.png",
                },
                {
                  name: "Filet de Truite des Vosges",
                  description:
                    "Truite fraîche de nos rivières locales, poêlée avec du beurre aux amandes et garnie d'herbes fraîches. Accompagnée de pommes de terre grenaille et de légumes de saison.",
                  price: "28€",
                  tags: ["blue"],
                  image: "/images/menu/truite.png",
                },
                {
                  name: "Baeckeoffe Traditionnel",
                  description:
                    "Ragoût traditionnel alsacien de trois viandes (agneau, bœuf et porc) marinées dans du Riesling et cuites lentement avec des pommes de terre, carottes et oignons.",
                  price: "24€",
                  tags: ["amber"],
                  image: "/images/menu/Baeckeoffe.png",
                },
                {
                  name: "Tarte Flambée aux Champignons Sauvages",
                  description:
                    "Notre version végétarienne de la tarte flambée alsacienne, garnie de champignons sauvages, d'oignons caramélisés, de fromage frais et d'huile de truffe.",
                  price: "22€",
                  tags: ["green"],
                  image: "/images/menu/tarte_champignon.png",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-1/3 h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-bold text-primary-dark">
                          {item.name}
                        </h3>
                        <div className="flex space-x-1 ml-2">
                          {item.tags.includes("green") && (
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                          )}
                          {item.tags.includes("blue") && (
                            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                          )}
                          {item.tags.includes("amber") && (
                            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    </div>
                    <div className="text-lg font-medium text-secondary-dark">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Desserts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-10 text-center text-primary-dark">
              Desserts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Tarte aux Myrtilles des Vosges",
                  description:
                    "Tarte traditionnelle aux myrtilles sauvages cueillies dans les montagnes des Vosges, servie tiède avec une boule de glace à la vanille.",
                  price: "10€",
                  tags: ["amber"],
                  image: "/images/menu/tarte_myrtilles.png",
                },
                {
                  name: "Kougelhopf Glacé",
                  description:
                    "Notre interprétation glacée du célèbre gâteau alsacien, parfumé à l'eau de vie de framboise et garni de fruits rouges frais.",
                  price: "12€",
                  tags: [],
                  image: "/images/menu/Kougelhopf.png",
                },
                {
                  name: "Mousse au Chocolat et Kirsch",
                  description:
                    "Mousse au chocolat noir intense légèrement parfumée au kirsch des Vosges, accompagnée de cerises amarena et d'un crumble aux amandes.",
                  price: "11€",
                  tags: ["blue"],
                  image: "/images/menu/Mousse_chocolat.png",
                },
                {
                  name: "Assiette de Fromages Locaux",
                  description:
                    "Sélection de fromages artisanaux des Vosges et d'Alsace, accompagnée de pain aux noix, de miel local et de fruits secs.",
                  price: "14€",
                  tags: ["green"],
                  image: "/images/menu/fromage.png",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-1/3 h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-bold text-primary-dark">
                          {item.name}
                        </h3>
                        <div className="flex space-x-1 ml-2">
                          {item.tags.includes("green") && (
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                          )}
                          {item.tags.includes("blue") && (
                            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                          )}
                          {item.tags.includes("amber") && (
                            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    </div>
                    <div className="text-lg font-medium text-secondary-dark">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wine List Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary bg-opacity-5 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center text-primary-dark">
              Notre Carte des Vins
            </h2>
            <p className="text-lg text-center mb-8">
              Découvrez notre sélection soigneusement élaborée de vins d'Alsace et d'autres régions françaises, parfaitement assortis à notre menu. Demandez à notre sommelier de vous recommander le vin idéal pour accompagner votre repas.
            </p>
            <div className="text-center">
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors inline-block font-medium">
                Voir la Carte des Vins Complète
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-16 bg-accent bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/private-dining.jpg"
                alt="Salle à manger privée de l'Auberge des Fontaines"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary-dark">
                Dîners Privés & Événements
              </h2>
              <p className="text-lg mb-6">
                Pour les occasions spéciales, nous proposons une salle à manger privée élégante pouvant accueillir jusqu'à 20 personnes. Notre chef peut créer un menu personnalisé pour votre événement, mettant en valeur les meilleurs produits de saison.
              </p>
              <p className="text-lg mb-8">
                Que ce soit pour un dîner d'affaires, une célébration familiale ou un événement spécial, notre équipe veillera à ce que votre expérience soit mémorable.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors inline-block font-medium">
                Demander des Informations
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
