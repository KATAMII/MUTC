import React from 'react'
import './About.css'


function About() {
  return (
    <div className='Abt-section'>
        <h1 className='abt-title'>About us</h1>
        <div className="abt-tex-bx">
            <div className='abt-textbox'>
                <h1 className='abt-txt'>Our Mission</h1>
                <p className='abt-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, debitis! Pariatur delectus aperiam ad suscipit accusamus iusto accusantium doloremque non?</p>
                
            </div>
            <div className='abt-textbox'>
                <h1 className='abt-txt'>Our Vision</h1>
                <p className='abt-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, debitis! Pariatur delectus aperiam ad suscipit accusamus iusto accusantium doloremque non?</p>
            </div>
            <div className='abt-textbox'>
                <h1 className='abt-txt'>Our Values</h1>
                <h2 className='abt-txt1'>* Commitment</h2>
                <p className='abt-para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione</p>
                <h2 className='abt-txt1'>* TeamWork</h2>
                <p className='abt-para'>Lorem ipsum dolor sit amet consectetur </p>

            </div>
       </div>
    </div>
  )
}

export default About
