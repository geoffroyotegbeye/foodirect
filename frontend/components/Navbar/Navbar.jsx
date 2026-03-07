'use client'

import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
        
        {/* Menu section */}
        <div className="flex justify-center items-center gap-4 md:gap-6">
          <ul className="gap-3 md:gap-6 lg:gap-8 flex text-xs md:text-sm lg:text-base">
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer transition">
              <a href="#accueil" className="block">Accueil</a>
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer transition">
              <a href="#menu" className="block">Spécialités</a>
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer hidden sm:block transition">
              <a href="#services" className="block">Services</a>
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer hidden md:block transition">
              <a href="#commander" className="block">Commander</a>
            </li>
          </ul>
          
          {/* Numéro de téléphone */}
          <a 
            href="tel:+2290191260434" 
            className="hidden lg:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition font-semibold"
          >
            <FaPhone className="text-sm" />
            <span>01 91 26 04 34</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
