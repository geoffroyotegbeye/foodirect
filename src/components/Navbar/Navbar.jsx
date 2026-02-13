import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-3 lg:py-6">
      <div className="container flex justify-between items-center px-4">
        {/* logo section */}
        <div>
          <a href="#accueil" className="text-2xl md:text-3xl lg:text-4xl font-semibold cursor-pointer">
            FOO<span className="text-primary">DIRECT</span>
          </a>
        </div>
        {/* Menu section */}
        <div className="flex justify-center items-center">
          <ul className="gap-3 md:gap-6 lg:gap-8 flex text-xs md:text-sm lg:text-base">
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
              <a href="#accueil" className="block">Accueil</a>
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
              <a href="#menu" className="block">Menu</a>
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer hidden sm:block">
              <a href="#services" className="block">Services</a>
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer hidden sm:block">
              <a href="#apropos" className="block">À Propos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
