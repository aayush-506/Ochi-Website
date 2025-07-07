import React, { useState } from 'react'
import ReviewCards from './ReviewCards'

const Review = () => {

  const [activeID, setActiveID] = useState(null);

  const data = [
    {
      id: 1,
      project: "Karman Ventures",
      services: ["inverstor desk", "sales desk"],
      client: "William Barnes",
      photo: "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
      description: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5"
    },
    {
      id: 2,
      project: "Planetly",
      services: ["agency", "big news desk", "branded template", "investor desk", "production presentation", "sales desk", "startup pitch"],
      client: "Nina Walloch",
      photo: "https://ochi.design/wp-content/uploads/2022/05/Nina.jpg.png",
      description: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."
    },
    {
      id: 3,
      project: "Workiz Easy",
      services: ["company presentation", "onboarding presentation", "policy desk & playbook", "redesign", "sales desk"],
      client: "Tomer Levy",
      photo: "https://ochi.design/wp-content/uploads/2022/05/Tomer.png",
      description: "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients."
    },
    {
      id: 4,
      project: "Premium Blend",
      services: ["branded template", "llustration"],
      client: "Ellen Kim",
      photo: "https://ochi.design/wp-content/uploads/2022/12/image-677-300x298.png",
      description: "They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations."
    },
    {
      id: 5,
      project: "Hypercare Systems",
      services: ["investor desk", "startup pitch"],
      client: "Brendan",
      photo: "https://ochi.design/wp-content/uploads/2022/05/1627398835558-11.png",
      description: "The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough."
    },
    {
      id: 6,
      project: "Officevibe",
      services: ["branded template"],
      client: "Raff Labrie",
      photo: "https://ochi.design/wp-content/uploads/2023/10/Photo-300x300.png",
      description: "Ochi has an impressive understanding of what's needed to do an effective presentation. The stakeholders at work said it's the best most complete PP template they've ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!"
    },
    {
      id: 7,
      project: "Orderlion",
      services: ["agency", "inverstor desk", "product presentation", "review", "sales desk"],
      client: "Stefan Strohmer",
      photo: "https://ochi.design/wp-content/uploads/2022/05/Stefan-300x300.jpg",
      description: "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!"
    },
    {
      id: 8,
      project: "Black Book",
      services: ["review", "startup desk"],
      client: "Jaci Smith",
      photo: "https://ochi.design/wp-content/uploads/2022/05/Jaci.jpg.png",
      description: "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We're very happy with the process and the final product. All was handled well and professionally."
    },
    {
      id: 9,
      project: "Trawa Energy",
      services: ["branding", "investor deck", "startup pitch"],
      client: "David Budde",
      photo: "https://ochi.design/wp-content/uploads/2023/02/David-Budde-1-300x300.png",
      description: "We were surprised by the accuracy with which Ochi Design nailed the overall design language that perfectly aligned with our personal preferences and the vision that we have for our young company."
    }

  ];




  return (
    <div className='w-full h-fit'>

      <h1 className='text-[53px] font-[Neue_Montreal] px-13 mt-[11vh] pb-6 border-b-1 border-zinc-400 '>Clients' reviews</h1>

      {data.map((items, index) => (
        <ReviewCards data={items} index={index}
          key={items.id}
          activeID={activeID}
          setActiveID={setActiveID}



        />
      ))}




    </div>
  )
}

export default Review