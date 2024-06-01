import React from 'react'
import Leader from './leader'
import Ndiaimg from "../../assets/Dr Ndia.jpg"
import './leadership.css'
function leadership() {
  return (
    <section className='Leaders-section'>
       <Leader image={Ndiaimg} fullName="Dr Ndia" twitterurl="X.com" fburl="facebook.com"igurl="instagram.com"lnurl="linkedin.com"
       Field="Patron"bio="I am ambitious,confident,patient and pays attention to details."/>
    </section>
  )
}

export default leadership
