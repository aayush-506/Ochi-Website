import React from 'react'
import ExtraThreeCards from './ExtraThreeCards'

const ThreeCards = () => {

  const data = [
    {
      id: 1,
      color:"#004D43",
      image: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
      btn: "©2019-2022"
    },
    {
      id: 2,
      color:"#212121",
      image: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
      btn: "rating 5.0 on clutch"
    },
    {
      id: 3,
      color:"#212121",
      image: "https://ochi.design/wp-content/uploads/2022/04/logo003.png",
      btn: "business bootstrap alumni"
    }
  ]



  return (
    <div className='w-full h-full'>
      <div className='px-13 pt-24 flex gap-1'>
        {data.map((items,index)=>(
          <ExtraThreeCards  data={items} index={index}  />

        ))}
      </div>
    </div>
  )
}

export default ThreeCards