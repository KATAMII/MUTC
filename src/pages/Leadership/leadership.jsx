import React from 'react'
import Leader from './leader'

import "./leadeship.css"
import  leaders from "../../data/leaders"

function leadership() {
  return (
    <section className='Leaders-section'>
      {
        leaders.map((currentDoctor,i)=><Leader key={i} image={currentDoctor.Image} twitterurl={currentDoctor.twitterurl}
        fburl={currentDoctor.fburl} lnurl={currentDoctor.linkedinurl} igurl={currentDoctor.igurl}
        fullName={currentDoctor.fullName} Field={currentDoctor.field} bio={currentDoctor.bio}/>)
      }
    </section>
  )
}

export default leadership
