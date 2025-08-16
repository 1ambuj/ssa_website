import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/AboutPreview'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  )
}


