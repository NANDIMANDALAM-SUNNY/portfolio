import React from 'react'
import link from './Imgs/AboutMe.mp4'
const About = () => {
  return (
    <section className='container' id='about'>
      <h1>ABOUT</h1>
      <video className='videobox' loop width="100%" height="650px" autoPlay muted controls>
      <source src={link} type="video/mp4"/>
      </video>
    </section>
  )
}

export default About