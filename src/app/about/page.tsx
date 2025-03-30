"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [historyRef, historyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Découvrez l'histoire, les valeurs et les personnes qui font de l'Auberge des
              Fontaines un lieu emblématique de la gastronomie dans les montagnes des Vosges.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-transparent opacity-90"></div>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about-hero.jpg"
            alt="Photo historique de l'Auberge des Fontaines"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* History Section */}
      <section
        ref={historyRef}
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className={`relative h-[500px] rounded-lg overflow-hidden ${
                historyInView ? "visible" : ""
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={
                historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/farmhouse-history.jpg"
                alt="Ferme historique devenue l'Auberge des Fontaines"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              className={historyInView ? "visible" : ""}
              initial={{ opacity: 0, x: 50 }}
              animate={
                historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary-dark">
                Histoire de l'Auberge des Fontaines
              </h2>
              <div className="space-y-4">
                <p>
                  L'histoire de l'Auberge des Fontaines commence en 1892, lorsque la
                  famille Dubois a construit une ferme traditionnelle au cœur des
                  montagnes des Vosges. Pendant des générations, la ferme a servi à la fois
                  de maison familiale et d'exploitation agricole, la famille élevant du bétail
                  et cultivant les terres environnantes.
                </p>
                <p>
                  En 1978, Jean-Pierre et Marie Dubois, la troisième génération à
                  hériter de la propriété, ont décidé de transformer une partie de la
                  ferme en un petit restaurant, servant des plats traditionnels
                  préparés avec des ingrédients de leur ferme et des producteurs voisins.
                </p>
                <p>
                  Ce qui a commencé comme une modeste salle à manger avec seulement six tables
                  a rapidement gagné en popularité auprès des habitants et des visiteurs.
                  La réputation du restaurant pour sa cuisine authentique et son accueil
                  chaleureux s'est répandue dans toute la région, conduisant à plusieurs
                  agrandissements au fil des ans.
                </p>
                <p>
                  Aujourd'hui, sous la direction du Chef Michel Dubois et de son épouse
                  Sophie, l'Auberge des Fontaines est devenue une destination culinaire
                  qui honore ses racines rustiques tout en embrassant la gastronomie moderne.
                  La structure originale de la ferme a été soigneusement préservée et restaurée,
                  conservant le caractère authentique qui en a fait un lieu emblématique
                  des montagnes des Vosges.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy & Values Section */}
      <section
        ref={valuesRef}
        className="section-padding bg-accent bg-opacity-10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary-dark">
              Notre Philosophie & Nos Valeurs
            </h2>
            <p className="text-lg">
              À l'Auberge des Fontaines, notre approche de l'hospitalité et de la cuisine
              est guidée par un ensemble de valeurs fondamentales qui sont restées
              inchangées depuis notre création.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local & Saisonnier",
                description:
                  "Nous nous approvisionnons auprès de fermes et producteurs locaux, garantissant fraîcheur et soutien à notre communauté. Notre menu évolue avec les saisons pour mettre en valeur le meilleur que la région a à offrir.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-secondary-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Traditions Authentiques",
                description:
                  "Nous préservons et célébrons le patrimoine culinaire de la région des Vosges, préparant des plats traditionnels avec respect pour les techniques ancestrales tout en y ajoutant notre touche créative.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-secondary-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
              {
                title: "Hospitalité Chaleureuse",
                description:
                  "Nous croyons en la création d'un environnement accueillant où chaque invité se sent comme un membre de notre famille. Notre service est attentif, personnalisé et authentique, reflétant la chaleur de notre communauté montagnarde.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-secondary-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className={`bg-white rounded-lg p-8 shadow-md ${
                  valuesInView ? "visible" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-4 text-primary-dark text-center">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section
        ref={teamRef}
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-primary-dark">
            Rencontrez Notre Équipe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michel Dubois",
                role: "Chef & Propriétaire",
                bio: "Quatrième génération Dubois, Michel s'est formé à Paris avant de revenir au restaurant familial. Il combine techniques traditionnelles et approches innovantes pour créer les plats signatures de l'Auberge des Fontaines.",
                image: "/images/chef-michel.jpg",
              },
              {
                name: "Sophie Dubois",
                role: "Directrice du Restaurant",
                bio: "Avec une formation en gestion hôtelière, Sophie supervise les opérations quotidiennes du restaurant. Son souci du détail et sa personnalité chaleureuse garantissent à chaque invité une expérience mémorable.",
                image: "/images/manager-sophie.jpg",
              },
              {
                name: "Antoine Laurent",
                role: "Sous-Chef",
                bio: "Né et élevé dans la région des Vosges, Antoine apporte une connaissance approfondie des ingrédients locaux et des recettes traditionnelles. Sa passion pour la cueillette ajoute des éléments sauvages uniques à nos menus saisonniers.",
                image: "/images/chef-antoine.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className={`${teamInView ? "visible" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-1 text-primary-dark">
                      {member.name}
                    </h3>
                    <p className="text-secondary-dark font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary bg-opacity-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary-dark">
            Vivez Notre Tradition
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez-nous à l'Auberge des Fontaines pour découvrir notre mélange unique de
            charme rustique, cuisine authentique et hospitalité chaleureuse.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/menu"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors inline-block font-medium"
            >
              Découvrir Notre Menu
            </Link>
            <Link
              href="/reservations"
              className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition-colors inline-block font-medium"
            >
              Réserver une Table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
