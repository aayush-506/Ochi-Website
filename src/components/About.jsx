import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div   className='w-screen bg-[#CEEA67] rounded-t-3xl rounded-b-xl'>

      <div className='border-b-1 border-zinc-500 px-13'>
        <p className='font-[Neue_Montreal] pt-[11vh] pr-[11vw] pb-[7vh] font-normal text-[53px] leading-[53px]'>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to{' '}
          <span className='underline'>
            raise funds, sell products, explain complex ideas, and hire great people.
          </span>
        </p>
      </div>

      {/* next div */}
      <div className='w-full flex justify-between border-b-1 border-zinc-500 px-13 mt-3 pb-[120px] '>

        <div className='w-[250vw] '>
          <span>What you can expect:</span>
        </div>

        <div className='mr-[200px]'>
          <span className='font-[Neue_Montreal]'>
            We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</span>
          <br />
          <br />
          <span className='font-[Neue_Montreal]'>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </span>
        </div>

        <div className='pr-[120px] pt-[140px]'>
          <span className='font-[Neue_Montreal]'>S:</span>
          <br />
          <a className='underline font-[Neue_Montreal]'>Instagram</a><br />
          <a className='underline font-[Neue_Montreal]'>Behance</a><br />
          <a className='underline font-[Neue_Montreal]'>Facebook</a><br />
          <a className='underline font-[Neue_Montreal]'>Linkedin</a>
        </div>

      </div>

      {/* next div */}
      <div className='flex justify-between pb-[60px] px-13 mt-[20px]'>

        <div>
          <h1 className='text-5xl mb-4 font-[Neue_Montreal]'>Our approach:</h1>
          <button className='flex pl-3 items-center justify-center rounded-3xl font-[Neue_Montreal]  text-[14px] bg-[#000000] w-[160px] h-[50px]'> <span className='text-white'>READ MORE</span> <div className='ml-3 h-[40px] w-[40px] bg-[#ffff] rounded-full flex items-center justify-center'><MdArrowOutward size={20} /></div></button>
        </div>
        <div className='photo overflow-hidden rounded-2xl w-[670px] h-[470px] bg-red-900'>
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>


    </div>



  )
}

export default About
