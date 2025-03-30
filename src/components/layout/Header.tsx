"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className={`font-serif text-2xl font-bold text-primary-dark ${
            !isScrolled ? "bg-[#fffdf5] px-4 py-2 rounded-md" : ""
          }`}>
            Auberge des Fontaines
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: "Accueil", href: "/" },
            { name: "À Propos", href: "/about" },
            { name: "Menu", href: "/menu" },
            { name: "Expérience", href: "/experience" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
          >
            Réserver une Table
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={isScrolled ? "text-gray-800" : "text-white"}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { name: "Accueil", href: "/" },
              { name: "À Propos", href: "/about" },
              { name: "Menu", href: "/menu" },
              { name: "Expérience", href: "/experience" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-800 hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/reservations"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Réserver une Table
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
