import React from 'react'
import "./Projects.css"
import ProjectCard from './ProjectCard'
import image from "../../assets/JobPortal.png"
import blog from "../../assets/blog.png"
import airbnb from "../../assets/airbnb.png"
import learning from "../../assets/learning.png"
import auth from "../../assets/Authentication.png"
import spotify from "../../assets/spotify.png"
import figma from "../../assets/figma.png"
import imagehandling from "../../assets/handlingimages.png"
const Projects = () => {
  return (
    <div className="projects-container">
        <h1>Projects</h1>
        <div className="major-project">
        <ProjectCard image={image} heading={"Job Portal"} info={" Built a job portal with MongoDB, Express, React, and Node, featuring jobpostings, authentication apply jobs,demonstrating expertise in both front-end and back-end development"} deploy={"https://jobportalfrontend-1-0zvc.onrender.com/"}/>
        <ProjectCard image={blog} heading={"Blog Website"} info={" Developedafull-featured blog application with user authentication, CRUD operations, image upload, form validation, and a user-friendly dashboard"} deploy={"https://blog-frontend-hy4a.onrender.com/"}/>
        <ProjectCard image={airbnb} heading={"Airbnb"} info={" Developed a responsive Airbnb-like website, integrating user authentication, dynamic listings, and booking functionalities, showcasing front-end development skills"} deploy={"https://airbnb-8pav.onrender.com/listings"}/>
        <ProjectCard image={learning} heading={"E-Learning"} info={"An e-learning website offering interactive courses, quizzes, and certifications in various subjects, enabling users to learn at their own pace with engaging content and personalized progress tracking"} deploy={"https://e-learning-frontend-5eycc3lo5-mayanksaxena2214s-projects.vercel.app/"}/>
        </div>
        <div className="mini-project">
        <ProjectCard image={imagehandling} heading={"Image Handling"} info={"Integrated Cloudinary for efficient image handling.Implemented features for image upload,ensuring files on both the front-end and back-end. Demonstrated expertise in cloud-based storage solutions."} deploy={"https://imageassignment-frontend.onrender.com/"}/>
        <ProjectCard image={figma} heading={"React Landing Page"} info={"Developed a responsive landing page in React based on a Figma design,  Ensured   Demonstrated proficiency in front-end , including attention to design details and responsive styling"} deploy={"https://react-assignment-h1pb.onrender.com/"}/>
        <ProjectCard image={spotify} heading={"Spotify UI"} info={"Recreated Spotify’s user interface using HTML, CSS, and JavaScript. Implemented interactive elements such as play/pause and volume control and attention to detail in user experience."} deploy={"https://spotifyclone-kgia.onrender.com/"}/>
        <ProjectCard image={auth} heading={"Authentication JWT"} info={"Developed  authentication system using JWT for token-based authentication, integrated with a React frontend. Implemented user login, registration,. Demonstrated proficiency in MERN development "} deploy={"https://assignment-naukri-frontend.onrender.com/"}/>
        </div>
    </div>
  )
}

export default Projects