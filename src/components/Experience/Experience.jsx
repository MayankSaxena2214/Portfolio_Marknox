import React from 'react'
import "./Experience.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experience = () => {
  return (
    <div className="experience-container">
        <h1>Experience</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="April 2024- May 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Octanet</h4>
    <p>
      Html, Css and Javascript
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(255, 107, 107)', color: '#fff' }}
    date="July 2024- August 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Mern Stack Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Zidio</h4>
    <p>
      Mongodb, Reactjs, Nodejs, Expressjs
    </p>
  </VerticalTimelineElement>
  
  
  </VerticalTimeline>
    </div>
  )
}

export default Experience