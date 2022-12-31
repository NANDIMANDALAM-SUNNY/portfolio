import React from 'react'
import smile from "./Imgs/smile.png"
import guvi from "./Imgs/guvi.png"
const Experience = () => {
  return (
    <section className='container' id='experience'>
      <h1>EXPERIENCE</h1>
      <div className='expCard expItems'>
      <div class="blob"></div>
      <img src={guvi} alt="..." className='guviLOgo'></img>
        <div className='expItems'>
        <div className='image-Section'>
          <img className='smilePic' src={smile} alt="..."></img>
        </div>
        <div className='content-Section'>
          <p><h5><em>N. Sunny</em></h5></p>
          <p>Intern</p>
          <div className='expContent'>
            <span>Technical Co-ordinator Intern</span><br/>
            <span>November,2022 - Ongoing</span><br/>
            <div className='listInExp'>
              <span><b>Roles & Responsibilities</b></span>
              <ul>
              <li>I started this internship in the month of November.</li>
              <li>I have resolved over 500+ queries.</li>
              <li> My job is to clear all the technical doubts of all the Zen class Students.</li>
              <li>I have learnt a lot of new implementation and techniques in this internship.</li>
              </ul>
  
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;