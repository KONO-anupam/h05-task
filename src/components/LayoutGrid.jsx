"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Reavel from "../Reavel";
// Utility function
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Card content components
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

// Card data
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/du5qoczcn/image/upload/v1747198732/image_13_dq7e6h.png",
    title: "Formal",
    description: "Express yourself with our relaxed and comfortable casual wear collection."
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/du5qoczcn/image/upload/v1747198729/image_11_tkn9yl.png ",
    title: "Casual",
    description: "Elegant and sophisticated outfits for your professional needs."
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      " https://res.cloudinary.com/du5qoczcn/image/upload/v1747198731/image_14_v8wb4u.png",
    title: "Gym",
    description: "Shine bright with our stunning collection for special occasions."
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/du5qoczcn/image/upload/v1747198732/image_12_tdisez.png",
    title: "Party",
    description: "Performance meets fashion in our athletic wear collection."
  },
];

// Image component
const ImageComponent = ({ card }) => {
  return (
    <>
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="500"
        width="500"
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
        )}
        alt="thumbnail" />
 
      <div className="absolute inset-0 z-10"></div>
    </>
  );
};

// Selected card component
const SelectedCard = ({ selected }) => {
  return (
    <div
      className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-60">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full z-10" />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-70">
        {selected?.content}
      </motion.div>
    </div>
  );
};

// Layout Grid component
export const LayoutGrid = ({ cards = cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div
      className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 m mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(card.className, "relative overflow-hidden", selected?.id === card.id
              ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
              : lastSelected?.id === card.id
              ? "z-40 bg-white rounded-xl h-full w-full"
              : "bg-white rounded-xl h-full w-full")}
            layoutId={`card-${card.id}`}>
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
            
            {/* Text content inside the image */}
            <div className="absolute top-0 left-0 p-6 z-20">
              <h3 className="text-black text-4xl font-satoshi font-bold leading-none">{card.title || "Casual Style"}</h3>
            </div>
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }} />
    </div>
  );
};

// Grid component for usage example
export function Grid() {
  return (
    <div className="h-screen bg-gray-100 py-10 mx-auto mb-20 rounded-4xl w-full">
      <Reavel>
         <h1 className="text-black text-centre font-bold text-[40px] leading-none my-12 ">
BROWSE BY DRESS STYLE
      </h1>
      </Reavel>
      <LayoutGrid cards={cards} />
    </div>
  );
}