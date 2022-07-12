import React from 'react';
import './nav.styles.scss';
import { FcHome, FcBusinessman, FcServices, FcMultipleDevices, FcContacts } from 'react-icons/fc';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FcHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcBusinessman/></a>
      <a href="#skills" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FcServices/></a>      
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FcMultipleDevices/></a>      
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FcContacts/></a>
    </nav>
  )
}

export default Nav;