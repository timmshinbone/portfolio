import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/'
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold dark:border-light border border-solid border-transparent'
        whileHover={{ 
            backgroundColor:["#2B2B2B", "#1E3D38","#5C887A","#D1A74D","#F3E9D2","#A2C5D7", "#2B2B2B"],
            transition: { duration:2, repeat: Infinity}
        }}
        >
            TS
        </MotionLink>
    </div>
  )
}

export default Logo