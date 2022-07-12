import React from 'react';
import './about.styles.scss';
import aboutPicture from '../../assets/about-me.png';
import {FaAward} from 'react-icons/fa';
import {MdVolunteerActivism} from 'react-icons/md';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutPicture} alt="About Image" />
          </div>
        </div>
        <div className="about__content"> 
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>15+ Years Working</small>
            </article>

            <article className="about__card">
              <MdVolunteerActivism className='about__icon'/>
              <h5>Volunteer</h5>
              <small>Volunteer work...</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Different technologies</small>
            </article>
          </div>

          <p>
            Father, husband, student, learning and IT enthusiastic. 
            Professional with extensive academic and management experience, currently updating technical skills at NSCC, looking for an opportunity in the local IT industry as a Web Developer
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About;