"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [mapRef, mapInView] = useInView({
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
              Contactez-Nous
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Nous sommes impatients de vous accueillir à l'Auberge des Fontaines. Contactez-nous pour réserver une table, organiser un événement ou simplement poser une question.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-transparent opacity-90"></div>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contact-hero.jpg"
            alt="L'entrée accueillante de l'Auberge des Fontaines"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={formRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              className={formInView ? "visible" : ""}
              initial={{ opacity: 0, x: -50 }}
              animate={
                formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary-dark">
                Envoyez-nous un Message
              </h2>
              <p className="text-lg mb-8">
                Que ce soit pour une réservation, une demande d'informations ou des commentaires, nous sommes là pour vous aider. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="event">Événement privé</option>
                    <option value="inquiry">Demande d'informations</option>
                    <option value="feedback">Commentaires</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors inline-block font-medium"
                  >
                    Envoyer le Message
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              className={formInView ? "visible" : ""}
              initial={{ opacity: 0, x: 50 }}
              animate={
                formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary-dark">
                Informations de Contact
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-secondary-dark">
                    Adresse
                  </h3>
                  <p className="text-gray-700">
                    Auberge des Fontaines<br />
                    42 Route des Montagnes<br />
                    88400 Gérardmer, France
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-secondary-dark">
                    Téléphone
                  </h3>
                  <p className="text-gray-700">+33 3 29 XX XX XX</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-secondary-dark">
                    Email
                  </h3>
                  <p className="text-gray-700">contact@aubergedesfontaines.fr</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-secondary-dark">
                    Horaires d'Ouverture
                  </h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>Lundi: Fermé</li>
                    <li>Mardi - Vendredi: 12h00 - 14h00, 19h00 - 22h00</li>
                    <li>Samedi: 12h00 - 14h30, 19h00 - 22h30</li>
                    <li>Dimanche: 12h00 - 15h00</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-primary hover:text-primary-dark transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary-dark transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary-dark transition-colors"
                    aria-label="TripAdvisor"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.006 8.737c-1.595 0-2.903 1.301-2.903 2.88 0 1.591 1.308 2.895 2.903 2.895 1.592 0 2.889-1.304 2.889-2.895.001-1.579-1.297-2.88-2.889-2.88zm0 4.528c-.904 0-1.635-.717-1.635-1.633 0-.904.731-1.616 1.635-1.616.891 0 1.621.712 1.621 1.616 0 .917-.73 1.633-1.621 1.633zm7.177-1.606c0-1.592-1.307-2.897-2.896-2.897-1.59 0-2.889 1.305-2.889 2.897 0 1.578 1.299 2.882 2.889 2.882 1.589 0 2.896-1.304 2.896-2.882zm-2.896 1.634c-.903 0-1.634-.718-1.634-1.634 0-.904.731-1.618 1.634-1.618.903 0 1.634.714 1.634 1.618 0 .916-.731 1.634-1.634 1.634zm-4.287-7.247c-6.573 0-12 5.42-12 11.994 0 6.572 5.427 11.991 12 11.991 6.574 0 12.006-5.419 12.006-11.991 0-6.574-5.432-11.994-12.006-11.994zm0 22.715c-5.948 0-10.725-4.78-10.725-10.721 0-5.952 4.777-10.731 10.725-10.731 5.954 0 10.724 4.779 10.724 10.731 0 5.941-4.77 10.721-10.724 10.721zm-5.291-10.735c0 1.591 1.305 2.898 2.896 2.898 1.589 0 2.888-1.307 2.888-2.898 0-1.578-1.299-2.881-2.888-2.881-1.591 0-2.896 1.303-2.896 2.881zm2.896-1.634c.902 0 1.634.717 1.634 1.634 0 .904-.732 1.621-1.634 1.621-.903 0-1.634-.717-1.634-1.621 0-.917.731-1.634 1.634-1.634z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        ref={mapRef}
        className="py-16 bg-accent bg-opacity-10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className={mapInView ? "visible" : ""}
            initial={{ opacity: 0, y: 50 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-primary-dark">
              Comment Nous Trouver
            </h2>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10611.077075281063!2d6.8626!3d48.0718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4793a15e8b5c7d11%3A0x409ce34b30ab930!2sG%C3%A9rardmer%2C%20France!5e0!3m2!1sen!2sus!4v1625764298760!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Carte de l'Auberge des Fontaines"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4 text-primary-dark">
                  Directions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-secondary-dark mb-2">
                      En Voiture
                    </h4>
                    <p className="text-gray-700">
                      Depuis Strasbourg (2h) : Suivez l'A35 puis la D415 en direction de Colmar, puis continuez sur la D417 vers Gérardmer. L'Auberge des Fontaines est située à 3 km au nord de Gérardmer, sur la Route des Montagnes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-dark mb-2">
                      En Train
                    </h4>
                    <p className="text-gray-700">
                      La gare la plus proche est celle de Saint-Dié-des-Vosges (30 km). Des services de taxi sont disponibles à la gare, ou contactez-nous à l'avance pour organiser un transfert.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-dark mb-2">
                      Stationnement
                    </h4>
                    <p className="text-gray-700">
                      Un parking gratuit est disponible sur place pour tous nos clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-primary-dark">
            Questions Fréquemment Posées
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Dois-je réserver une table à l'avance ?",
                answer:
                  "Oui, nous recommandons vivement de réserver, surtout pour les dîners et les week-ends. Vous pouvez réserver par téléphone ou via notre formulaire de réservation en ligne.",
              },
              {
                question: "Proposez-vous des options végétariennes ou pour régimes spéciaux ?",
                answer:
                  "Absolument. Notre menu comprend plusieurs options végétariennes, et nous pouvons accommoder la plupart des besoins diététiques avec un préavis. Veuillez nous informer de vos exigences lors de votre réservation.",
              },
              {
                question: "Pouvez-vous organiser des événements privés ou des célébrations ?",
                answer:
                  "Oui, nous disposons d'une salle privée pouvant accueillir jusqu'à 20 personnes pour des dîners ou des événements. Notre chef peut créer un menu personnalisé pour votre occasion spéciale. Contactez-nous pour plus de détails.",
              },
              {
                question: "Y a-t-il des activités à proximité ?",
                answer:
                  "L'Auberge des Fontaines est idéalement située pour explorer les montagnes des Vosges. Des sentiers de randonnée commencent juste derrière notre propriété, et le lac de Gérardmer est à seulement 3 km. Nous serons ravis de vous conseiller sur les activités locales.",
              },
              {
                question: "Acceptez-vous les animaux de compagnie ?",
                answer:
                  "Nous accueillons les chiens bien élevés dans certaines zones de notre restaurant. Veuillez nous informer lors de votre réservation si vous souhaitez amener votre animal de compagnie.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-accent bg-opacity-5 rounded-lg p-6"
              >
                <h3 className="text-xl font-medium mb-3 text-primary-dark">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
