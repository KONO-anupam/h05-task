"use client";

import React, { useState } from "react";
import { cn } from "../lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-72 md:h-72 w-72 transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "opacity-50 scale-95"
    )}
  >
    <div className="absolute inset-0">
      <img 
        src={card.src} 
        alt={card.title} 
        className="h-full w-full object-cover"
      />
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
      <h3 className="text-lg font-semibold">{card.title}</h3>
      
      <div className="flex justify-between items-center mt-1">
        <p className="text-sm opacity-90">{card.description}</p>
        
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">★</span>
          <span className="text-sm">{card.rating}</span>
        </div>
      </div>
      
      <p className="font-bold mt-1">{card.price}</p>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);
  
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}