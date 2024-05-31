import React ,{useState,useEffect} from 'react'
import './Testimonials.css'
import lydiaImg from'../../assets/lydia.jpg'


function Testimonials() {
   
  return (
    <section className='section'>
        <div className='title'>
            <h2>Testimonials</h2>
        </div>
        <div className='section-center'>
            <img src={lydiaImg} alt="lydia a student" />
            <h3 className='name-para'>Lydia wambui</h3>
        </div>
        <div className='testimony'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur pariatur eius officiis velit quibusdam possimus adipisci. Accusantium sit aperiam praesentium reprehenderit, nobis, repellat vero provident dignissimos ex inventore eos suscipit.</p>
        </div>


    </section>
  )
}

export default Testimonials
