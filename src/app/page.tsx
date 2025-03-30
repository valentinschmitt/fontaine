"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [eventsRef, eventsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0">
          <Image
            src="/images/auberge.png"
            alt="Extérieur de l&#39;Auberge des Fontaines avec vue sur la montagne"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl"
          >
            Savourez la Tradition au Cœur des Vosges
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 max-w-2xl"
          >
            Découvrez l&apos;élégance rustique et la cuisine authentique dans notre
            ferme restaurée nichée au cœur des magnifiques montagnes des Vosges
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/reservations"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md text-lg transition-colors inline-block"
            >
              Réserver une Table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary-dark">
              Bienvenue à l&apos;Auberge des Fontaines
            </h2>
            <p className="text-lg mb-8">
              Nichée au cœur des montagnes des Vosges, l&apos;Auberge des Fontaines
              vous offre une expérience culinaire unique qui allie le charme rustique
              à une cuisine raffinée. Notre restaurant est aménagé dans une ferme
              soigneusement restaurée qui préserve le caractère authentique de la région
              tout en offrant une atmosphère chaleureuse et accueillante pour nos convives.
            </p>
            <Link
              href="/about"
              className="text-primary hover:text-primary-dark font-medium transition-colors inline-flex items-center"
            >
              Découvrir Notre Histoire
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section
        ref={featuredRef}
        className="section-padding bg-accent bg-opacity-10"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-primary-dark">
            Nos Plats Signatures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Coq au Riesling",
                description:
                  "Notre version alsacienne du classique, avec du poulet local mijoté lentement dans du vin Riesling avec des champignons et de la crème.",
                image: "/images/coq.png",
              },
              {
                title: "Tarte Flambée",
                description:
                  "Flammekueche traditionnelle alsacienne garnie de crème fraîche, d&apos;oignons finement tranchés et de lardons fumés de notre producteur local.",
                image: "/images/tarte_flambée.png",
              },
              {
                title: "Baeckeoffe",
                description:
                  "Une savoureuse terrine de viandes marinées, pommes de terre et légumes, mijotée lentement dans un plat en céramique scellé avec du vin blanc d&apos;Alsace.",
                image: "/images/Baeckeoffe.png",
              },
            ].map((dish, index) => (
              <motion.div
                key={dish.title}
                className={`bg-white rounded-lg overflow-hidden shadow-md ${
                  featuredInView ? "visible" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  featuredInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative h-64">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary-dark">
                    {dish.title}
                  </h3>
                  <p className="text-gray-700">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors inline-block"
            >
              Voir Notre Carte Complète
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        className="section-padding bg-white"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className={experienceInView ? "visible" : ""}
              initial={{ opacity: 0, x: -50 }}
              animate={
                experienceInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary-dark">
                Vivez l&apos;Expérience des Vosges
              </h2>
              <p className="text-lg mb-6">
                Dînez dans notre intérieur chaleureux avec un feu de cheminée
                crépitant pendant les mois d&apos;hiver, ou profitez des vues
                panoramiques sur les montagnes depuis nos terrasses extérieures
                en été. Notre restaurant vous offre une expérience véritablement
                immersive dans la beauté naturelle de la région des Vosges.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary-dark mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Salle intérieure avec ambiance chaleureuse de cheminée</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary-dark mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Terrasses extérieures avec vues panoramiques sur les montagnes</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary-dark mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Aménagements familiaux incluant une aire de jeux pour enfants
                    et une mini ferme pédagogique
                  </span>
                </li>
              </ul>
              <Link
                href="/experience"
                className="text-primary hover:text-primary-dark font-medium transition-colors inline-flex items-center"
              >
                Explorer Nos Espaces
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              className={`relative h-[500px] rounded-lg overflow-hidden ${
                experienceInView ? "visible" : ""
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={
                experienceInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/terasse.png"
                alt="Terrasse extérieure avec vue sur la montagne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seasonal Events Section */}
      <section
        ref={eventsRef}
        className="section-padding bg-primary bg-opacity-5"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-primary-dark">
            Spécialités Saisonnières & Événements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Soirées Fondue d&apos;Hiver",
                description:
                  "Tous les jeudis en hiver, dégustez notre fondue spéciale aux fromages locaux accompagnée de vins régionaux sélectionnés.",
                date: "Décembre - Mars",
                image: "/images/fondue.png",
              },
              {
                title: "Barbecues d&apos;Été en Terrasse",
                description:
                  "Rejoignez-nous sur notre terrasse pour des barbecues le week-end mettant en vedette des viandes locales et des légumes de notre jardin.",
                date: "Juin - Août",
                image: "/images/barbecue.png",
              },
              {
                title: "Menu Festival des Récoltes",
                description:
                  "Célébrez les récoltes d&apos;automne avec notre menu spécial mettant en valeur les champignons de saison, le gibier et les produits frais.",
                date: "Septembre - Octobre",
                image: "/images/recolte.png",
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                className={`bg-white rounded-lg overflow-hidden shadow-md ${
                  eventsInView ? "visible" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  eventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-secondary-dark mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary-dark">
                    {event.title}
                  </h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Prêt à Vivre l&apos;Expérience de l&apos;Auberge des Fontaines ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Réservez votre table dès aujourd&apos;hui et plongez dans le charme rustique
            et les délices culinaires des montagnes des Vosges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/reservations"
              className="bg-white text-primary-dark hover:bg-accent hover:text-primary-dark px-6 py-3 rounded-md transition-colors inline-block font-medium"
            >
              Réserver une Table
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white hover:bg-white hover:text-primary-dark px-6 py-3 rounded-md transition-colors inline-block font-medium"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
