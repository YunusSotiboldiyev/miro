import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import CollaborateSection from './components/CollabroateSection'
import Work from './components/Work'
import Ways from './components/Ways'
import WorkWaySection from './components/WorkWaySection'
import TeamsSection from './components/TeamSection'
import TrustSection from './components/TrustSection'
import Testimonials from './components/Testimonals'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Navbar/>
      <div className='max-w-6xl mx-auto'>
      <Hero/>
      <CollaborateSection/>
      <Work/>
      <Ways/>
      <WorkWaySection/>
      <TeamsSection/>
      </div>
      <TrustSection/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default page