'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Reavel from '../Reavel'
import { motion } from 'framer-motion'

import BrandsBar from '../components/BrandsBar'
import HomeSliders from '../components/HomeSliders'
import HappyCustomers from '../components/HappyCustomers'
import Footer from '../components/Footer'
import { Grid } from '../components/LayoutGrid'

export default function Home({ to = '' }) {
  const NewArrival = useRef()
  const TopSelling = useRef()
  const OnSale = useRef()

  useEffect(() => {
    if (to === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const sectionMap = {
      NewArrival,
      TopSelling,
      OnSale,
    }

    const sectionRef = sectionMap[to]
    if (sectionRef?.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      })
    }
  }, [to])

  return (
    <>
      <div className="py-8 nav:flex flex-wrap mainPadding flex items-center justify-between gap-8 bg-[#F2F0F1] px-6 md:px-12 lg:px-20">
        <div className="nav:w-1/2 flex flex-col">
          <h1 className="bolded text-3xl sm:text-6xl mb-6 max-w-[550px] font-black tracking-tight">
            <Reavel>FIND CLOTHES</Reavel> <Reavel>THAT MATCHES</Reavel>{' '}
            <Reavel>YOUR STYLE</Reavel>
          </h1>

          <Reavel>
            <p className="max-w-[550px] text-gray-700 pb-8">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </Reavel>

          <Reavel className="btnReavel flex" btn="w-full lg:w-fit">
            <Link href="/Shop" className="btn bg-black text-white py-3 px-8 rounded-full w-full lg:w-fit text-center font-medium">
              Shop Now
            </Link>
          </Reavel>

          <div className="my-12"></div>
          <div className="flex mb-10 flex-wrap justify-start items-center gap-10">
            {[
              { number: '200+', label: 'International Brands' },
              { number: '2,000+', label: 'High-Quality Products' },
              { number: '30,000+', label: 'Happy Customers' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-grow flex flex-col justify-center items-start"
              >
                <Reavel>
                  <h1 className="font-bold text-3xl tracking-wide">
                    {item.number}
                  </h1>
                </Reavel>
                <Reavel>
                  <p className="text-gray-700">{item.label}</p>
                </Reavel>
              </div>
            ))}
          </div>
        </div>

        <div className="nav:w-1/2 flex flex-col items-center justify-center relative min-w-[320px] min-h-[500px]">
          {/* Black star top right */}
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'just' }}
            className="w-32 absolute right-0 top-0 hidden xsm:block z-10"
          >
            <img
              width={128}
              height={128}
              src="https://res.cloudinary.com/dmb2xjib2/image/upload/v1747464515/Main_ko9su3.svg"
              alt="Decorative star"
            />
          </motion.div>
          
          {/* Main image */}
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'just' }}
            className="w-full h-full"
          >
            <img
              width={500}
              height={600}
              className="w-full h-full max-w-[500px] object-contain"
              src="/couple.png" 
              alt="Stylish couple wearing fashionable clothing"
            />
          </motion.div>
          
          {/* Black star bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'just' }}
            className="w-12 absolute left-0 bottom-10 hidden xsm:block z-10"
          >
            <img
              width={48}
              height={48}
              src="https://res.cloudinary.com/dmb2xjib2/image/upload/v1747464527/Vector_dgunku.svg"
              alt="Decorative star"
            />
          </motion.div>
        </div>
      </div>

      <BrandsBar />

      <div ref={NewArrival}>
        <HomeSliders text="NEW ARRIVALS" type="newarrival" />
      </div>
      <div ref={TopSelling}>
        <HomeSliders text="TOP SELLING" type="topselling" />
      </div>

      <Grid />
      <HappyCustomers />
      <Footer />
    </>
  )
}