import React, { useState } from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({handleScroll}) => {
  const [isMenu,setIsMenu]=useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-logo">Portfolio</div>
      <div onClick={()=>setIsMenu(!isMenu)} className="hamberger"><GiHamburgerMenu color='white'/></div>
        <ul className={isMenu?'navbar-links active':'navbar-links'}>
        <li  onClick={() => {handleScroll('home');setIsMenu(!isMenu)}}>Home</li>
        <li onClick={() => {handleScroll('education');setIsMenu(!isMenu)}}>Education</li>
        <li onClick={() => {handleScroll('experience');setIsMenu(!isMenu)}}>Experience</li>
        <li onClick={() => {handleScroll('projects');setIsMenu(!isMenu)}}>Projects</li>
        <li onClick={() => {handleScroll('skills');setIsMenu(!isMenu)}}>Skills</li>
        <li onClick={() => {handleScroll('contact');setIsMenu(!isMenu)}}>Contact</li>
        <li onClick={() => {handleScroll('socials');setIsMenu(!isMenu)}}>Socials</li>
        <li onClick={() => {handleScroll('certificates');setIsMenu(!isMenu)}}>Certificates</li>
      </ul>
    </div>
  )
}

export default Navbar