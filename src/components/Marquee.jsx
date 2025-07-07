import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div  className='w-screen pt-[90px] pb-[45px] rounded-t-3xl bg-[#004D43] '>
      <div className='flex h-full border-t-1 border-b-1 border-zinc-300 items-center leading-none whitespace-nowrap overflow-hidden  '>

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}}
        className=' text-[25vw] leading-none font-[Founders_Grotesk] text-white -mt-12 -mb-3 pr-20 '>WE ARE OCHI</motion.h1> 
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}}
        className=' text-[25vw] leading-none font-[Founders_Grotesk] text-white -mt-12 -mb-3 pr-20 '>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}}
        className=' text-[25vw] leading-none font-[Founders_Grotesk] text-white -mt-12 -mb-3 pr-20 '>WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee