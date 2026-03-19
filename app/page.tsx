import Hero from '@/components/hero/hero'
import Services from '@/components/services/services'
import Projects from '@/components/projects/projects'
import Testimonials from '@/components/testimonials/testimonials'
import CTA from '@/components/cta/cta'
import Footer from '@/components/footer/footer'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default page
