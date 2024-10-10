import React from 'react'
import "./Contact.css"
import {FaLocationArrow,FaPhone} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-upper">
          <div className="infoupper1">Contact Me</div>
          <div className="upper-info-heading">Get in Touch</div>
          <div className="infoupper2">Feel free to ask any query</div>
      </div>
      <div className="contact-lower">
        <div className="lower1">
          <div className="lowericon"><SiGmail className='icon'/></div>
          <div className="lowerheading">Email</div>
          <div className="lowerinfo1">I am here to respond to your queries</div>
          <div className="lowerinfo2">mayanksaxena2214@gmail.com</div>
        </div>
        <div className="lower2">
        <div className="lowericon"><FaLocationArrow className='icon'/></div>
          <div className="lowerheading">My Home</div>
          <div className="lowerinfo1">Come and Say Hello</div>
          <div className="lowerinfo2">Sector-3 Madhav Puram Meerut</div>
        </div>
        <div className="lower3">
        <div className="lowericon"><FaPhone className='icon'/></div>
          <div className="lowerheading">Phone</div>
          <div className="lowerinfo1">Call me at any time</div>
          <div className="lowerinfo2">+91 9259525543</div>
        </div>
      </div>
    </div>
  )
}

export default Contact