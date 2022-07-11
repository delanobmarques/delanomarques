import React from 'react';
import './nav.styles.scss';
import { FcHome, FcBusinessman, FcServices, FcVoicePresentation, FcContacts } from 'react-icons/fc';
import { FaHistory } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FcHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcBusinessman/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaHistory/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FcServices/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><ImBook/></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><FcVoicePresentation/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FcContacts/></a>

    </nav>
  )
}

export default Nav;