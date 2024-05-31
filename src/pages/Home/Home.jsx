import React from 'react'
import Hero from './Hero'
import About from './about'
import Testimonials from './Testimonials'


function Home() {
  return (
    <section className='home'>
      < Hero/>
      < About/>
      < Testimonials/>
    </section>
  )
}

export default Home
