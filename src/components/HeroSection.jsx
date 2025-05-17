'use client';
import Image from 'next/image';
export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[600px] flex items-center bg-gray-100 overflow-hidden mb-0">
        
        <div className="relative z-10 w-full px-8 md:px-20 lg:px-28 text-black max-w-[600px]">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-700 mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="bg-black text-white py-2 px-6 rounded-full font-medium hover:bg-gray-800">
            Shop Now
          </button>

          <div className="flex space-x-6 mt-10 text-center">
            <div>
              <p className="text-lg font-bold">200+</p>
              <p className="text-sm text-gray-600">International Brands</p>
            </div>
            <div>
              <p className="text-lg font-bold">2,000+</p>
              <p className="text-sm text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <p className="text-lg font-bold">30,000+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-6 mb-16">
        <Image
          src={Brands}
          alt="Brand Logos"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
