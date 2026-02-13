'use client'

import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div id="apropos" className="container py-10 md:py-14 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* img section */}
          <div className="flex justify-center items-center order-2 md:order-1">
            <Image 
              src="/assets/2.png"
              alt="FOODIRECT Restaurant" 
              width={500}
              height={500}
              className="w-full max-w-[300px] md:max-w-full"
            />
          </div>
          {/* text section */}
          <div className="flex flex-col justify-center text-center md:text-left order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Une Cuisine Propre et Authentique
            </h1>
            <p className="text-sm md:text-base font-semibold leading-relaxed">
              Chez FOODIRECT, nous vous garantissons une cuisine béninoise traditionnelle 
              préparée dans le respect des normes d'hygiène. Notre service de livraison 
              est disponible pour vous apporter nos délicieux plats directement à votre bureau 
              ou à domicile dans la zone de Ganhi et ses environs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
