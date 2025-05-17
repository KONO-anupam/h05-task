"use client"; // Required if this is a Client Component in Next.js

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ Use this in Next.js
import Reavel from "../Reavel"; // ✅ Update the path if needed
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Img from "../components/Img"; // ✅ Assuming this is your custom image component

function RateCost({ from = 'Home', name, stars = 5, cost, discount = 0 }) {
  return (
    <div className={`${from === 'Home' ? 'flex flex-col justify-between h-full' : ''}`}>
      <div>
        <Reavel>
          <h1 className={`font-bold ${from !== 'Home' ? 'bolded text-4xl max-w-[600px] sm:text-5xl' : 'text-xl'}`}>{name}</h1>
        </Reavel>
      </div>
      <div>
        <div className={`${from !== 'Home' ? 'mt-3' : ''}`}></div>
        <Reavel>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array(Math.floor(stars)).fill().map((_, index) => (
                <div className="flex flex-row" key={index}>
                  {index < stars && <FaStar color="black" />}
                  {index + 1 === Math.floor(stars) && stars % 1 !== 0 && <FaStarHalfAlt color="black" />}
                </div>
              ))}
            </div>
            {stars} / <span className="text-gray-500">5</span>
          </div>
        </Reavel>
        <div className={`${from !== 'Home' ? 'mt-3' : ''}`}></div>
        <Reavel>
          <div className={`flex gap-1 ${from !== 'Home' ? 'text-2xl gap-3' : ''}`}>
            <span className="font-bold">${cost}</span>
            {discount > 0 && (
              <div className="flex">
                <del className="text-gray-400">${(cost + (cost * discount) / 100).toFixed(2)}</del>
                <span className="bg-red-100 px-3 ml-3 rounded-full text-red-400">-{discount}%</span>
              </div>
            )}
          </div>
        </Reavel>
      </div>
    </div>
  );
}

export default function ImgSlider({ type, del = 'no', id, products = [] }) {
  const [width, setWidth] = useState(0);
  const router = useRouter(); // ✅ Next.js router
  const ref = useRef();
  const mainDiv = useRef();
  const inView = useInView(mainDiv, { once: true });
  const mainControls = useAnimation();

  const filtered = products.filter(
    el => el.type === type && (del === 'no' || el.id !== id)
  );

  useEffect(() => {
    if (inView) mainControls.start("visible");
  }, [inView, mainControls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
      }
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (name) => () => {
    router.push(`/Shop/${name}`);
  };

  const getImgKey = (src) => {
    const baseName = src.split("/").pop().split(".")[0];
    switch (baseName) {
      case "Vector": return "BlackStar";
      case "Main": return "ManAndWomen";
      case "order_confirmed": return "Confirm";
      case "undraw_shopping_app_flsj": return "Empty";
      case "Undraw404": return "Error";
      default: return baseName;
    }
  };

  return (
    <div className="overflow-hidden mt-10" ref={ref}>
      <motion.div
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        ref={mainDiv}
        className="flex gap-5 cursor-pointer w-fit"
      >
        {filtered.map((el, index) => (
          <motion.div key={el.id || index} whileTap={{ scale: 0.95 }}>
            <motion.div
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -75 },
              }}
              transition={{ delay: index * 0.1, type: "just" }}
              initial="hidden"
              animate={mainControls}
              className="flex flex-col w-[250px] h-full"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: index & 1 ? 10 : -10 }}
                className="bg-gray-100 rounded-xl select-none"
                onClick={handleClick(el.name)}
              >
                <Img
                  img={getImgKey(el.src)}
                  className="w-full h-[250px]"
                  draggable="false"
                />
              </motion.div>
              <RateCost
                name={el.name}
                stars={el.stars}
                cost={el.cost}
                discount={el.discount}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

