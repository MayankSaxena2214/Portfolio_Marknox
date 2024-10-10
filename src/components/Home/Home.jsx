import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import image from "../../assets/Profile_Mayank.png"
const Home = () => {
  return (
    <div className='home-container'>
        <div className="image-section">
            <div className="image-wrap1">
                <div className="image-wrap2">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
        <div className="home-content">
            <div className="home-welcome">Hello there, welcome to my portfolio</div>
            <div className="home-name">My Name is Mayank Saxena</div>
            <span>I'm a </span>
            <Typewriter className='home-typewriter'
                options={{
                    strings: ["MERN Stack Developer","Backend Developer","Frontend Developer","Node.js Developer","React.js Developer"],
                    autoStart: true,
                    loop: true,
                    
                }}
                
            />
            <div className="home-btn">
                <a href="https://drive.google.com/file/d/19k8x1Cy22kdbwCgtLcCYnj5sGWrCgXpF/view?usp=sharing"><button>View Resume</button></a>
            </div>
        </div>
    </div>
  )
}

export default Home