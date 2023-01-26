import React from 'react'
import {FaFileDownload} from 'react-icons/fa'
import pdfFile from './MyResume.pdf'
const NavBar = () => {
  return (
    <div className='navigation topBottom' id='home'>
        <nav className='navbar navbar-expand-lg py-4 navbar-light' style={{backgroundColor:"#1f456e"}}>
            <div className='container'>
            <a className="navbar-brand" style={{color:"ivory"}} href='/'>NANDIMANDALAM SUNNY</a>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=" text-light">↓↓↓</span>
                    </button>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems' href='#home'>Home</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems' href='#about'>About</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems' href='#skills'>Skills</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems' href='#projects'>Projects</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems' href='#experience'>Experience</a></li>
                        <li className='nav-item'><a rel="noreferrer" className='nav-link navItems' href='#contact'>Contact</a></li>
                        <li className='nav-item text-light'><a rel="noreferrer" className='nav-link navItems' href={pdfFile} download="NSunnyResume.pdf" target='_blank'>Download   <FaFileDownload/></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar