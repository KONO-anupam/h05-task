'use client';
 import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Reavel from '../Reavel'
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { SiteReviews as reviews } from '../components/Constants'


export default function HappyCustomers() {
  const [Width, setWidth] = useState(0)
  const ref = useRef()
  
  useEffect(()=>{
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth)
  },[])

  return (
    <div className='mainMargin pt-24 pb-0'>
      <h1 className='bolded text-3xl xsm:text-5xl mb-16 text-center'>OUR HAPPY CUSTOMERS</h1>
      <div className="overflow-visible" ref={ref}>
        <motion.div
          drag={false}
          className="flex gap-12 justify-center w-full mt-0">
          {
            reviews.slice(0, 3).map((el,index) => {
                return (
                  <motion.div
                    key={index}
                    className='flex flex-col gap-4 w-[350px] bg-transparent p-0 m-0'>
                    <Reavel>
                      <div className='flex gap-2 mb-2'>
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                      </div>
                    </Reavel>
                    <Reavel>
                      <div className='flex gap-1 items-center mb-2'>
                        <h1 className='font-bold text-2xl'>{el.name}</h1>
                        <MdVerified size={24} color='green'/>
                      </div>
                    </Reavel>
                    <Reavel>
                      <p className='w-full h-full text-lg leading-relaxed'>{el.review}</p>
                    </Reavel>
                  </motion.div>
                )
            })
          }
        </motion.div>
      </div>
    </div>
  )
}
