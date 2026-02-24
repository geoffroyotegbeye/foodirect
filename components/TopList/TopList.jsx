'use client'

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { menuCategories } from "../../data/menuData";
import SectionTitle from "../SectionTitle/SectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TopList = () => {
  const [activeCategory, setActiveCategory] = useState('repas');
  const rowsRef = useRef([]);

  useEffect(() => {
    // Animation GSAP pour les lignes - très douce
    rowsRef.current.forEach((row, index) => {
      if (row) {
        gsap.fromTo(
          row,
          { 
            opacity: 0, 
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, [activeCategory]);

  const currentMenu = menuCategories[activeCategory] || [];

  return (
    <div id="menu" className="container py-10 md:py-14 px-4">
      <SectionTitle 
        title="Nos Spécialités" 
        subtitle="Faites votre choix"
      />

      {/* Filtres de catégories */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
        <button
          onClick={() => setActiveCategory('repas')}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === 'repas'
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-white/70 text-gray-700 hover:bg-white hover:shadow-md'
          }`}
        >
          🍽️ Repas
        </button>
        <button
          onClick={() => setActiveCategory('desserts')}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === 'desserts'
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-white/70 text-gray-700 hover:bg-white hover:shadow-md'
          }`}
        >
          🍰 Desserts
        </button>
        <button
          onClick={() => setActiveCategory('extras')}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === 'extras'
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-white/70 text-gray-700 hover:bg-white hover:shadow-md'
          }`}
        >
          🥤 Extras
        </button>
      </div>

      {/* Liste du menu en lignes */}
      <div className="max-w-5xl mx-auto space-y-4">
        {currentMenu.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (rowsRef.current[index] = el)}
            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row items-center gap-4 p-4">
              {/* Image */}
              <div className="flex-shrink-0 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full img-shadow group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {item.featured && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    ⭐
                  </div>
                )}
              </div>

              {/* Nom et composition */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {item.description}
                </p>
                {item.note && (
                  <p className="text-xs text-blue-600 italic mt-1">
                    ℹ️ {item.note}
                  </p>
                )}
              </div>

              {/* Prix */}
              <div className="flex-shrink-0 text-center md:text-right">
                <p className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
                  {item.price} FCFA
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
