import Link from "next/link";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Auberge des Fontaines</h3>
            <p className="mb-4">
              Un restaurant rustique mais élégant niché dans les montagnes des Vosges
              offrant une cuisine authentique et une atmosphère chaleureuse et familiale.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="TripAdvisor"
              >
                <FaTripadvisor size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Horaires d'Ouverture</h3>
            <ul className="space-y-2">
              <li>Lundi: Fermé</li>
              <li>Mardi - Vendredi: 12h00 - 14h00, 19h00 - 22h00</li>
              <li>Samedi: 12h00 - 14h30, 19h00 - 22h30</li>
              <li>Dimanche: 12h00 - 15h00</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Contactez-Nous</h3>
            <address className="not-italic">
              <p className="mb-2">123 Route des Vosges</p>
              <p className="mb-2">88000 Épinal, France</p>
              <p className="mb-2">
                <a
                  href="tel:+33123456789"
                  className="hover:text-accent transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@aubergedesfontaines.com"
                  className="hover:text-accent transition-colors"
                >
                  info@aubergedesfontaines.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Auberge des Fontaines. Tous droits
              réservés.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/about"
                className="text-white hover:text-accent transition-colors"
              >
                À Propos
              </Link>
              <Link
                href="/menu"
                className="text-white hover:text-accent transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/reservations"
                className="text-white hover:text-accent transition-colors"
              >
                Réservations
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
