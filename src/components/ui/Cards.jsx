"use client";
import React, { useState } from "react";
import { cn } from "../lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div className="flex flex-col">
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900  overflow-hidden h-72 md:h-72 w-[296px] transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && ""
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute w-full h-full inset-0"
        
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl  md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>

    <div className="mt-2  w-[296px]">
      <p className="text-black mt-1 font-satoshi text-[20px] font-semibol leading-none">{card.description}</p>
      <div className="flex gap-2 items-center mt-1">
        <span className="text-sm mr-1">★</span>
        <div className="text-sm font-satoshi text-gray-600">{card.rating}</div>
      </div>
      <div  className="text-black font-satoshi text-base mt-1 font-bold leading-none">{card.price}</div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-8 h-max w-max mx-auto my-10 md:px-8">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
