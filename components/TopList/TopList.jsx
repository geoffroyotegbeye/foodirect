'use client'

import React from "react";
import Image from "next/image";

const FoodData = [
  {
    image: "/assets/3.png",
    rating: "⭐⭐⭐⭐⭐",
    price: "800 FCFA",
    name: "Riz au Gras Créole",
    desc: "Notre spécialité la plus appréciée, un riz savoureux avec un assaisonnement riche et authentique.",
  },
  {
    image: "/assets/4.png",
    rating: "⭐⭐⭐⭐⭐",
    price: "500 FCFA",
    name: "Igname et Jus d&apos;Œuf",
    desc: "Un plat réconfortant typique du terroir béninois, parfait pour bien démarrer la journée.",
  },
  {
    image: "/assets/5.png",
    rating: "⭐⭐⭐⭐⭐",
    price: "700 FCFA",
    name: "Couscous Garni",
    desc: "Servi avec une sauce légumes ou tomate bien garnie, préparé comme à la maison.",
  },
];

const TopList = () => {
  return (
    <div id="menu" className="container py-10 md:py-14 px-4">
      {/* header section */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">Nos Spécialités</h1>
        <p className="text-sm md:text-base mt-2">Les plats les plus populaires du terroir béninois</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-4 md:p-5 lg:p-6 rounded-3xl hover:scale-105 md:hover:scale-110 transition duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={240}
              height={240}
              className="w-48 sm:w-40 md:w-52 lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2 mt-4">
              <p className="text-red-500 text-sm">{item.rating}</p>
              <p className="text-base md:text-lg font-semibold">{item.name}</p>
              <p className="text-xs md:text-sm text-gray-700">{item.desc}</p>
              <p className="text-lg md:text-xl font-semibold text-primary">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
