'use client';
import { useEffect, useState } from 'react';

const cloudinaryUrls = {
  Confirm: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466524/Confirm_uiugbt.svg',
  Empty: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466549/Empty_e3ml7b.svg',
  Error: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466549/Error_q8blap.svg',
  Svg9: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466542/Svg9_l9pirm.svg',
  Svg8: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466542/Svg8_ejz0uv.svg',
  Svg7: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466543/Svg7_e6r9fv.svg',
  Svg4: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466544/Svg4_zr6qck.svg',
  Svg6: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466544/Svg6_htiqho.svg',
  Svg5: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466544/Svg5_qjl54b.svg',
  Svg2: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466544/Svg2_t6lk8u.svg',
  Svg3: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466545/Svg3_zygezl.svg',
  Svg14: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466546/Svg14_b5wrg4.svg',
  Svg15: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466545/Svg15_wfzy3b.svg',
  Svg13: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466546/Svg13_mw4ppp.svg',
  Svg12: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466547/Svg12_mhg5mz.svg',
  Svg11: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466548/Svg11_shnjbv.svg',
  Svg1: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466548/Svg1_svwrsz.svg',
  BlackStar: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466542/Vector.svg',
  ManAndWomen: 'https://res.cloudinary.com/dmb2xjib2/image/upload/v1747466542/Main.svg',
};

export default function Img({ img, className, ...props }) {
  const [myImg, setMyImg] = useState(null);

  useEffect(() => {
    if (!img) return;
    const key = img.charAt(0).toUpperCase() + img.slice(1);
    setMyImg(cloudinaryUrls[key] || null);
  }, [img]);

  if (!myImg) return null;

  return (
    <img
      draggable="false"
      className={className ? className + " w-full h-full" : "w-full h-full"}
      src={myImg}
      alt=""
      {...props}
    />
  );
}
