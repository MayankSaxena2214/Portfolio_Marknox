import React from 'react'
import "./Skills.css"
import {} from "react-icons/fa"
import { AiFillHtml5, AiOutlineJavaScript } from "react-icons/ai"
import { SiBootstrap, SiCplusplus, SiExpress, SiGit, SiGithub, SiMongodb, SiMysql, SiReact, SiTailwindcss } from "react-icons/si";
import { FaCss3, FaDatabase, FaJava, FaNode, FaPython } from 'react-icons/fa6'

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skill-icons">
          <div className="row">
          <div className="row-hold"><AiFillHtml5 className='skill-icon html' /><p>HTML</p></div>
          <div className="row-hold"><FaCss3 className='skill-icon css'/><p>CSS</p></div>
          <div className="row-hold"><AiOutlineJavaScript className='skill-icon javascript'/><p>JAVASCRIPT</p></div>
          <div className="row-hold"><FaNode className='skill-icon nodejs'/><p>NODEJS</p></div>
          </div>
         <div className="row">
         <div className="row-hold"><SiCplusplus className='skill-icon cpp'/><p>C++</p></div>
          <div className="row-hold"><SiExpress className='skill-icon express'/><p>EXPRESS</p></div>
          <div className="row-hold"><SiMongodb className='skill-icon mongodb'/><p>MONGODB</p></div>
          <div className="row-hold"><SiMysql className='skill-icon mysql'/><p>MYSQL</p></div>
         </div>
         <div className="row">
         <div className="row-hold"><SiGit className='skill-icon git'/><p>GIT</p></div>
          <div className="row-hold"><SiGithub className='skill-icon githubskills'/><p>GITHUB</p></div>
          <div className="row-hold"><SiReact className='skill-icon react'/><p>REACTJS</p></div>
          <div className="row-hold"><SiTailwindcss className='skill-icon tailwind'/><p>TAILWIND CSS</p></div>
         </div>
          <div className="row">
          <div className="row-hold"><SiBootstrap className='skill-icon bootstrap'/><p>BOOTSTRAP</p></div>
          <div className="row-hold"><FaPython className='skill-icon python'/><p>PYTHON</p></div>
          <div className="row-hold"><FaJava className='skill-icon java'/><p>JAVA</p></div>
          <div className="row-hold"><FaDatabase className='skill-icon database'/><p>DATABASE</p></div>
          </div>
          
      </div>
    </div>
  )
}

export default Skills