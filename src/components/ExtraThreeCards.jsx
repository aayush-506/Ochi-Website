
import React from 'react'

const ExtraThreeCards = ({data,index}) => {


  return (
  
     
      <div style={{backgroundColor:`${data.color}`}} className={`relative ${data.color === '#004D43' ? 'w-[50%] ': 'w-[25%]'}  h-[380px] rounded-2xl  flex items-center justify-center`}>

      <img className='w-32' src={data.image} alt="" />

      <button className={`uppercase font-[Neue_Montreal] text-[12px] absolute left-10 bottom-8 border rounded-full px-4 py-1 ${data.color === '#004D43' ? 'border-[#CEEA67] text-[#CEEA67]': 'border-[#EAEAEA] text-[#EAEAEA]'} `}>{data.btn}</button>
    </div>
    

  )
}

export default ExtraThreeCards