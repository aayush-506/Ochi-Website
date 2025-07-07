import { motion, scale } from 'framer-motion';
import React, { useState } from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const FeatureCard = ({ data, index }) => {


  const [isHovering, setHovering] = useState(false);

  return (
    <div className='w-full h-full mt-[36px]  '>

      <div className='flex items-center mb-4'>
        <span><RiCheckboxBlankCircleFill size={14} /></span>
        <h3 className='font-[Neue_Montreal] uppercase ml-2 text-[14px]'>{data.title}</h3>
      </div>


      <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='w-[675px] relative h-[580px]   '>

        <h1 className={` absolute overflow-hidden uppercase tracking-tighter font-bold font-[Neue_Montreal] z-[9] top-1/2  ${(index % 2) == 0 ? "left-full -translate-x-1/2" : "right-full translate-x-1/2"}  -translate-y-1/2  w-fit whitespace-nowrap text-8xl text-[#CEEA67] `}>

          {data.middle.split("").map((item, index) => (

            <motion.span initial={{ y: "100%" }} animate={isHovering ? ({ y: "0" }) : ({ y: "100%" })} transition={{ ease: [0, 0.55, 0.45, 1], delay: index*0.05 }} className="inline-block">{item}</motion.span>

          )
          )}

        </h1>

        <div
          style={{
            backgroundImage: `url(${data.image})`,
            transform: isHovering ? 'scale(0.95)' : 'scale(1)',
            transition: 'transform 0.8s ease'
          }}
          className='bg-cover w-full h-full overflow-hidden rounded-2xl'
        >


        </div>
      </div>
      <div>
        {data.btn.map((btn, id) => (
          <button key={id} className='border mr-2 px-3 uppercase font-[Neue_Montreal] text-14px py-1 mt-4 rounded-2xl'>{btn}</button>

        ))}

      </div>
    </div>
  )



}

export default FeatureCard