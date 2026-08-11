import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HorizontalStory from './components/HorizontalStory'
import FeaturedCarousel from './components/Carousel'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HorizontalStory/>
      <FeaturedCarousel/>
    </div>
  )
}

export default App