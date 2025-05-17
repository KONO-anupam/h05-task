'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

import Reavel from '../Reavel'
import { motion } from 'framer-motion'

import BrandsBar from '../components/BrandsBar'
import HomeSliders from '../components/HomeSliders'
import HappyCustomers from '../components/HappyCustomers'
import Footer from '../components/Footer'
import Img from '../components/Img'

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
      <div className="pt-1 nav:flex flex-wrap justify-between items-end mainPadding">
        <div className="nav:w-1/2 flex flex-col flex-grow">
          <h1 className="bolded text-3xl sm:text-6xl mb-10 max-w-[550px]">
            <Reavel>FIND CLOTHES</Reavel> <Reavel>THAT MATCHES</Reavel>{' '}
            <Reavel>YOUR STYLE</Reavel>
          </h1>

          <Reavel>
            <p className="max-w-[550px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </Reavel>

          <div className="mt-10"></div>
          <Reavel className="btnReavel flex" btn="w-full lg:w-fit">
            <Link href="/Shop" className="btn w-full lg:w-fit text-center">
              Shop Now
            </Link>
          </Reavel>

          <div className="mb-10"></div>
          <div className="flex mb-10 flex-wrap justify-start items-center gap-10">
            {[
              { number: '200+', label: 'International Brands' },
              { number: '2,000+', label: 'High-Quality Products' },
              { number: '30,000+', label: 'Happy Customers' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-grow flex flex-col justify-center items-center"
              >
                <Reavel>
                  <h1 className="font-bold text-3xl tracking-wide">
                    {item.number}
                  </h1>
                </Reavel>
                <Reavel>
                  <p>{item.label}</p>
                </Reavel>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end flex-grow relative">
          <Img
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'just' }}
            className="w-32 absolute right-0 hidden xsm:block z-10"
            src="https://res.cloudinary.com/dmb2xjib2/image/upload/v1747464527/Vector_dgunku.svg"
            alt=""
            img="BlackStar"
          />
          <Img
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'just' }}
            className="w-full h-full"
            src="https://res.cloudinary.com/dmb2xjib2/image/upload/v1747464515/Main_ko9su3.svg"
            alt="main"
            img="ManAndWomen"
          />
          <Img
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'just' }}
            className="w-12 absolute left-0 top-44 hidden xsm:block z-10"
            src="https://res.cloudinary.com/dmb2xjib2/image/upload/v1747464527/Vector_dgunku.svg"
            alt=""
            img="BlackStar"
          />
        </div>
      </div>

      <BrandsBar />

      <div ref={NewArrival}>
        <HomeSliders text="NEW ARRIVALS" type="newarrival" />
      </div>
      <div ref={TopSelling}>
        <HomeSliders text="TOP SELLING" type="topselling" />
      </div>
      <div ref={OnSale}>
        <HomeSliders text="ON SALE" type="onsale" />
      </div>

      <HappyCustomers />
      <Footer />
    </>
  )
}
