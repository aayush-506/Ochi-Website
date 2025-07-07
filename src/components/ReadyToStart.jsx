import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import Eyes from './Eyes';

const ReadyToStart = () => {
  return (
    <div  className='bg-[#CEEA67] rounded-t-xl h-full w-screen  '>

<div className='relative pt-[100px]'>
        <div className='text-[225px] font-[Founders_Grotesk] leading-[0.75] uppercase flex justify-center'>ready</div>
        <div className='text-[225px] font-[Founders_Grotesk] leading-[0.75] uppercase flex justify-center'>to start</div>
        <div className='absolute top-[60%] left-0 right-0 z-10 flex justify-center'>
        <Eyes />
        </div>
        <div className='text-[225px] font-[Founders_Grotesk] leading-[0.75] uppercase flex justify-center'>the project?</div>
</div>

        <div>
                  <div className='flex justify-center mt-[5vh] '>
                    <button className='flex items-center justify-between pr-3 pl-8 w-[18vw] h-[7vh] py-1 bg-zinc-900 rounded-4xl uppercase text-[14px] font-[Neue_montreal] text-white'>START THE PROJECT
                      <div className='h-[45px] w-[45px]  bg-white rounded-full flex justify-center items-center'><span className='text-black' ><MdArrowOutward size={20} /></span></div>
                    </button>
                  </div>

                  <h1 className='flex justify-center py-2 font-[Neue_Montreal]'>OR</h1>

                  <div className='flex justify-center'>
                    <button className='flex items-center justify-between pr-3 pl-8 w-[18vw] h-[7vh] py-1 bg-zinc-900 rounded-4xl uppercase text-[14px] font-[Neue_montreal] text-white'>HELLO@OCHI.DESIGN
                      <div className='h-[45px] w-[45px]  bg-white rounded-full flex justify-center items-center'><span className='text-black' ><MdArrowOutward size={20} /></span></div>
                    </button>
                  </div>
        </div>

    </div>
  )
}

export default ReadyToStart