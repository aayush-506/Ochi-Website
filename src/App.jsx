import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import EyesEffect from './components/EyesEffect'
import FeaturedProjects from './components/FeaturedProjects'
import Review from './components/Review'
import ThreeCards from './components/ThreeCards'
import ReadyToStart from './components/ReadyToStart'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';





const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen '>

      <Navbar />
      <Landing />
      <div data-scroll-section className='relative'>
        <div data-scroll data-scroll-speed=".2" className="sticky top-0 z-10 h-[70vh]" >
          <Marquee />
        </div>
        <div className="relative z-20 -mt-[22vh]">
          <About />
        </div>
      </div>

      <EyesEffect />
      <FeaturedProjects />
      <Review />
      <div className='relative'>

        <div className='sticky top-0 z-10 h-[70vh]' >
          <ThreeCards />
        </div>
        <div className='sticky top-[-12%] relative z-20 mt-[35vh]'>
          <ReadyToStart />
        </div>

        <div className='relative z-99'>
          <Footer />
        </div>


      </div>
    </div>
  )
}

export default App