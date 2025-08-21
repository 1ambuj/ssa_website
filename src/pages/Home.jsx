import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/AboutPreview'
import WhyChooseUs from '../components/WhyChooseUs'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
    </div>
  )
}


