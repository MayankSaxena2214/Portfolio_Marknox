import React from 'react'
import "./Education.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdTimer10Select } from "react-icons/md";
import { TbNumber12Small } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <div className='education-container'>
        <h1>Education</h1>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2017-2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdTimer10Select/>}
  >
    <h3 className="vertical-timeline-element-title">High School (10th)</h3>
    <h4 className="vertical-timeline-element-subtitle">B.J.S. Public School Meerut</h4>
    <p>
      Percentage - 92%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(255, 107, 107)', color: '#fff' }}
    date="2019-2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<TbNumber12Small/>}
  >
    <h3 className="vertical-timeline-element-title">Intermedite (12th)</h3>
    <h4 className="vertical-timeline-element-subtitle">L.T.R. Public School, Meerut</h4>
    <p>
      Percentage 96.8%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(155, 89, 182)', color: '#fff' }}
    date="2021-2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">B.Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">Bharat Institute of Technology, Meerut</h4>
    <h4>Computer Science Engineering</h4>
    <p>
      Cgpa-8.55
    </p>
  </VerticalTimelineElement>
  
  </VerticalTimeline>
    </div>
  )
}

export default Education