import React from 'react';
import './about.styles.scss';
import aboutPicture from '../../assets/about-me.png';
import {FaAward} from 'react-icons/fa';
import {MdOutlineLanguage} from 'react-icons/md';
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
              <small>15+ years in higher education as an instructor and leader in the IT field</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Worked with different technologies (front-end and back-end)</small>
            </article>
            <article className="about__card">
              <MdOutlineLanguage className='about__icon'/>
              <h5>Languages</h5>
              <small>English and Portuguese</small>
            </article>
          </div>

          <p>
            Father, husband, student, learning and IT enthusiastic. 
            I'm a Web Developer with experience in teaching, designing, implementing and supervising undergraduate IT programs (face-to-face and distance learning). 
            I recently upgraded my technical skills at NSCC (Web Programming Program). During the last few years, I worked on different projects using different technologies, e.g. RESTful APIs, React JS, Express JS, Node JS, Axios, AWS, Azure, Heroku, Docker, Laravel, Drupal, Bootstrap, MySQL, and Mongo DB, among other technologies.
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About;