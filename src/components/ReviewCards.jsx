import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";

const ReviewCards = ({ data, index, activeID, setActiveID }) => {

  const change = (id) => {

    setActiveID((prevID) => (
      prevID === id ? null : id
    ));
  }

  return (
    <div className=' border-b-1 border-zinc-400'>

      <div className='px-13 py-3 flex items-center justify-between'>
        <div className='w-[10%]'>
          <h1 className='capitalize text-[16px] font-[Neue_Montreal]'>{data.project}</h1>
        </div>
        <div className='w-[10%]'>
          <h1 className='capitalize text-[16px] font-[Neue_Montreal]'>{activeID == data.id && "Services:"}</h1>
        </div>
        <div className='w-[30%]'>
          <h1 className='capitalize text-[16px] font-[Neue_Montreal] mr-[18vw]'>{data.client}</h1>
        </div>
        <div className='w-[05%]'>
          <button onClick={() => change(data.id)} className={`font-[Neue_Montreal] ${activeID == data.id && "text-[#B2B2B2]"} text-[16px]`}>READ</button>
        </div>
      </div>

      {activeID == data.id && (
        <div className='show flex px-13 mt-12 pb-14'>
          <div className=' w-[52%] h-fit pl-[23vw] '>


            {data.services.map((services, id) => (
              <div key={id} className=' btn flex items-center gap-1 mb-4 '>
                <button  className='border rounded-4xl font-[Neue_Montreal] text-[14px] px-2 py-1 uppercase'>{services}</button>
                <div className='border border-zinc-900 flex items-center justify-center h-7.5 w-7.5 rounded-full'>
                  <MdArrowOutward size={20} />
                </div>
              </div>
            ))}




          </div>

          <div className=' w-[30.7%] h-fit '>

            <div className="image h-[100px] w-[110px] bg-cover  rounded-2xl  mb-[25px]"
              style={{ backgroundImage: `url(${data.photo})` }}>

            </div>
            <p className='font-[Neue_Montreal] text-[16px]'>{data.description}</p>

          </div>

        </div>
      )}

    </div>
  )
}

export default ReviewCards