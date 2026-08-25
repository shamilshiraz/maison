import React, { useEffect } from 'react'
import './App.css'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HorizontalStory from './components/HorizontalStory'
import FeaturedCarousel from './components/Carousel'
import ConsultationSection from './components/Consultation'
import ExperienceStore from './components/Store'
import TestimonialSection from './components/Test'
import FAQSection from './components/FAQ'
import Footer from './components/Footer'
import AtelierStack from './components/Atel'
import OsmanNavbar from './components/Osm'
import ShopTheLook from './components/ShopTheLook'
import NewFt from './components/NewFooter'
import WhatsAppButton from './components/Whatsapp'
import MaisonMadras from './components/Maison'
import { Routes,Route } from 'react-router-dom'
import ParallaxGallery from './components/Llx'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div>
      {/* <OsmanNavbar/>
      <ShopTheLook/>
      <NewFt/> */}
      {/* <AtelierStack/> */}
      <WhatsAppButton/>
     <Navbar />
      <Routes>
        <Route path="/" element={<>
              <Hero />
      <HorizontalStory />
      <FeaturedCarousel />
      <ConsultationSection />
            <ParallaxGallery/>
      <ExperienceStore />
      <TestimonialSection />
      <FAQSection />
        </>} />
        <Route path="/about" element={<><MaisonMadras/></>} />
      </Routes>

      <Footer /> 
    </div>
  )
}

export default App