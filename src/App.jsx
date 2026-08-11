import React from 'react'
import './App.css'
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
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HorizontalStory/>
      <FeaturedCarousel/>
      <ConsultationSection/>
      <ExperienceStore/>
      <TestimonialSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default App