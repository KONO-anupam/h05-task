import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function Reavel({ children, className = 'w-fit', btn = 'w-fit', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      className={className + ' ' + btn}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
          transition: {
            type: 'spring',
            stiffness: 120,
            damping: 18,
            duration: 0.7,
            delay: delay,
            bounce: 0.25
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}
