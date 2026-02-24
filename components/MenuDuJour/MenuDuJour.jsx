'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const platsDuJour = [
  {
    id: 1,
    name: "Riz au Gras Créole",
    price: "800",
    image: "/assets/3.png",
    description: "Notre spécialité la plus appréciée"
  },
  {
    id: 2,
    name: "Igname et Jus d'Œuf",
    price: "500",
    image: "/assets/4.png",
    description: "Un plat réconfortant du terroir"
  },
  {
    id: 3,
    name: "Couscous Garni",
    price: "700",
    image: "/assets/5.png",
    description: "Préparé comme à la maison"
  }
];

const MenuDuJour = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  return (
    <div id="menu-du-jour" className="container py-10 md:py-14 px-4">
      <SectionTitle 
        title="Menu du Jour" 
        subtitle="Les plats les plus populaires du terroir béninois"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {platsDuJour.map((plat, index) => (
          <div
            key={plat.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white/50 p-4 md:p-5 lg:p-6 rounded-3xl hover:shadow-xl transition-all duration-500 group"
          >
            <div className="overflow-hidden rounded-full mb-4">
              <Image
                src={plat.image}
                alt={plat.name}
                width={240}
                height={240}
                className="w-48 sm:w-40 md:w-52 lg:w-[240px] mx-auto object-cover rounded-full img-shadow group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-red-500 text-sm">⭐⭐⭐⭐⭐</p>
              <p className="text-base md:text-lg font-semibold">{plat.name}</p>
              <p className="text-xs md:text-sm text-gray-700">{plat.description}</p>
              <p className="text-lg md:text-xl font-semibold text-primary">{plat.price} FCFA</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDuJour;
