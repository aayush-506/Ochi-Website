import { motion } from 'framer-motion';
import React, { useEffect ,useState } from 'react'
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {

        const [scroll, setScroll] = useState(false);
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setScroll(true); // Trigger the scroll effect after 2 seconds
          }, 200); // 2 seconds delay
      
          return () => clearTimeout(timer); // Clean up the timer on unmount
        }, []);

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='h-screen w-full pt-[17vh] '>
            <div className='TEXTLINES leading-[0.75] font-bold px-13'>
                <h1 className=' text-9xl leading-[0.75] font-[Founders_Grotesk]'>WE CREATE</h1>
                <div className='flex'>
                    <motion.div initial={{ width: 0 }}
                        animate={{ width: "140px" }} transition={{ ease: [0.7, 0, 0.84, 0], duration: 0.6 }} className='w-[140px] h-20 relative top-[15px] right-4 rounded-xl ml-4 overflow-hidden'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                    </motion.div>
                    <h1 className='text-9xl leading-[0.75] font-[Founders_Grotesk]'>EYE-OPENING </h1>
                </div>
                <h1 className='text-9xl leading-[0.75] font-[Founders_Grotesk]'>PRESENTATIONS</h1>
            </div>
            <div className='border-t-1 border-zinc-400 mt-[230px]'></div>
            <div className='flex justify-between px-13 mt-4  text-sm'>
                {["For public and private companies", "From the first pitch to IPO"].map((items, index) => (
                    <span key={index} className='font-[Neue_Montreal]' >{items}</span>
                ))}
                <div className='flex items-center gap-1 '>
                    <button className='border rounded-4xl font-[Neue_Montreal] px-2 py-1'>START THE PROJECT</button>
                    <div className='border border-zinc-900 flex items-center justify-center h-7.5 w-7.5 rounded-full'>
                        <MdArrowOutward size={20} />
                    </div>
                </div>
            </div>
            <span
                className={`absolute left-[51%] font-[Neue_Montreal] transform -translate-x-1/2 mb-4 transition-all duration-700 ${scroll ? 'translate-y-[100px]' : 'translate-y-0'}`}
            >
                Scroll down
            </span>

        </div>
    )
}

export default Landing