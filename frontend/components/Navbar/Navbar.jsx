'use client'

import React, { useState, useEffect } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 lg:py-4 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-md'
      }`}>
        <div className="container flex justify-between items-center px-4">
          {/* logo section */}
          <div>
            <a href="#accueil" className="text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer">
              FOO<span className="text-primary">DIRECT</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center gap-4 md:gap-6">
            <ul className="gap-3 md:gap-6 lg:gap-8 flex text-xs md:text-sm lg:text-base">
              <li className="hover:border-b-2 border-primary uppercase cursor-pointer transition">
                <a href="#accueil" className="block">Accueil</a>
              </li>
              <li className="hover:border-b-2 border-primary uppercase cursor-pointer transition">
                <a href="#menu" className="block">Spécialités</a>
              </li>
              <li className="hover:border-b-2 border-primary uppercase cursor-pointer transition">
                <a href="#services" className="block">Services</a>
              </li>
              <li className="hover:border-b-2 border-primary uppercase cursor-pointer transition">
                <a href="#commander" className="block">Commander</a>
              </li>
            </ul>
            
            {/* Numéro de téléphone Desktop */}
            <a 
              href="tel:+2290191260434" 
              className="hidden lg:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition font-semibold"
            >
              <FaPhone className="text-sm" />
              <span>01 91 26 04 34</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl text-gray-700 hover:text-primary transition z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <ul className="space-y-6">
            <li>
              <a
                href="#accueil"
                onClick={closeMobileMenu}
                className="block text-lg font-semibold text-gray-700 hover:text-primary transition"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={closeMobileMenu}
                className="block text-lg font-semibold text-gray-700 hover:text-primary transition"
              >
                Spécialités
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="block text-lg font-semibold text-gray-700 hover:text-primary transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#commander"
                onClick={closeMobileMenu}
                className="block text-lg font-semibold text-gray-700 hover:text-primary transition"
              >
                Commander
              </a>
            </li>
          </ul>

          {/* Numéro de téléphone Mobile */}
          <div className="mt-8">
            <a 
              href="tel:+2290191260434" 
              className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-full hover:bg-primary/90 transition font-semibold"
            >
              <FaPhone className="text-sm" />
              <span>01 91 26 04 34</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
