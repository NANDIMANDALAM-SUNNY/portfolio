import React from 'react'
// import Mailto from 'react-mailto'
import { FaLinkedin,FaTelegram,FaGithub } from "react-icons/fa";
import {BsMedium} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg'
const Footer = () => {

  return (
    <section className="footer topBottom">
    <footer className="py-3"style={{backgroundColor:"#1f456e"}}>
      <div className="container col item social "  style={{padding:"20px"}}>
        <div className='social-icons' style={{alignContent:"center",display:"flex",justifyContent:"center"}}>
        <a href='//linkedin.com/in/nandimandalamsunny2809/' target="_blank" rel='noopener noreferrer'><FaLinkedin style={{margin:"0 20px 0 20px"}} size="50px" color="skyblue"/></a>
        <a href='//t.me/sunny170911' target="_blank" rel='noopener noreferrer'><FaTelegram style={{margin:"0 20px 0 20px"}} size="50px" color="lightgreen"/></a>
        <a href='//github.com/NANDIMANDALAM-SUNNY' target="_blank" rel='noopener noreferrer'><FaGithub style={{margin:"0 20px 0 20px"}} size="50px" color="lightpink"/></a> 
        <a href='//n.sunny.netlify.app' target="_blank" rel='noopener noreferrer'><CgWebsite style={{margin:"0 20px 0 20px"}} size="50px" color="lightslategray"/></a>
        </div> 
        <div>
        <p className="m-0 text-center text-white">
          Copyright &copy; Nandimandalam Sunny 2023
        </p> 
        </div>
      </div>
    </footer>
  </section>
  )
}

export default Footer