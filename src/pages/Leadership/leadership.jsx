import React from 'react'
import Leader from './leader'
import banner from '../../components/banner'
import "./leadeship.css"
import  leaders from "../../data/leaders"

function leadership() {
 
  return (
    <section className='Lead'>
       <div className='bannerSection'>
         <h1 className="Ourleaders">Our  Qualified Leaders</h1>
         <p className="qualified">View Our Leaders</p>
      </div>

      <div className='Leaders-section'>
        {
          leaders.map((currentDoctor,i)=><Leader key={i} image={currentDoctor.Image} twitterurl={currentDoctor.twitterurl}
          fburl={currentDoctor.fburl} lnurl={currentDoctor.linkedinurl} igurl={currentDoctor.igurl}
          fullName={currentDoctor.fullName} Field={currentDoctor.field} bio={currentDoctor.bio}/>)
        }
      </div>
    </section>
  )
}

export default leadership
