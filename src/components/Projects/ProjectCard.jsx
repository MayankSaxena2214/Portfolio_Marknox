import React from 'react'

const ProjectCard = ({image,heading,info,deploy}) => {
  return (
    <div className="projectcard-container">
        <div className="project-image">
          <img src={image} alt="" />
        </div>
        <div className="project-content">
          <div className="project-heading">{heading}</div>
          <div className="project-info">{info}</div>
          <a href={deploy}>Check Here</a>
        </div>
    </div>
  )
}

export default ProjectCard