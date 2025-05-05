import AboutSection from '@/Components/homepage/AboutSection'
import ContactSection from '@/Components/homepage/Contact'
import Destinations from '@/Components/homepage/Destination'
import HeroSection from '@/Components/homepage/HeroSection'
import Services from '@/Components/homepage/Services'
import Testimonials from '@/Components/homepage/Testimonials'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <Destinations/>
        <Services/>
        <Testimonials/>
        <AboutSection/>
        <ContactSection/>
    </div>
  )
}

export default HomePage