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
      <Navbar />
      <Hero />
      <HorizontalStory />
      <FeaturedCarousel />
      <ConsultationSection />
      <ExperienceStore />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App