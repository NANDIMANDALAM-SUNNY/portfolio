
import React from 'react'
import bye from './Imgs/bye.png'
import emailjs from "emailjs-com"
import Swal from 'sweetalert2';
// import {FiSend} from 'react-icons/fi'
import './Styles.css'
const Contact = () => {
  const SERVICE_ID = "service_7v7gt64";
  const TEMPLATE_ID = "template_unsrf76";
  const USER_ID = "ZoXJYM9uYq_dh-Efi";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Message Sent Successfully',
          imageUrl:"https://i.ibb.co/3pJThVD/thumbsup.png",
          imageHeight:200,
          imageWidth:200,
          imageAlt:"Got it"
        })
      }, (error) => {
        Swal.fire({
          title: 'Ooops, something went wrong',
          text: error.text,
          imageUrl:"https://i.ibb.co/d4KxR7G/sleepglasses.png",
          imageHeight:200,
          imageWidth:200,
          imageAlt:"Lost it"
        })
      });
    e.target.reset()
  };
  return (
    <section className='container form' style={{color:"navy"}} id='contact'>
        <div className='contact row'>

          <form className='formContent col' onSubmit={handleOnSubmit} noValidate>
          <div className='line'>
          </div>
          <h1 style={{textAlign:"center"}}>Mail To Me</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">I will never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle1" className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleInputTitle1"/>
          </div>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
          <button className='send-button' type="submit">Send Me !!! </button>
          {/* <button className='send-button' type="submit">Send Me !!! <FiSend/></button> */}
          </form>
          <img className='contactImg col' src={bye} alt="..."/>
        </div>
    </section>
  )
}

export default Contact