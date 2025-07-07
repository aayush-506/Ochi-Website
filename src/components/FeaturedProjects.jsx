import React from 'react'
import FeatureCard from './FeatureCard'
import { MdArrowOutward } from "react-icons/md";


const FeaturedProjects = () => {

  const data = [
    {
      id: 1,
      title: "salience labs",
      middle: "salience labs",
      image: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
      btn: [
        "brand identity",
        "pitch desk"
      ]
    },
    {
      id: 2,
      title: "cardboard spaceship",
      middle: "cardboard spaceship",
      image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png",
      btn: [
        "branded title",
        "sales desk",
        "social media templates"
      ]
    },
    {
      id: 3,
      title: "AH2 & Matt Horn",
      middle: "AH2 & Matt Horn",
      image: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
      btn: [
        "pitch desk"
      ]
    },
    {
      id: 4,
      title: "Fyde",
      middle: "Fyde",
      image: "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
      btn: [
        "audit",
        "copywriting",
        "sales desk",
        "slides design"
      ]
    },
    {
      id: 5,
      title: "Vise",
      middle: "Vise",
      image: "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
      btn: [
        "agency",
        "company presentation"
      ]
    },
    {
      id: 6,
      title: "All Things Go",
      middle: "All Things Go",
      image: "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
      btn: [
        "brand identity",
        "pitch desk"
      ]
    },
    {
      id: 7,
      title: "Trawa",
      middle: "Trawa",
      image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
      btn: [
        "brand identity",
        "design research",
        "investor desk"
      ]
    },
    {
      id: 8,
      title: "Black Book",
      middle: "Black Book",
      image: "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg",
      btn: [
        "investor desk",
        "redesign",
        "review"
      ]
    },
    {
      id: 9,
      title: "Premium Blend",
      middle: "Premium Blend",
      image: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
      btn: [
        "branded template"
      ]
    },
    {
      id: 10,
      title: "Softstart",
      middle: "Softstart",
      image: "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg",
      btn: [
        "branded template",
        "sales desk"
      ]
    }
  ];



  return (
    <div className='w-full h-fit  '>
      <div className='pt-[140px] text-6xl px-13 border-b-1 border-zinc-400 font-[Neue_Montreal] pb-10'>
        Featured projects
      </div>

      <div className='mt-[14px] px-13 grid grid-cols-1 sm:grid-cols-2 gap-4'>

        {data.map((items, index) => (
          <FeatureCard data={items} index={index} />
        ))}

      </div>

      <div className='flex justify-center mt-[12vh] '>
        <button className='flex items-center justify-between pr-3 pl-8 w-[18vw] h-[7vh] py-1 bg-zinc-900 rounded-4xl uppercase text-[14px] font-[Neue_montreal] text-white'>view all case studies
          <div className='h-[45px] w-[45px]  bg-white rounded-full flex justify-center items-center'><span className='text-black' ><MdArrowOutward size={20} /></span></div>

        </button>


      </div>
      <br />
    </div>
  )
}

export default FeaturedProjects