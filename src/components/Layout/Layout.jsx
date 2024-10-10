import React, { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Socials from '../Socials/Socials';
import Footer from '../Footer/Footer';
import "./Layout.css";
import Certificate from '../Certificates/Certificate';

const Layout = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const socialsRef = useRef(null);
  const certificateRef = useRef(null); // Reference for Certificate section

  // Function to handle scroll when section is clicked in Navbar
  const handleScroll = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'education':
        educationRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'experience':
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'socials':
        socialsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'certificates': // Added case for certificates
        certificateRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='layout-container'>
      {/* Pass handleScroll to Navbar so it can call it when a link is clicked */}
      <Navbar handleScroll={handleScroll} />
      <div ref={homeRef}><Home /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
      <div ref={socialsRef}><Socials /></div>
      <div ref={certificateRef}><Certificate /></div> {/* Added ref for Certificate */}
      <Footer />
    </div>
  );
};

export default Layout;
