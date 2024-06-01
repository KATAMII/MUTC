import React from 'react'
import Hero from './Hero'
import About from './about'
import Testimonials from './Testimonials'
import Footer from '../../components/Footer'


function Home() {
  return (
    <section className='home'>
      < Hero/>
      < About/>
      < Testimonials/>
      < Footer/>
    </section>
  )
}

export default Home
