import React from 'react';
import "./Socials.css";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiCodingninjas, SiGeeksforgeeks, SiGmail, SiLeetcode, SiLinkedin, SiWhatsapp } from "react-icons/si";

const Socials = () => {
  return (
    <div className="socials-container">
      <h1>Connect with me</h1>
      <div className="socials-links">
        <div className="socialrow1">
          <div className="row1container">
            <a href="https://www.instagram.com/mayanksaxena2214/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='insta' />
              <p>Instagram</p>
            </a>
          </div>
          <div className="row1container">
            <a href="https://x.com/MayankSaxe59906" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='twitter' />
              <p>Twitter</p>
            </a>
          </div>
          <div className="row1container">
            <a href="https://github.com/MayankSaxena2214" target="_blank" rel="noopener noreferrer">
              <FaGithub className='github' />
              <p>Github</p>
            </a>
          </div>
        </div>
        <div className="socialrow2">
          <div className="row1container">
            <a href="https://www.geeksforgeeks.org/user/mayanksaxena2114/" target="_blank" rel="noopener noreferrer">
              <SiGeeksforgeeks className='gfg' />
              <p>GFG</p>
            </a>
          </div>
          <div className="row1container">
            <a href="https://leetcode.com/u/Mayanksaxena2114/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className='leetcode' />
              <p>Leetcode</p>
            </a>
          </div>
          <div className="row1container">
            <a href="https://www.naukri.com/code360/profile/c5bda087-b028-45a8-b194-ddc0ce93bd8f" target="_blank" rel="noopener noreferrer">
              <SiCodingninjas className='codingninjas' />
              <p>Coding Ninjas</p>
            </a>
          </div>
        </div>
        <div className="socialrow3">
          <div className="row1container">
            <a href="mailto:mayanksaxena2214@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail className='gmail' />
              <p>Gmail</p>
            </a>
          </div>
          <div className="row1container">
            <a href="https://www.linkedin.com/in/mayank-saxena-419388239/" target="_blank" rel="noopener noreferrer">
              <SiLinkedin className='linkedin' />
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="row1container">
            <a href="https://wa.me/9259525543?text=Hello" target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className='whatsapp' />
              <p>Whatsapp</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
