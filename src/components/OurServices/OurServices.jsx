import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const OurServices = () => {
  return (
    <div id="services" className="container py-10 md:py-12 px-4">
      {/* header section */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">Nos Atouts</h1>
      </div>
      {/* icons section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 p-4 bg-white/30 rounded-lg hover:bg-white/50 transition">
          <FaMobileScreen className="text-3xl md:text-2xl text-primary" />
          <p className="text-sm md:text-base lg:text-xl font-semibold text-center md:text-left">
            Dès 500 FCFA
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 p-4 bg-white/30 rounded-lg hover:bg-white/50 transition">
          <MdOutlineFastfood className="text-3xl md:text-2xl text-primary" />
          <p className="text-sm md:text-base lg:text-xl font-semibold text-center md:text-left">
            Cuisine Locale
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 p-4 bg-white/30 rounded-lg hover:bg-white/50 transition">
          <MdFoodBank className="text-3xl md:text-2xl text-primary" />
          <p className="text-sm md:text-base lg:text-xl font-semibold text-center md:text-left">
            Hygiène Pro
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 p-4 bg-white/30 rounded-lg hover:bg-white/50 transition">
          <CiDeliveryTruck className="text-3xl md:text-2xl text-primary" />
          <p className="text-sm md:text-base lg:text-xl font-semibold text-center md:text-left">
            Livraison Rapide
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
