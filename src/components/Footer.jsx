"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { footerData } from "./constants";

// --- Card Component ---
const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div className="flex flex-col">
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-72 md:h-72 w-[296px] transition-all duration-300 ease-out",
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
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>

    <div className="mt-2 w-[296px]">
      <p className="text-black mt-1 font-satoshi text-[20px] font-semibol leading-none">
        {card.description}
      </p>
      <div className="flex gap-2 items-center mt-1">
        <span className="text-sm mr-1">★</span>
        <div className="text-sm font-satoshi text-gray-600">{card.rating}</div>
      </div>
      <div className="text-black font-satoshi text-base mt-1 font-bold leading-none">
        {card.price}
      </div>
    </div>
  </div>
));
Card.displayName = "Card";

// --- FocusCards Component ---
const FocusCards = ({ cards }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-max w-max mx-auto my-10 md:px-8">
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
};

// --- Footer Component ---
const socialIcons = [
  {
    id: 1,
    icon: <FaTwitter />,
  },
  {
    id: 2,
    icon: <FaFacebookF />,
  },
  {
    id: 3,
    icon: <FaInstagram />,
  },
  {
    id: 4,
    icon: <FaGithub />,
  },
];

const Footer = () => {
  return (
    <footer className="content-grid full-width -z-[1] divide-y-2 bg-shade-200 py-14 pt-36 text-sm text-black/60">
      <div className="flex items-start justify-between gap-6 py-8 max-lg:flex-col">
        <div className="max-w-[22rem] lg:max-w-[15.5rem]">
          <h2 className="-mt-3 mb-2 font-integral text-3xl text-black lg:mb-6 lg:text-4xl">
            SHOP.CO
          </h2>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="mt-8 flex gap-4 text-black">
            {socialIcons.map(({ id, icon }) => (
              <div
                key={`social-${id}`}
                className="group rounded-full border border-[#CCC] bg-white p-2 *:size-4 hover:border-black hover:bg-black hover:*:text-white"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        <div className="grid w-full max-w-[52rem] grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {footerData.map(({ heading, link }) => (
            <div key={heading} className="space-y-6">
              <h3 className="font-medium uppercase leading-[1.125rem] tracking-[0.1875rem] text-black">
                {heading}
              </h3>
              <ul className="space-y-4">
                {link.map((item, i) => (
                  <li key={`footer-link-${i}`} className="capitalize">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 py-6 max-lg:flex-col">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
      </div>
    </footer>
  );
};

// --- Combined Component Example Export ---
const ShopSection = ({ cards }) => {
  return (
    <div>
      <FocusCards cards={cards} />
      <Footer />
    </div>
  );
};

export default ShopSection;

