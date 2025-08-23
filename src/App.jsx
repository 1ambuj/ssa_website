import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import TeamMember from './pages/TeamMember'
import './App.css'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import ServiceDetail from './pages/ServiceDetail'
import ServicesPage from './pages/ServicesPage'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team/:slug" element={<TeamMember />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="BLOG" element={<Blog />} />

        </Route>
      </Routes>
    
  );
}

export default App;
