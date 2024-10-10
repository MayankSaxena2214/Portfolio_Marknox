import React from 'react'
import "./Footer.css"
import {FaInstagram,FaGithub,FaTwitter,FaWhatsapp,FaHeart} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer-container">
        <p>Made with <FaHeart className='heart'/> By Mayank Saxena</p>
        <div className="connectlinks">
        <a href="https://github.com/MayankSaxena2214" target="_blank" rel="noopener noreferrer"><FaGithub className='github'/></a>
<a href="https://x.com/MayankSaxe59906" target="_blank" rel="noopener noreferrer"><FaInstagram className='insta'/></a>
<a href="https://wa.me/919259525543" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='whatsapp'/></a>
<a href="https://x.com/MayankSaxe59906" target="_blank" rel="noopener noreferrer"><FaTwitter className='twitter'/></a>

        </div>
    </div>
    // <div className="footer-container">
    //   <div className="footer-left">
    //     <h2>About me</h2>
    //     <p>Hi, I'm Mayank, a full-stack developer passionate about building dynamic web applications using MERN stack. I love solving problems and am always eager to learn new technologies.</p>
    //     <a href="https://drive.google.com/file/d/19k8x1Cy22kdbwCgtLcCYnj5sGWrCgXpF/view?usp=sharing"><button>My Resume</button></a>
    //   </div>
    //   <div className="footer-right">
        
    //     <div className="footer-form">
    //       <form action="">
    //         <h2>Fill Details</h2>
    //         <label htmlFor="">Your Name</label>
    //         <input type="text" placeholder='Your name' />
    //         <label htmlFor="">Your Email</label>
    //         <input type="text" placeholder='Your email' />
    //         <label htmlFor="">Your Phone</label>
    //         <input type="number" placeholder='Your mobile' />
    //         <button>Submit</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Footer