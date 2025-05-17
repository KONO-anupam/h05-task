'use client';
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RateCost from "./RateCost";
import { useRouter } from "next/navigation"; // For Next.js App Router
import { Products } from "../components/Constants";
import Img from "../components/Img";

export default function ImgSlider({ type, del = 'no', id }) {
  const [Width, setWidth] = useState(0);
  const ref = useRef();
  const mainDiv = useRef();

  const inView = useInView(mainDiv, { once: true });
  const MainControls = useAnimation();
  const router = useRouter();

  const ProductsByType = Products.filter(
    el => el.type === type && (del === 'no' ? true : el.id !== id)
  );

  useEffect(() => {
    if (inView) {
      MainControls.start("visible");
    }
  }, [inView, MainControls]);

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
    const raw = src.split('/').pop().split('.')[0];
    const name = raw.charAt(0).toUpperCase() + raw.slice(1);
    return name === 'Vector' ? 'BlackStar'
         : name === 'Main' ? 'ManAndWomen'
         : name === 'Order_confirmed' ? 'Confirm'
         : name === 'Undraw_shopping_app_flsj' ? 'Empty'
         : name === 'Undraw404' ? 'Error'
         : name;
  };

  return (
    <div className="overflow-hidden mt-10" ref={ref}>
      <motion.div
        drag="x"
        dragConstraints={{ left: -Width, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        ref={mainDiv}
        className="flex gap-5 cursor-pointer w-fit"
      >
        {ProductsByType.map((el, index) => (
          <motion.div key={index} whileTap={{ scale: 0.95 }}>
            <motion.div
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -75 },
              }}
              transition={{ delay: index * 0.1, type: 'just' }}
              initial="hidden"
              animate={MainControls}
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
